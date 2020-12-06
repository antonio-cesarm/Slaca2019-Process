
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

// Pupop
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