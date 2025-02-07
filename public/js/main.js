import { openMenu, closeMenu } from 'components/hearder.js';

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