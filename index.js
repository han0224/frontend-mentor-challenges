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

// const list = document.querySelector('.list');
// const projectLength = projects.length;

// projects.forEach(v=>{
//     const listItem = document.createElement('div');
//     listItem.className = 'list-item'
//     listItem.innerHTML=`<a href=/${v.name}/index.html>
//         <div class='instar'>
//         </div>
//         <img class="preview" src='/${v.name}/design/desktop-preview.jpg' alt="${v.name}" width='200' height='200'>
//         <p>${v.name}</p>
//     </a>
//     `
//     list.appendChild(listItem);
// });


const slider = document.querySelector('.slider');
const imgholder = document.querySelector('.imgholder');
const bullets = document.querySelector('.bullets');
projects.forEach((v,i)=>{
    const inputTag = document.createElement('input');
    inputTag.type='radio';
    inputTag.name='slide';
    inputTag.id='slide'+(i+1);
    slider.appendChild(inputTag);

    const liTag = document.createElement('li');
    liTag.innerHTML=`
    <img src = '/${v.name}/design/desktop-preview.jpg' alt='${v.name}' width='200' height='200'>
    `
    imgholder.appendChild(liTag);

    const labelTag = document.createElement('label');
    labelTag.for='slide'+(i+1);
    labelTag.innerText='&nbsp;'
    bullets.appendChild(labelTag);
})