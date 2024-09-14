const imageBox = document.querySelectorAll('.imagebox');

imageBox.forEach(i=>{

    i.addEventListener('click',(e)=>{

        console.log('clicked',i.firstChild);
        i.classList.toggle('focus');
    })
})