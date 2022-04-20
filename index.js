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
    // {
    //     name: 'interactive-rating-page-app',
    // },
    // {
    //     name: 'interactive-rating-page-app',
    // },
    // {
    //     name: 'interactive-rating-page-app',
    // },
    // {
    //     name: 'interactive-rating-page-app',
    // },
    // {
    //     name: 'interactive-rating-page-app',
    // },
]

const list = document.querySelector('.list');

projects.forEach(v=>{
    const listItem = document.createElement('div');
    listItem.className = 'list-item'
    listItem.innerHTML=`<a href=/${v.name}/index.html>
        <div class='instar'>
        </div>
        <img class="preview" src='/${v.name}/design/desktop-preview.jpg' alt="${v.name}" width='200' height='200'>
        <p>${v.name}</p>
    </a>
    `
    list.appendChild(listItem);

})