function startUp(){
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "./backend/index.php");
    ajax.onreadystatechange = function(){
        if (ajax.readyState == 4 && ajax.status == 200){
            if (ajax.responseText[0] == "<"){
                holder.innerHTML = ajax.responseText;
            }
            else if (ajax.responseText == "empty"){
                message.innerHTML = "No student data found. Add the first one.";
            }
            else if (ajax.responseText == "failed"){
                message.innerHTML = "Something bad happened.";
            }
        }
    }
    ajax.send();
}
var holder = document.querySelectorAll(".holder .row")[1];
var message = document.querySelector(".message");
window.addEventListener("load", startUp, false);

function delAlert(id){
    alert.style.display = "flex";
    delBtn.setAttribute("onclick", `delItem('${id}')`);
    cnclBtn.setAttribute("onclick", "closeAlert()");
}
function closeAlert(){
    alert.style.display = "none";
}
function delItem(id){
    var formdata = new FormData();
    formdata.append("id", id);
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "./backend/del.php");
    ajax.onreadystatechange = function(){
        if (ajax.readyState == 4 && ajax.status == 200){
            if (ajax.responseText == "deleted"){
                sessionStorage["action"] = "deleted";
            }
            else if (ajax.responseText == "notdeleted"){
                sessionStorage["action"] = "notdeleted";
            }
            else if (ajax.responseText == "failed"){
                sessionStorage["action"] = "serverError";
            }
            startUp();
            alert.style.display = "none";
        }
    }
    ajax.send(formdata);
}
var alert = document.querySelector(".alert");
var buttons = document.querySelectorAll(".alert .actions button");
var delBtn = buttons[0];
var cnclBtn = buttons[1];