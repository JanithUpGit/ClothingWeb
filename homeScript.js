

function displayLogin(){
    let fullWeb = document.getElementById("full");
    let navv = document.getElementById("navi");
    let loginpage = document.querySelector(".backg");
    fullWeb.style.display = "none";
    navv.style.display = "none";
    loginpage.style.display= "block";
}


function login(event) {
    event.preventDefault();
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("passWord").value;
    
        if(userName == 'admin' && password =='admin'){
            let fullWebb = document.getElementById("full");
            let navvi = document.getElementById("navi");
            let loginpagee = document.querySelector(".backg");
            fullWebb.style.display = "block";
            navvi.style.display = "block";
            loginpagee.style.display= "none";

        }
        else{
            document.getElementById("userName").value = ''
            document.getElementById("passWord").value = ''
            alert('Your username or pasword is incorrect!!!');
            let fullWebb = document.getElementById("full");
            let navvi = document.getElementById("navi");
            let loginpagee = document.querySelector(".backg");
            fullWebb.style.display = "none";
            navvi.style.display = "none";
            loginpagee.style.display= "block";
        }

}




