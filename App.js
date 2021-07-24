
function openHome(){
    handlePages("home");
    makeActive("nav-home");
}

function openAbout(){
  handlePages("about");
  makeActive("nav-about");
}

function openProjects(){
    handlePages("projects");
    makeActive("nav-projects")
}

  function openResume(){
    handlePages("resume");
    makeActive("nav-resume");
}

function openContact(){
    handlePages("contact");
    makeActive("nav-contact");
}

// function openMobileNav() {
//     var x = document.getElementById("mobile-nav");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//     document.getElementById("home").style.display="none";
//     document.getElementById("about").style.display="none";
//   }

function makeActive(navID){
  var navElements = document.getElementsByClassName("link-primary");
  for(var x=0;x<navElements.length;x++)
  {
    if(navElements[x].classList.contains("active")){
      navElements[x].classList.remove("active");
    }
  }
  var element = document.getElementById(navID);
  element.classList.add("active");
}

function handlePages(pageID){
  document.getElementById("home").style.display="none";
  document.getElementById("about").style.display="none";
  document.getElementById("resume").style.display="none";
  if(pageID=="home")
  {
    document.getElementById("secondary-nav-bar").style.display="none";
    document.getElementById(pageID).style.display="flex";
  }
  else
  {
    document.getElementById("secondary-nav-bar").style.display="flex";
    document.getElementById(pageID).style.display="block";
  }
}