const button = document.querySelector('button')
const input = document.querySelector('input')
const select = document.querySelector('select')
const div = document.querySelector('div')
var strUser = select.options[select.selectedIndex].value;

button.addEventListener('click', e => {
    const span = document.createElement('span')
    span.style.margin = '20px'
    span.style.padding =' 20px'
    span.style.border = '1px solid black'
    
    if(select.options[select.selectedIndex].value === 'earth'){
        span.innerText = input.value;
    }else if (select.options[select.selectedIndex].value === 'pluto' ){
        const total = input.value * 6;
        span.innerText = `${total}`
    }else if(select.options[select.selectedIndex].value === 'neptun'){
        const sum = input.value * 12;
        span.innerText = `${sum}`
    }

    div.appendChild(span);
})
const insert = document.querySelector('#insert')
const text = document.querySelector('#input')
const list = document.querySelector('#list')

insert.addEventListener('click', e => {
    const li = document.createElement('li')
    li.innerText = text.value;


    list.appendChild(li);
})