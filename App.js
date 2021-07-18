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
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    console.log("ss")
    console.log(typed_strings)
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
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