const openMenu = document.querySelector(".btn-mobile");
const navBarMobile = document.querySelector(".mobile-nav");
const closeMenu = document.querySelectorAll(".mobile-nav__menu--a");
const body = document.querySelector("body");

function handleButtonMobile() {
  navBarMobile.classList.toggle("is-open");
  const containClass = navBarMobile.classList.contains("is-open");
  if (containClass) {
    body.classList.toggle("is-open");
  }
}

function handleCloseMenuClick() {
  closeMenu.forEach(close => {
    console.log(close)
    close.addEventListener("click", () => {
      navBarMobile.classList.remove("is-open");
      body.classList.remove("is-open");
    });
  });
}
handleCloseMenuClick()

openMenu.addEventListener("click", handleButtonMobile);
