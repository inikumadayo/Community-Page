// Features logic
const appBtn = document.querySelector("#features-app-btn");
const websiteBtn = document.querySelector("#features-website-btn");
const adminBtn = document.querySelector("#features-admin-btn");
const tvosBtn = document.querySelector("#features-tvos-btn");
const btn = [appBtn, websiteBtn, adminBtn, tvosBtn];

const featuresApp = document.querySelector(".app");
const featuresWebsite = document.querySelector(".website");
const featuresAdmin = document.querySelector(".admin");
const featuresTvos = document.querySelector(".tvos");
const items = [featuresApp, featuresWebsite, featuresAdmin, featuresTvos];

function classCheck(btn) {
  return btn.element.classList.contains("features-active");
}

function addClass(add) {
  return add.classList.add("features-active");
}

function removeClass(rm) {
  return rm.classList.remove("features-active");
}

function active(on, con) {
  btn.forEach((item) => removeClass(item));
  items.forEach((item) => {
    item.style.display = "none";
  });
  return setTimeout(() => {
    addClass(on);
    con.style.display = "grid";
  }, 50);
}

appBtn.addEventListener("click", () => active(appBtn, featuresApp));
websiteBtn.addEventListener("click", () => active(websiteBtn, featuresWebsite));
adminBtn.addEventListener("click", () => active(adminBtn, featuresAdmin));
tvosBtn.addEventListener("click", () => active(tvosBtn, featuresTvos));
