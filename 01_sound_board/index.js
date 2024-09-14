const btn = document.querySelectorAll(".btn");


btn.forEach(b=>{
    
    b.addEventListener('mousedown',()=>{
        console.log('down');
        b.classList.toggle("musicclicked");
    })
    b.addEventListener('mouseup',()=>{
    
        console.log('up');
        b.classList.toggle("musicclicked");
    })
    b.addEventListener('mouseleave',()=>{
    
        console.log('up');
        b.classList.remove('musicclicked');
    })

})

const b = document.querySelector(".btn")
b.addEventListener("click",(e)=>{

    if(e.target.value == 'q'){
        console.log('work it');
    }

    console.log(e);
})

const body = document.querySelector("body");
const select = document.querySelector(".background");

select.addEventListener("change", (e) => {
  console.log(e.target.value);
  body.style.backgroundImage = `url('${e.target.value}')`; // Corrected line
});



btn.forEach(b=>{
    b.addEventListener('click',(e)=>{
        const audio = new Audio(`./sounds/${e.target.value}.wav`);
        console.log('clicked btn');
        audio.play();
    })
})


const music = document.querySelector('.music');

const beat = new Audio('./sounds/beat.mp3');

music.addEventListener('click',(e)=>{

    if (beat.paused) {
        beat.loop = true;
        beat.play();
    } else {
        beat.pause();
    }
})


const map = {
    'q': 'work_it',
    'w': 'make_it',
    'u': 'do_it',
    'i': 'makes_us',
    'a': 'harder',
    's': 'better',
    'j': 'faster',
    'k': 'stronger',
    'e': 'more_than',
    'r': 'hour',
    'o': 'our',
    'p': 'never',
    'd': 'ever',
    'f': 'after',
    'l': 'work_is',
    ';': 'over'
}
const arr = Object.keys(map).forEach(e=>console.log(e))


document.addEventListener('keydown', (e) => {
  console.log(e.key);

  const temp =  new Audio(`./sounds/${map[e.key]}.wav`);
  temp.play();
  
})

