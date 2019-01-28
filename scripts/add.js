function disableBtns(){
    add.disabled = true;
    cancel.disabled = true;
}
function enableBtns(){
    add.disabled = false;
    cancel.disabled = false;
}
function cancelAdd(){
    disableBtns();
    window.location.assign("./index.html");
}
function addData(){
    disableBtns();

    var sname = document.querySelector("#sname");
    var dob = document.querySelector("#dob");
    var sport = document.querySelector("#sport");
    var role = document.querySelector("#role");

    var formdata = new FormData();
    formdata.append("sname", sname.value);
    formdata.append("dob", dob.value);
    formdata.append("sport", sport.value);
    formdata.append("role", role.value);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "./backend/add.php");
    ajax.onreadystatechange = function(){
        if (ajax.readyState == 4 && ajax.status == 200){
            if (ajax.responseText == "added"){
                sessionStorage["action"] = "added";
            }
            else if (ajax.responseText == "notadded"){
                sessionStorage["action"] = "notadded";
            }
            else if (ajax.responseText == "failed"){
                sessionStorage["action"] = "serverError";
            }
            window.location.replace("./index.html");
        }
        enableBtns();
    }
    ajax.send(formdata);
}

var add = document.querySelector("#add");
var cancel = document.querySelector("#cancel");