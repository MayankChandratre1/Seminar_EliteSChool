
window.onload = ()=> {
    let menuModal = document.querySelector(".menu-box");

document.querySelector(".menu-toggle").onclick =  ()=>{
       toggleModal(menuModal);
}

function toggleModal(modalContainer){
if(modalContainer.style.display != "none"){

    modalContainer.style.display = "none";
    modalContainer.style.scale = "0";
}
else{
    
    modalContainer.style.display = "flex";
    modalContainer.style.scale = "1";
}
}
}

