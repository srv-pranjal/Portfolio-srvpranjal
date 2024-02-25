const homePage = document.querySelector("#home");
const aboutPage = document.querySelector("#about");
const resumePage = document.querySelector("#resume");
const projectsPage = document.querySelector("#projects");
const blogsPage = document.querySelector("#blogs");
const contactPage = document.querySelector("#contact");
const mobileNavBar = document.querySelector("#mobile-nav");
const secondaryNavBar = document.querySelector("#secondary-nav-bar");
const navElements = document.querySelectorAll(".link-primary");
const ageElement = document.querySelector("#age");
ageElement.innerText = getAge("2000/05/11");

function openPage(pageId, navId) {
  handlePages(pageId);
  makeActive(navId);
  let burgerButton = document.querySelector(".fa-times");
  if (burgerButton != null) {
    burgerButton.classList.remove("fa-times");
    burgerButton.classList.add("fa-bars");
  }
}

function openMobileNav() {
  var currNavId = document.querySelector(".active");
  var currPageId = currNavId.innerHTML.toLowerCase();
  if (mobileNavBar.style.display === "flex") {
    mobileNavBar.style.display = "none";
    let burgerButton = document.querySelector(".fa-times");
    burgerButton.classList.remove("fa-times");
    burgerButton.classList.add("fa-bars");
    handlePages(currPageId);
  } else {
    mobileNavBar.style.display = "flex";
    let burgerButton = document.querySelector(".fa-bars");
    burgerButton.classList.remove("fa-bars");
    burgerButton.classList.add("fa-times");
    hidePages();
  }
}

function hidePages() {
  homePage.style.display = "none";
  aboutPage.style.display = "none";
  resumePage.style.display = "none";
  projectsPage.style.display = "none";
  blogsPage.style.display = "none";
  contactPage.style.display = "none";
}

function makeActive(navID) {
  for (let index = 0; index < navElements.length; index++) {
    if (navElements[index].classList.contains("active")) {
      navElements[index].classList.remove("active");
    }
  }
  const element = document.getElementById(navID);
  element.classList.add("active");
  scrollto();
}

function handlePages(pageID) {
  hidePages();
  const currPage = document.getElementById(pageID);
  mobileNavBar.style.display = "none";
  if (pageID == "home") {
    secondaryNavBar.style.display = "none";
    currPage.style.display = "flex";
  } else {
    secondaryNavBar.style.display = "flex";
    currPage.style.display = "block";
  }
}

function onSubmit(e) {
  e.preventDefault();
  document.querySelector("#form").submit();
}

const scrollto = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
