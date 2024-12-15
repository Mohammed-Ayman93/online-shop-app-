let email = document.getElementById('exampleInputEmail1')
let password = document.getElementById('exampleInputPassword1')
let btnLogin = document.getElementById('btnLogin')

btnLogin.onclick = function(e){
    e.preventDefault()
    if(email.value === "" || password.value ===""){
        alert('please fill data')
    }else{
        if(email.value === localStorage.getItem("email") && password.value === localStorage.getItem("password")){
            alert("Loge In sucssefluy")
            setTimeout(() =>{
                window.location = "index.html"
            },1000)
        }else{
            alert("please enter ur data correctly")
        }

    }
}
