const id = document.querySelector('.adviceId')
const goes = document.querySelector('.adviceGoes')

const url = 'https://api.adviceslip.com/advice'

const btnClick = () =>{
    getAdvice();
}

const getAdvice = () =>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        goes.innerHTML = `"${data.slip.advice}"`
        id.innerHTML = `ADVICE #${data.slip.id}`
        console.log(data.slip.advice, data.slip.id)
    })
}

getAdvice();