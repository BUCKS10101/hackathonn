let selectedCategory = "";
let selectedBlock = "";

// BLOCK DATA
const blocks = {
  ladies: ["A","B","C","D","E","F","G","H"],
  mens: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"],
  academic: ["SJT","TT","MB","GDN","PRP","SMV"]
};

// SELECT CATEGORY
function selectCategory(category) {
  selectedCategory = category;
  selectedBlock = "";

  // highlight selected button
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  document.getElementById(category).classList.add("active");

  renderBlocks();
}

// RENDER BLOCK OPTIONS
function renderBlocks() {
  const container = document.getElementById("blockContainer");
  container.innerHTML = "";

  blocks[selectedCategory].forEach(block => {
    container.innerHTML += `
      <div class="block-option" onclick="selectBlock('${block}')">
        ${block}
      </div>
    `;
  });
}

// SELECT BLOCK
function selectBlock(block) {
  selectedBlock = block;

  document.querySelectorAll(".block-option").forEach(el => {
    el.classList.remove("selected");
  });

  event.target.classList.add("selected");
}

// CONTINUE
function continueToConfirm() {
  if (!selectedCategory || !selectedBlock) {
    alert("Please select category and block");
    return;
  }

  const deliveryLocation = {
    category: selectedCategory,
    block: selectedBlock
  };

  localStorage.setItem("deliveryLocation", JSON.stringify(deliveryLocation));

  window.location.href = "checkout.html";
}
