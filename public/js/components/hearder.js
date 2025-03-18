function loadHeader() {
  fetch("/public/pagesHtml/template/header.html")
    .then(response => response.text())
    .then(data => {
      const headerContainer = document.getElementById("header");
      if (headerContainer) {
        headerContainer.innerHTML = data;
      } else {
        console.warn("Elemento #header não encontrado na página.");
      }
    })
    .catch(error => console.error("Erro ao carregar o header:", error));
}

document.addEventListener("DOMContentLoaded", loadHeader);

const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector(".primary-navigation");

menuToggle.addEventListener("click", () => {
  const isOpened = menuToggle.getAttribute("aria-expanded") === "true";
  isOpened ? closeMenu() : openMenu();
});

function openMenu() {
  menuToggle.setAttribute("aria-expanded", "true");
  siteNavigation.setAttribute("data-state", "opened");
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  siteNavigation.setAttribute("data-state", "closing");

  siteNavigation.addEventListener(
    "animationend",
    () => {
      siteNavigation.setAttribute("data-state", "closed");
    },
    { once: true }
  );
}

export {openMenu, closeMenu, loadHeader};