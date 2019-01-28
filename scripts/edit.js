function disableBtns(){
    edit.disabled = true;
    cancel.disabled = true;
}
function enableBtns(){
    edit.disabled = false;
    cancel.disabled = false;
}
function cancelEdit(){
    disableBtns();
    window.location.assign("./index.html");
}
function editData(){
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
    formdata.append("id", id);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "./backend/edit.php");
    ajax.onreadystatechange = function(){
        if (ajax.readyState == 4 && ajax.status == 200){
            if (ajax.responseText == "updated"){
                sessionStorage["action"] = "updated";
            }
            else if (ajax.responseText == "notupdated"){
                sessionStorage["action"] = "notupdated";
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

var url = new URL(window.location.href);
var id = url.searchParams.get("id");
var message = document.querySelector(".message");
var edit = document.querySelector("#edit");
var cancel = document.querySelector("#cancel");