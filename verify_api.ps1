$ErrorActionPreference = "Stop"

# Use unique email to avoid "User already exists" error on re-runs
$email = "testuser_" + (Get-Date -Format "yyyyMMddHHmmss") + "@example.com"

Write-Host "1. Registering User ($email)..."
try {
    $registerResponse = Invoke-RestMethod -Uri "http://localhost:5001/api/users/register" -Method Post -ContentType "application/json" -Body (@{
        name = "Test User"
        email = $email
        password = "password123"
    } | ConvertTo-Json)
    Write-Host "User ID: $($registerResponse.userId)"
} catch {
    Write-Host "Registration failed: $($_.Exception.Message)"
    if ($_.Exception.Response) {
        Write-Host "Status: $($_.Exception.Response.StatusCode.value__)"
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        Write-Host "Body: $($reader.ReadToEnd())"
    }
    exit 1
}

Write-Host "`n2. Assigning Delivery..."
try {
    $assignResponse = Invoke-RestMethod -Uri "http://localhost:5001/api/delivery/assign" -Method Post -ContentType "application/json" -Body (@{
        restaurant = "Test Resto"
        block = "A"
        userId = $registerResponse.userId
    } | ConvertTo-Json)
    $deliveryId = $assignResponse.deliveryId
    $otp = $assignResponse.otp
    Write-Host "Delivery ID: $deliveryId"
    Write-Host "OTP: $otp"
} catch {
    Write-Host "Assign failed: $($_.Exception.Message)"
    exit 1
}

Write-Host "`n3. Verifying OTP (Incorrect)..."
try {
    Invoke-RestMethod -Uri "http://localhost:5001/api/delivery/verify-otp" -Method Post -ContentType "application/json" -Body (@{
        deliveryId = $deliveryId
        otp = "000000"
    } | ConvertTo-Json)
} catch {
    Write-Host "Correctly failed with status: $($_.Exception.Response.StatusCode.value__)"
}

Write-Host "`n4. Verifying OTP (Correct)..."
try {
    $verifyResponse = Invoke-RestMethod -Uri "http://localhost:5001/api/delivery/verify-otp" -Method Post -ContentType "application/json" -Body (@{
        deliveryId = $deliveryId
        otp = $otp
    } | ConvertTo-Json)
    Write-Host "Success: $($verifyResponse.success)"
    Write-Host "Message: $($verifyResponse.message)"
} catch {
    Write-Host "Verification failed: $($_.Exception.Message)"
    exit 1
}
