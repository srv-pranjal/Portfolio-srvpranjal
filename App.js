function openPage(pageId, navId) {
  handlePages(pageId);
  makeActive(navId);
  burgerButton = document.querySelector(".fa-times");
  burgerButton.classList.remove("fa-times");
  burgerButton.classList.add("fa-bars");
}

function openMobileNav() {
  var x = document.querySelector("#mobile-nav");
  var currNavId = document.querySelector(".active");
  var currPageId = currNavId.innerHTML.toLowerCase();
  if (x.style.display === "flex") {
    x.style.display = "none";
    burgerButton = document.querySelector(".fa-times");
    burgerButton.classList.remove("fa-times");
    burgerButton.classList.add("fa-bars");
    handlePages(currPageId);
  } else {
    x.style.display = "flex";
    burgerButton = document.querySelector(".fa-bars");
    burgerButton.classList.remove("fa-bars");
    burgerButton.classList.add("fa-times");
    document.querySelector("#home").style.display = "none";
    document.querySelector("#about").style.display = "none";
    document.querySelector("#resume").style.display = "none";
    document.querySelector("#projects").style.display = "none";
    document.querySelector("#blogs").style.display = "none";
    document.querySelector("#contact").style.display = "none";
  }
}

function makeActive(navID) {
  var navElements = document.getElementsByClassName("link-primary");
  for (var x = 0; x < navElements.length; x++) {
    if (navElements[x].classList.contains("active")) {
      navElements[x].classList.remove("active");
    }
  }
  var element = document.getElementById(navID);
  element.classList.add("active");
  scrollto(element);
}

function handlePages(pageID) {
  document.querySelector("#home").style.display = "none";
  document.querySelector("#about").style.display = "none";
  document.querySelector("#resume").style.display = "none";
  document.querySelector("#projects").style.display = "none";
  document.querySelector("#blogs").style.display = "none";
  document.querySelector("#contact").style.display = "none";
  document.querySelector("#mobile-nav").style.display = "none";
  if (pageID == "home") {
    document.querySelector("#secondary-nav-bar").style.display = "none";
    document.getElementById(pageID).style.display = "flex";
  } else {
    document.querySelector("#secondary-nav-bar").style.display = "flex";
    document.getElementById(pageID).style.display = "block";
  }
}

function onSubmit() {
  document.querySelector("#form").submit();
  console.log("form submitted");
}

const scrollto = (el) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function animateSkills() {
  var element = document.querySelector(".cplusplus");
  console.log(element);
  element.style.backgroundColor = "red";
}
