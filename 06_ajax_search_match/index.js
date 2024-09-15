import { countries } from './places.js';
const searchbox = document.querySelector('.searchbox');
const list = document.querySelector('.listItems');


searchbox.addEventListener('input',(e)=>{
    console.log(e.target.value);

    const regx = new RegExp(e.target.value,'ig');

    let filtered = e.target.value? countries.filter(i=>{
        return i.name.match(regx) || i.capital.match(regx);
    }):[];

    filtered = filtered.slice(0,12);
    const html = filtered.map((f,i)=>{

            const name = f.name.replace(regx,`<span class="highlight">${e.target.value}</span>`)
            const capital = f.capital.replace(regx,`<span class="highlight">${e.target.value}</span>`)

            if(i %2==0) return `
            <div class="item even row">
            <span>${name}, ${capital}</span> <span>${f.population.toLocaleString()}</span>
            </div>`
            else return `<div class="item odd row">
            <span>${name}, ${capital}</span> <span>${f.population.toLocaleString()}</span>
          </div>`

    }).join('')

    list.innerHTML = html;

})