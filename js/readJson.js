/**
 * Created by Noa on 10/11/2018.
 */
function loadAllJSON()
{
    var url = "https://raw.githubusercontent.com/NoaDP/hbbtv/master/json/videoData.json";

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

function images(videos) {
   
    console.log(videos.datos.length);
    for (i = 1; i <= videos.datos.length; i++) {
        //"https://github.com/Dualsix/json/raw/master/img/" + videos.datos[i-1].ImgUrl;
        document.getElementById("imagen" + i).src = videos.datos[i-1].ImgUrl;
        document.getElementById("imagen" + i).style.height = "90px";
        document.getElementById("imagen" + i).style.width = "90px";
    }
}

function loadAutor(videos) {
    
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

function loadVisitas(videos) {
    
    console.log(videos);
    for (i = 1; i <= videos.datos.length; i++) {
        document.getElementById("view" + i).innerHTML = videos.datos[i - 1].Visitas;
    }
    
}

function loadtitulo(videos) {
  
    console.log(videos);
    for (i = 1; i <= videos.datos.length; i++) {
        document.getElementById("album" + i).innerHTML = videos.datos[i - 1].Titulo;
    }
}

function descripcion(videos, numero) {
   
    document.getElementById("nAuthor").innerHTML = "Author: " + videos.datos[numero].Author;
    //document.getElementById("nArtist").innerHTML = videos.datos[numero].Titulo;
    document.getElementById("nViews").innerHTML = "Views: " + videos.datos[numero].Visitas;
    document.getElementById("description").innerHTML = "List: " + videos.datos[numero].List;
}


function updateViews(videos,num){
    videos.datos[num].Visitas = parseInt(videos.datos[num].Visitas) +1;
}



