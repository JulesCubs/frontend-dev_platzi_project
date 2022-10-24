const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
menuShoppingCart.addEventListener("click", toggleCartAside);

function toggleDesktopMenu() {
  const isAsideOpen = !aside.classList.contains("inactive");

  if (isAsideOpen) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideOpen = !aside.classList.contains("inactive");

  if (isAsideOpen) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCartAside() {
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");

  if (isMobileMenuOpen) {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
  }
  aside.classList.toggle("inactive");
}
