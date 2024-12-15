let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('exampleInputEmail1')
let password = document.getElementById('exampleInputPassword1')
let btnRgister = document.getElementById('btnRgister')

btnRgister.onclick = function(e){
    e.preventDefault()
    if(firstName.value === "" || lastName.value === "" || email.value ==="" || password.value ===""){
        alert('please fill data')
    }else{
        localStorage.setItem("firstName" , firstName.value);
        localStorage.setItem("lastName" , lastName.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);
        alert("Register succesflly ..")
        setTimeout(() =>{
            window.location = "login.html"
        },1000)
    }
}
