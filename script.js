const button = document.querySelector('button');
const text = document.getElementById('advice-text');
const id = document.getElementById('id');

const url = 'https://api.adviceslip.com/advice'

async function getAdvice(){
    const response = await fetch(url);
    const advice = await response.json();
    id.textContent = advice.slip.id;
    text.textContent = '"'+advice.slip.advice+'"';
}
button.addEventListener("click", getAdvice);