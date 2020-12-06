
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