const btn = document.getElementById("menu-btn");

const menu = document.getElementById('menu');



navToggle = () => {
    btn.classList.toggle('open');

    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        menu.classList.add('flex')
    }else{
        menu.classList.remove('flex')
        menu.classList.add('hidden');

    }
}

btn.addEventListener('click', navToggle);