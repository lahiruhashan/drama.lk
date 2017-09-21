var button = document.querySelector("#signIn");
var pageContent = document.querySelector("#pageContent");
var loginSection = document.querySelector("#loginSection");
var closeButton = document.querySelector("#closeButton");

button.addEventListener("click",showMenu,false);
closeButton.addEventListener("click",showContent,false);

function showMenu(e){
   //pageContent.classList.add("show");
   loginSection.classList.add("showLog");
   closeButton.classList.remove("disappear");
}

function showContent(){
  //pageContent.classList.remove("show");
  loginSection.classList.remove("showLog");
  closeButton.classList.add("disappear");
}

$(document).on("click", "#loginButton", function() {
    $.get("Login", function(responseText) {
        $("#username-notify").css("display","flex");
        $("#password-notify").css("display","flex");
    });
});

$(document).ready(function () {
    $("#username").click(function () {
        $("#username-notify").css("display","none");
    })
});
