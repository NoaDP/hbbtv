/**
 * Created by Noa on 12/11/2018.
 */
function loadUsersJSON()
{
    var url = "https://raw.githubusercontent.com/Dualsix/json/master/json/Usuarios.json";

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            didResponseUsers(xmlhttp.responseText);
        }
    };

    xmlhttp.overrideMimeType("application/json");
    xmlhttp.open("GET", url, true);

    xmlhttp.send(null);

}

function didResponseUsers(response){
    var jsonArray = JSON.parse(response);
    var users = JSON.stringify(jsonArray);
    localStorage.setItem('userListStorage', users);

}

function loadUsers() {
    var users = JSON.parse(localStorage.getItem("userListStorage"));
    for (i = 1; i <= users.datos.length; i++) {
        document.getElementById("U" + i).innerHTML = users.datos[i-1].Nombre;
    }
}