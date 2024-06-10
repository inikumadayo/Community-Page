// Navigation logic
const mobileNavOpenBtn = document.querySelector(".open-nav-btn");
const brandName = document.querySelector(".brand-link");
const listMenu = document.querySelector(".list-container");

mobileNavOpenBtn.addEventListener("click", () => {
  if (brandName.style.display === "block") {
    brandName.style.display = "none";
    listMenu.style.display = "flex";
  } else {
    brandName.style.display = "block";
    listMenu.style.display = "none";
  }
});

// Features logic
const menuFeatures = document.querySelectorAll(".menu-features-items");
const featuresItems = document.querySelectorAll(".features");
let features = [];

features.forEach.call(menuFeatures, (feature) => {
  feature.addEventListener("click", menuClick, false);
});

function menuClick() {
  [].forEach.call(menuFeatures, (feature) => {
    if (feature !== this) {
      feature.classList.remove("features-active");
    }
  });
  this.classList.toggle("features-active");

  const classCheck = (cls) => this.classList.contains(cls);
  let nameCls;
  if (classCheck("app")) {
    nameCls = "app";
  } else if (classCheck("website")) {
    nameCls = "website";
  } else if (classCheck("admin")) {
    nameCls = "admin";
  } else {
    nameCls = "tvos";
  }

  [].forEach.call(featuresItems, (item) => {
    if (!item.classList.contains(nameCls)) {
      item.classList.remove("item-active");
    }

    if (item.classList.contains(nameCls)) {
      item.classList.toggle("item-active");
    }
  });
}

// Contact logic
const question = document.querySelectorAll(".question");
let questionMenu = [];

questionMenu.forEach.call(question, (el) => {
  el.addEventListener("click", questionClick, false);
});

function questionClick() {
  [].forEach.call(question, (el) => {
    if (el !== this) el.classList.remove("question-active");
  });

  this.classList.toggle("question-active");
}
