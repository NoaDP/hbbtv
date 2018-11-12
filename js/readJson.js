/**
 * Created by Noa on 10/11/2018.
 */
function loadAllJSON()
{
    var url = "https://raw.githubusercontent.com/Dualsix/json/master/videoData.json";

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            didResponse(xmlhttp.responseText);
        }
    };

    xmlhttp.overrideMimeType("application/json");
    xmlhttp.open("GET", url, true);

    xmlhttp.send(null);

}

function didResponse(response){
    var jsonArray = JSON.parse(response);
    var videos = JSON.stringify(jsonArray);
    localStorage.setItem('videoListStorage', videos);

}

function images() {
    var videos = JSON.parse(localStorage.getItem("videoListStorage"));
    console.log(videos.datos.length);
    for (i = 1; i <= videos.datos.length; i++) {
        document.getElementById("imagen" + i).src = videos.datos[i-1].ImgUrl;
        document.getElementById("imagen" + i).style.height = "90px";
        document.getElementById("imagen" + i).style.width = "90px";
    }
}

function loadAutor() {
    var videos = JSON.parse(localStorage.getItem("videoListStorage"));
    console.log(videos);
    for (i = 1; i <= videos.datos.length; i++) {
        document.getElementById("artist" + i).innerHTML = videos.datos[i-1].Author;
    }
}

//function loadtitulo(videos) {
//    var videos = JSON.parse(localStorage.getItem("videoListStorage"));
//    console.log(videos);
//    for (i = 1; i <= videos.datos.length; i++) {
//        document.getElementById("album" + i).innerHTML = videos.datos[i - 1].Titulo;
//    }
//}

function loadVisitas() {
    var videos = JSON.parse(localStorage.getItem("videoListStorage"));
    console.log(videos);
    for (i = 1; i <= videos.datos.length; i++) {
        document.getElementById("view" + i).innerHTML = videos.datos[i - 1].Visitas;
    }

}

/*function loadtitle() {
    var videos = JSON.parse(localStorage.getItem("videoListStorage"));
    console.log(videos);
    for (i = 1; i <= videos.datos.length; i++) {
        document.getElementById("album" + i).innerHTML = videos.datos[i - 1].Titulo;
    }

}*/
function descripcion(videos, numero) {
   
    document.getElementById("nAuthor").innerHTML = videos.datos[numero].Author;
    //document.getElementById("nArtist").innerHTML = videos.datos[numero].Titulo;
    document.getElementById("nViews").innerHTML = videos.datos[numero].Visitas;
    document.getElementById("description").innerHTML = videos.datos[numero].List;
}



