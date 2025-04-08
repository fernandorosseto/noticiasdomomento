
const fetchLatestNews = async () => {
    try {
        const response = await fetch('http://localhost:3000/news/latest');
        const data = await response.json();
        
        // Divide o texto em duas partes
        const text = data.text;
        const halfLength = Math.floor(text.length / 2);
        const firstPart = text.substring(0, halfLength);
        const secondPart = text.substring(halfLength);
        
        const newsSections = document.getElementById('news');
        newsSections.innerHTML = `
            <h2>${data.title}</h2>
            <h3>${data.subtitle}</h3>
            <p>${firstPart}</p>
            <!-- Novo banner - banner-google-ads-2 -->
            <div id="banner-google-ads-2" class="banner-ads">
                <div id="ad-container-2" class="ad-wrapper">
                    <iframe id="ad-iframe-2" class="ad-content" 
                            frameborder="0" 
                            src="https://8d99f26e76f383ab6c4a92d1aab74674.safeframe.googlesyndication.com/safeframe/1-0-40/html/container.html" 
                            title="Anúncio" 
                            scrolling="no" 
                            marginwidth="0" 
                            marginheight="0" 
                            data-is-safeframe="true" 
                            sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" 
                            allow="private-state-token-redemption;attribution-reporting" 
                            aria-label="Anúncio">
                    </iframe>
                </div>
            </div>
            <p>${secondPart}</p>
            <p>${data.word_keys}</p>
        `;
    } catch (error) {
        console.error('Erro ao carregar a notícia:', error);
        document.getElementById('news').innerHTML = '<p>Erro ao carregar a notícia.</p>';
    }
    console.log('teste fetch latest News')
}

export default fetchLatestNews;
