
// const complementos = [
//     `pom`,
//     `clap`,
//     `tim`,
//     `puff`,
//     `splash`,
//     `toim`,
//     `psh`,
//     `tic`,
//     `tom`
// ];

 
function tocaSom (seletorAudio) {
   
    const elemento = document.querySelector(seletorAudio);
    
   if (elemento && elemento.localName === 'audio'){ //no java nao preciso passar null pra algo pq ele é inteligente o suficiente pra isso
       elemento.play();                             //e por isso está if elemento &&...
   } else {
       alert('Elemento de audio nao encontrado');
   } 

}

const listaDeTeclas = document.querySelectorAll('.tecla');


//para

    for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }


}