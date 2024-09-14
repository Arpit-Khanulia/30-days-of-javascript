const allinputs = document.querySelectorAll(".inputcontrol");


const handleChange = (e)=>{
    const suffix = e.target.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${e.target.name}`,e.target.value + suffix);
}

allinputs.forEach(i=>{

    i.addEventListener('change',handleChange);
    i.addEventListener('mousemove',handleChange);
    
})