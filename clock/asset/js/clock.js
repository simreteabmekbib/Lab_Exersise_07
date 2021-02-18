setInterval(setClock, 1000);

const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.min');
const secondHand = document.querySelector('.sec');
const deg = 6;   // 360/60=6 for minute and second because rotate 60 times in one cycle 

function setClock() {
    const date = new Date();
    const currentHour = date.getHours() * 30; // rotate 12 times in one rotate so 360/12= 30
    const currentMinute = date.getMinutes() * deg; //
    const currentSecond = date.getSeconds() * deg;
    

    hourHand.style.transform = `rotateZ(${currentHour + (currentMinute/12)}deg)`;
    minuteHand.style.transform = `rotateZ(${currentMinute}deg)`; 
    secondHand.style.transform = `rotateZ(${currentSecond}deg)`;
}
setClock();