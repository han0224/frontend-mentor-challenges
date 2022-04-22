const projects = [
    {
        name: 'interactive-rating-page-app',
        date: '2022-03-22',
        blog: 'https://han0224.github.io/frontend%20mentor/Interactive-rating-page/',
    },
    {
        name: 'advice-generator-app',
        date: '2022-03-26',
        blog: 'https://han0224.github.io/frontend%20mentor/advice-generator-page/',
    },
    
    {
        name: 'calculator-app',
        date: '2022-04-11',
        blog: 'https://han0224.github.io/frontend%20mentor/calculator-app/',
    },
    
]

const cardsDiv = document.querySelector('.cards');
projects.forEach(v=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="content">
            <div class="img">
                <img src="/${v.name}/design/screenshot.png" alt="${v.name}">
            </div>
            <div class="details">
                <div class="name">${v.name}</div>
                <div class="date">${v.date}</div>
            </div>
            <div class="media-icons">
            <a href="#"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    `
    cardsDiv.appendChild(card);
})
