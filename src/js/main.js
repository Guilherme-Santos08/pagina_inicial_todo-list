const openMenu = document.querySelector(".btn-mobile");
const navBarMobile = document.querySelector(".mobile-nav")

openMenu.addEventListener("click", () => {
  navBarMobile.classList.toggle("is-open")
})