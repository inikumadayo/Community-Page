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
  return btn.classList.contains("features-active");
}

function addClass(add) {
  return add.classList.add("features-active");
}

function removeClass(rm) {
  return rm.classList.remove("features-active");
}

function active(on, con) {
  btn.forEach((item) => {
    if (classCheck(item)) {
      removeClass(item);
    } else return;
  });
  items.forEach((item) => {
    item.style.display = "none";
  });
  addClass(on);
  con.style.display = "grid";
  return;
}

appBtn.addEventListener("click", () => active(appBtn, featuresApp));
websiteBtn.addEventListener("click", () => active(websiteBtn, featuresWebsite));
adminBtn.addEventListener("click", () => active(adminBtn, featuresAdmin));
tvosBtn.addEventListener("click", () => active(tvosBtn, featuresTvos));

// Contact logic
const question = document.querySelectorAll(".question");

[].forEach.call(question, (el) => {
  el.addEventListener("click", btnClick, false);
});

function btnClick() {
  [].forEach.call(question, (el) => {
    if (el !== this) el.classList.remove("question-active");
  });

  this.classList.toggle("question-active");
}
