function loadHeader() {
  fetch("/public/pagesHtml/template/header.html")
    .then(response => response.text())
    .then(data => {
      const headerContainer = document.getElementById("header");
      if (headerContainer) {
        headerContainer.innerHTML = data;
        setupMenu(); // chama setupMenu após o carregamento do #header
      } else {
        console.warn("Elemento #header não encontrado na página.");
      }
    })
    .catch(error => console.error("Erro ao carregar o header:", error));
}

function setupMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNavigation = document.querySelector(".primary-navigation");

  if (!menuToggle || !siteNavigation) {
    console.error("menuToggle ou siteNavigation não encontrados!");
    return;
  }

  menuToggle.addEventListener("click", () => {
    const isOpened = menuToggle.getAttribute("aria-expanded") === "true";
    isOpened ? closeMenu() : openMenu();
  });
}

function openMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNavigation = document.querySelector(".primary-navigation");

  if (menuToggle && siteNavigation) {
    menuToggle.setAttribute("aria-expanded", "true");
    siteNavigation.setAttribute("data-state", "opened");
  }
}

function closeMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNavigation = document.querySelector(".primary-navigation");

  if (menuToggle && siteNavigation) {
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
}

document.addEventListener("DOMContentLoaded", loadHeader);

export { openMenu, closeMenu, loadHeader };
