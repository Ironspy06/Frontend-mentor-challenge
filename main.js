const form =document.querySelector('.container form');
const email =document.querySelector('.container form input[type=email]');
form.addEventListener('submit',(e)=>{
    email.preventDefault();
    let emailValue=email.value;
    console.log(emailValue);
    if(validateEmail(emailValue)){
        form.classList.remove('error');
    }else{
      form.classList.add('error');
    }
});