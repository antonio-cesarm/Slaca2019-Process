
// Habilitar digitação no form de texto
fildText.document.designMode = "On";     


// Função ler mais do Resumo

let status = 0;
function read(){
    if(!status){
        document.getElementById('read-content').style.display = 'inline';
        document.getElementById('read-dots').style.display = 'none';
        document.getElementById('read-more').innerHTML = 'Ver menos';

        status = 1;
    }else{
        document.getElementById('read-content').style.display = 'none';
        document.getElementById('read-dots').style.display = 'inline';
        document.getElementById('read-more').innerHTML = 'Ver Mais';
        status = 0;
    }
}

// Pupop FullScreen
let close = 0;
function closePopup(){
    if (!close){
        document.getElementById('popup').style.opacity = 1;
        document.getElementById('popup').style.visibility = 'visible';
        document.getElementById('popup').style.transform = 'scale(1)';
        close = 1;
        
        
    }else{
        document.getElementById('popup').style.opacity = 0;
        document.getElementById('popup').style.visibility = 'hidden';
        document.getElementById('popup').style.transform = 'scale(0.4)';
        close = 0;
    }
}


// Função de aparecer ou desaparecer o Box de Form e criar topico
let i = 0;
function showForm(){
    if (!i){
        //mostra Box com from para preencher
        document.getElementById('card-view').style.display = 'flex';
        document.getElementById('card-view').style.opacity = 1;
        document.getElementById('card-view').style.visibility = 'visible';
        document.getElementById('card-view').style.transform = 'scale(1)';

        //Desaparence box de criar topico
        document.getElementById('topico-view').style.display = 'none';
        document.getElementById('topico-view').style.opacity = 0;
        document.getElementById('topico-view').style.visibility = 'hidden';
        document.getElementById('topico-view').style.transform = 'scale(0.4)';

        i = 1;
        
    }else{
        //Desaparence box form
        document.getElementById('card-view').style.display = 'none';
        document.getElementById('card-view').style.opacity = 0;
        document.getElementById('card-view').style.visibility = 'hidden';
        document.getElementById('card-view').style.transform = 'scale(0.4)';

        //mostra Box de criar topico
        document.getElementById('topico-view').style.display = 'flex';
        document.getElementById('topico-view').style.opacity = 1;
        document.getElementById('topico-view').style.visibility = 'visible';
        document.getElementById('topico-view').style.transform = 'scale(1)';
        
        i = 0;
    }
}


var video = document.querySelector("#video-content");
var volume = document.querySelector("#video-content")

function playPause (){
    if (video.paused){
        video.play();
        document.querySelector(".btnPlay").style.display = "none"; 
        document.querySelector(".btnPause").style.display = "inline-block";
        document.querySelector(".video__contianer-img").style.visibility = "hidden";
        document.querySelector(".imge__video").style.visibility = "hidden";
        document.querySelector(".video__tittle").style.visibility = "hidden";
        document.querySelector(".fade").style.visibility = "hidden";
    }else {
        video.pause();
        document.querySelector(".btnPlay").style.display = "inline-block";
        document.querySelector(".btnPause").style.display = "none";
        document.querySelector(".video__contianer-img").style.visibility = "visible";
        document.querySelector(".imge__video").style.visibility = "visible";
        document.querySelector(".video__tittle").style.visibility = "visible";
        document.querySelector(".fade").style.visibility = "visible";
        
    }
}


function volumeMuted(){
    volume.muted = true;
    document.querySelector(".btnMuted").style.display = "inline-block";
    document.querySelector(".btnVolume").style.display = "none";
}

function volumeUp(){
    volume.muted = false;
    document.querySelector(".btnVolume").style.display = "inline-block";
    document.querySelector(".btnMuted").style.display = "none";
}


