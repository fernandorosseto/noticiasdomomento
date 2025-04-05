
export const fetchLatestNews = async () => {
    try {
        const response = await fetch('http://localhost:3000/news/latest');
        const data = await response.json();
        
        const newsSections = document.getElementById('news');
        newsSections.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.content}</p>
        `;
    } catch (error) {
        console.error('Erro ao carregar a notícia:', error);
        document.getElementById('news').innerHTML = '<p>Erro ao carregar a notícia.</p>';
    }
    console.log('teste ')
}