/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
     navToggle = document.getElementById("nav-toggle"),
     navClose = document.getElementById("nav-close")

if (navToggle) {
     navToggle.addEventListener("click", () => {
          navMenu.classList.add("show-menu")
     })
}

if (navClose) {
     navClose.addEventListener("click", () => {
          navMenu.classList.remove("show-menu")
     })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link")

const linkAction = () => {
     const navMenu = document.getElementById("nav-menu")
     navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
     const header = document.getElementById("header")
     this.scrollY >= 50 ? header.classList.add("scroll-header")
          : header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
     const scrollUp = document.getElementById("scroll-up")
     this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
          : scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")

const scrollActive = () => {
     const scrollY = window.pageYOffset

     sections.forEach(current => {
          const sectionHeight = current.offsetHeight,
               sectionTop = current.offsetTop - 58,
               sectionId = current.getAttribute("id"),
               sectionClass = document.querySelector(".nav-menu a[href*=" + sectionId + "]")

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
               sectionClass.classList.add("active-links")
          } else {
               sectionClass.classList.remove("active-links")
          }
     })
}

window.addEventListener("scroll", scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "ri-sun-line"

const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line"

if (selectedTheme) {
     document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
     themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme)
}

themeButton.addEventListener("click", () => {
     document.body.classList.toggle(darkTheme)
     themeButton.classList.toggle(iconTheme)

     localStorage.setItem("selected-theme", getCurrentTheme())
     localStorage.setItem("selected-icon", getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const scr = ScrollReveal({
     origin: "top",
     distance: "60px",
     duration: 1500,
     delay: 250,
})

scr.reveal(".home-img, .footer-logo, .footer-description, .footer-content, .footer-title")
scr.reveal(".home-content", { origin: "bottom" })
scr.reveal(".about-content, .services-conten", { origin: "left" })
scr.reveal(".about-img, .services-img", { origin: "right" })
scr.reveal(".showroom-card", { interval: 100 })
