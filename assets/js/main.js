const headerNavbarToggler = document.querySelector(".header-navbar-toggler");
const navbarItems = document.querySelector(".header-nav-items");
const navbarLinks = document.querySelectorAll(".header-nav-items a");

headerNavbarToggler.addEventListener("click",()=>{
     headerNavbarToggler.classList.toggle('active');
     navbarItems.classList.toggle("open");
});


navbarLinks.forEach(elem => elem.addEventListener("click", ()=>{
     if(navbarItems.classList.contains("open")) {
          headerNavbarToggler.click();
     }
}));

