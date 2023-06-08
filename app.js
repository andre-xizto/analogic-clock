const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const hour = document.querySelector('.hour');
const text = document.querySelector('h1');

const getTime = () => {
    
    let date = new Date();
    const hourFormatted = (date.getHours()/10 >= 1) ? date.getHours() : `0${date.getHours()}`;
    const minuteFormatted = (date.getMinutes()/10 >= 1) ? date.getMinutes() : `0${date.getMinutes()}`;
    const secondFormatted = (date.getSeconds()/10 >= 1) ? date.getSeconds() : `0${date.getSeconds()}`;

    text.innerText = `${hourFormatted}:${minuteFormatted}:${secondFormatted}`

    const secrotate = (360/60) * date.getSeconds(); 
    const minrotate = (360/60) * date.getMinutes();
    const hourrotate = (360/12) * date.getHours();

    minute.style.transform = `rotate(${minrotate}deg)`;
    hour.style.transform = `rotate(${hourrotate}deg)`;
    second.style.transform = `rotate(${secrotate}deg)`;
}

getTime()

setInterval(() => {
    getTime()
}, 1000);