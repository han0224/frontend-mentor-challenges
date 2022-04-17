const projects = [
    {
        name: 'calculator-app',
    },
    {
        name: 'advice-generator-app',
    },
    {
        name: 'interactive-rating-page-app',
    },
]

const list = document.querySelector('.list');

projects.forEach(v=>{
    const listItem = document.createElement('div');
    listItem.className = 'listItem'
    listItem.innerHTML=`<a href=/${v.name}/index.html>
    <div class='instar'></div>
    <img class="screenshot" src='/${v.name}/design/screenshot.png' alt="${v.name}" width='200' height='200'>
    <p>${v.name}</p>
    </a>
    `
    list.appendChild(listItem);

})