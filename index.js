const header = document.querySelector(".header")
const ham = document.querySelector(".btn-mobile-nav")
const yearDiv = document.querySelector(".footer .year")
const links = document.querySelectorAll(".main-nav-link")
const sectionHero = document.querySelector(".section-hero")
yearDiv.textContent = new Date().getFullYear()

links.forEach(link => {
  link.addEventListener("click", () => {
    if (header.classList.contains("nav-open")) {
      header.classList.remove("nav-open")
    }
  })
})

if (ham) {
  ham.addEventListener("click", () => {
    header.classList.toggle("nav-open")
  })
}

/* Sticky nav */
const options = {
  root: null,
  threshold: 0,
  rootMargin: '-80px'
}

const observer = new IntersectionObserver((entries) => {
  const {isIntersecting} = entries[0]

  !isIntersecting
    ? header.classList.add("sticky")
    : header.classList.remove("sticky")

}, options)

observer.observe(sectionHero)