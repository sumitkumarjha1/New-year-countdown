const days = document.getElementById("days");
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const currentYear =new Date().getFullYear();
const newYearTime = new Date(`January 01 
${currentYear + 1} `);

function updateCountdowntime(){
    const currentTime =new Date();
    const diff = newYearTime - currentTime;
    const d =Math.floor(diff/1000/60/60/24);
    const h =Math.floor(diff/1000/60/60)%24;
    const m =Math.floor(diff/1000/60)%60;
    const s =Math.floor(diff/1000)%60;
     
console.log(d);

    days.innerHTML =d;
    hours.innerHTML = h<10 ? '0' + h :h;   //01 02 03 etc
    minutes.innerHTML = m<10 ? '0' + m :m;  //01 02 03 etc
    seconds.innerHTML = s<10 ? '0' + s :s;  //01 02 03 etc

}

setInterval(updateCountdowntime, 1000);