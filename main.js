

let open = document.getElementById('open');
let close = document.getElementById('close');
let list = document.getElementById('list');


function toggleOpen(){
    open.style.display = 'none';
    close.style.display = 'block';
    list.style.display = 'flex'
}

function toggleClose(){
    open.style.display = 'block';
    close.style.display = 'none';
    list.style.display = 'none'
}