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


function calculateReadingTime(element) {
  const wordsPerMinute = 200; // Média de leitura: 200 palavras por minuto
  const textContent = element.textContent;
  const wordsCount = textContent.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordsCount / wordsPerMinute);

  return readingTime;
}

// Exibe o tempo de leitura aproximado
const article = document.getElementById('news-article');
const readingTimeElement = document.getElementById('reading-time');
const readingTime = calculateReadingTime(article);

readingTimeElement.textContent = `Tempo de leitura aproximado: ${readingTime} minuto(s)`;