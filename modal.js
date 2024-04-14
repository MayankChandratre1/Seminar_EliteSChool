let modalContainer = document.getElementById("contactModal");
let modal = document.getElementsByClassName("modal")[0];



modalContainer.addEventListener("click",(e)=>{
    if(!(e.target.className === "modal")){
        toggleModal(modalContainer);
    }
})

document.querySelectorAll(".contact").forEach((button)=>{
    button.addEventListener( "click" , ()=>{
           toggleModal(modalContainer);
    })
})


document.querySelector(".menu-toggle").onclick =  ()=>{
        console.log(menuModal);
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