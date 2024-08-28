
const button = document.getElementById('login');
const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e,"form");
})
button.addEventListener('click',Login);

function Login(){
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if(username.value =='' || password.value ==''){
        console.log("failed");
        alert(`fill all fields properly`);
       
    }
    else{
        console.log("login")
        alert(`Login Successfull`);
       
    }
}

