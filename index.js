const menuIcone = document.getElementById("menu-icon");
const menu = document.getElementById("menu");


menuIcone.addEventListener('click' , ()=>{
    if(menu.className==='hidden'){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden')

    }
 
})