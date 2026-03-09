const menuBtn = document.querySelector("[data-menu-btn]");
const navLinks = document.querySelector("[data-nav-links]");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (!navLinks.contains(target) && !menuBtn.contains(target)) {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}
