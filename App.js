function openAbout(){
    document.getElementById("home").style.display="none";
    document.getElementById("secondary-nav-bar").style.display="flex";
    document.getElementById("about").style.display="block";
}

function openHome(){
    document.getElementById("home").style.display="flex";
    document.getElementById("secondary-nav-bar").style.display="none";
    document.getElementById("about").style.display="none";
}

// function openProjects(){
//     document.getElementById("home").style.display="none";
//     document.getElementById("secondary-nav-bar").style.display="flex";
//     document.getElementById("about").style.display="none";
// }

// function openResume(){
//     document.getElementById("home").style.display="none";
//     document.getElementById("secondary-nav-bar").style.display="flex";
//     document.getElementById("about").style.display="none";
// }

// function openContact(){
//     document.getElementById("home").style.display="none";
//     document.getElementById("secondary-nav-bar").style.display="flex";
//     document.getElementById("about").style.display="none";
// }

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