document.addEventListener("DOMContentLoaded", () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.nome) {
        const welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.innerText = `Olá, ${userData.nome}! Bem-vindo(a) ao guardião.`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const feed = document.querySelector('.feed');

    const contents = [
        {
            title: "Title of Educational Content 1",
            description: "Description of the educational content goes here. It can be a brief summary or introduction to the topic.",
            image: "images/content1.jpg",
            link: "#"
        },
        {
            title: "Title of Educational Content 2",
            description: "Description of the educational content goes here. It can be a brief summary or introduction to the topic.",
            image: "images/content2.jpg",
            link: "#"
        },
        // Add more content objects as needed
    ];

    contents.forEach(content => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${content.image}" alt="${content.title}">
            <div class="card-content">
                <h2>${content.title}</h2>
                <p>${content.description}</p>
                <a href="${content.link}" class="read-more">Read More</a>
            </div>
        `;

        feed.appendChild(card);
    });
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