function setHands() {
    let date = new Date();

    const seconds = date.getSeconds();
    const secondDegree = ((seconds / 60) * 360) + 90; 
    document.querySelector('.second-hand').style.transform = `rotate(${secondDegree}deg)`;

    const mins = date.getMinutes();
    const minsDegree = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    console.log(minsDegree);
    document.querySelector('.minute-hand').style.transform = `rotate(${minsDegree}deg)`;

    const hour = date.getHours();
    const hourDegree = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setHands, 1000);