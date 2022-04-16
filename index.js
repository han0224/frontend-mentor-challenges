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
    const listItem = document.createElement('li');

    listItem.innerHTML=`<a href=/${v.name}/index.html>
        ${v.name}
    </a>
    `
    list.appendChild(listItem);

})