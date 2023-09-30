$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY >= 20) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
});

let btn = document.querySelector("button");
console.log(btn);

window.onscroll = function () {
  if (window.scrollY >= 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
let root = document.querySelector(":root"); //get root styling
let logo = document.querySelector(".logo"); // logo element
let mainDiv = document.querySelector(".main"); // main div (element);
let projectDiv = document.querySelector(".projects"); // progect div (element);
let serviceDiv = document.querySelector("#services"); // service div (element)
let contactDiv = document.querySelector("#contact"); // contact div (element)
let footerDiv = document.querySelector(".footer"); // footer div (element)

let cardTop = getComputedStyle(document.documentElement).getPropertyValue(
  "--card-top"
); // get card top value

let nightMood = getComputedStyle(document.documentElement).getPropertyValue(
  "--night" // night variable color
);
let dayMood = getComputedStyle(document.documentElement).getPropertyValue(
  "--day" // day variable color
);

let footerTextColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--footer-text-color");
let star = document.querySelector("#star"); // star div (moon / sun)

// onclick on the logo
let mood = 0; // initializing mood
logo.onclick = function () {
  if (mood) {
    projectDiv.style.backgroundImage = nightMood;
    mainDiv.style.backgroundImage = nightMood;
    footerDiv.style.backgroundImage = nightMood;
    serviceDiv.classList.remove("light"); // for the service section
    serviceDiv.classList.add("dark"); // for the service section
    contactDiv.classList.remove("light"); // for the contact section
    contactDiv.classList.add("dark"); // for the contact section
    star.classList.remove("sun");
    star.classList.add("moon");
    logo.style.color = "#357ebd";
    root.style.setProperty("--main-color", "#357ebd");
    root.style.setProperty("--card-top", "#3b308e");
    root.style.setProperty("--footer-text-color", "white");
    mood = 0; // changing mood value Important
    console.log(" we entered the if");
  } else {
    projectDiv.style.backgroundImage = dayMood;
    mainDiv.style.backgroundImage = dayMood;
    footerDiv.style.backgroundImage = dayMood;
    serviceDiv.classList.remove("dark"); // for the service section
    serviceDiv.classList.add("light"); // for the service section
    contactDiv.classList.remove("dark"); // for the service section
    contactDiv.classList.add("light"); // for the service section
    star.classList.remove("moon");
    star.classList.add("sun");
    logo.style.color = "black";
    root.style.setProperty("--main-color", "black");
    root.style.setProperty("--card-top", "#b7c9d9");
    root.style.setProperty("--footer-text-color", "rgb(99, 99, 99)");
    mood = 1; // changing mood value
  }
};
