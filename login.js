function login(){

    var username = document.getElementById("loginUsername").value ;
    var password = document.getElementById("loginPassword").value ;

    alert(username);
}
function Create(){

    var newusername = document.getElementById("createUsername").value ;
    var newPassword = document.getElementById("createPassword").value ;

    alert(newusername);
}

document.getElementById("mylink").addEventListener("click",function(){
    var icon = document.getElementById("myIcon");
    icon.classList.toggle("changed-icon");
});

