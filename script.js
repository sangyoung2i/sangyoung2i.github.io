const loginInput2 = document.querySelector("#login-form input");
const loginButton2 = document.querySelector("#login-form button");

function onLoginBtnClick(params) {
 const username = loginInput2.value;
  if (username === "") {
    alert("Please write your name");
  } else if(username.length >15) {
    alert("oh..no..")
  }  
}

loginButton2.addEventListener("click", onLoginBtnClick);