const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");


const getsec = ()=>{

    const now = new Date();
    return now.getSeconds();
}
const getmin = ()=>{

    const now = new Date();
    return now.getMinutes();
}
const gethour = ()=>{

    const now = new Date();
    return now.getHours();
}


setInterval(()=>{
    const sec = getsec();
    const min = getmin();
    const hr = gethour();
    console.log(sec,"seconds");
    console.log(min,"minutes");
    console.log(hr,"hours");

    const degsec = sec*6;
    const degmin = min * 6;
    const deghour = hr * 30;

    second.style.transform = `rotate(${degsec + 90}deg)`;
    minute.style.transform = `rotate(${degmin + 90}deg)`;
    hour.style.transform = `rotate(${deghour + 90}deg)`;

},1000)
