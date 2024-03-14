let modalAdmission = document.querySelector(".form-box");
let isRead = document.querySelector("#read");


function toggleAdmission(){
    if(!isRead.checked)
        alert("Check the checkbox under terms and condition")
    else
        modalAdmission.classList.toggle("form-box-hide");
}