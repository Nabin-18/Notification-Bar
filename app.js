const sucessButton = document.getElementById("sucess");
const errorButton = document.getElementById("error");
const invalidButton = document.getElementById("invalid");
const toastBox = document.getElementById("toastbox");
let successMessage = '<i class="fa-solid fa-circle-check"></i> Sucessfully submitted';
let errorMessage = ' <i class="fa-solid fa-circle-xmark"></i> Please fix the error';
let invalidMessage = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input,check again';


const myFunction = (msg) => {
    let toast = document.createElement('div');
    toast.classList.add('toast')//clss name
    toast.innerHTML = msg;
    toastBox.appendChild(toast);//accessing toast message in the div toast
    //toast box vitrako div lai chai toastbox vitra append gareko

    if (msg.includes('error'))//it search words error
    {
        toast.classList.add('error')//clss name
    }

    if (msg.includes('Invalid')) {
        toast.classList.add('invalid')//clss name
    }
    setTimeout(() => {
        toast.remove();
    }, 6000); 

}