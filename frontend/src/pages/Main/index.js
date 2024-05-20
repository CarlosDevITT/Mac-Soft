document.addEventListener('DOMContentLoaded', () => {
    const articlesContainer = document.querySelector('.articles');

    // URL da API que retorna os artigos
    const apiURL = 'https://www.scielo.br/j/reeusp/a/QfTCHCJQHLYQBZ7wC8wZ9sK/?format=pdf&lang=pt';

    // Função para obter artigos da API
    async function fetchArticles() {
        try {
            const response = await fetch(apiURL);
            const articles = await response.json();
            renderArticles(articles);
        } catch (error) {
            console.error('Erro ao buscar artigos:', error);
        }
    }

    // Função para renderizar os artigos no HTML
    function renderArticles(articles) {
        articlesContainer.innerHTML = ''; // Limpa qualquer conteúdo existente

        articles.forEach(article => {
            const articleElement = document.createElement('article');

            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <img src="${article.imageUrl}" alt="${article.title}">
                <p>${article.summary}</p>
                <a href="${article.link}" target="_blank">Leia mais</a>
            `;

            articlesContainer.appendChild(articleElement);
        });
    }

    // Chama a função para buscar e renderizar os artigos
    fetchArticles();
});


const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});