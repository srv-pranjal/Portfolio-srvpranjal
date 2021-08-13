function openPage(pageId,navId) {
  handlePages(pageId);
  makeActive(navId);
}


function openMobileNav() {
  var x = document.querySelector("#mobile-nav");
  var currNavId = document.querySelector(".active");
  var currPageId = currNavId.innerHTML.toLowerCase();
  if (x.style.display === "flex") {
    x.style.display = "none";
    handlePages(currPageId);
  } else {
    x.style.display = "flex";
  document.querySelector("#home").style.display = "none";
  document.querySelector("#about").style.display = "none";
  document.querySelector("#resume").style.display = "none";
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
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("resume").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("mobile-nav").style.display = "none";
  if (pageID == "home") {
    document.getElementById("secondary-nav-bar").style.display = "none";
    document.getElementById(pageID).style.display = "flex";
  } else {
    document.getElementById("secondary-nav-bar").style.display = "flex";
    document.getElementById(pageID).style.display = "block";
  }
}

const scrollto = (el) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
