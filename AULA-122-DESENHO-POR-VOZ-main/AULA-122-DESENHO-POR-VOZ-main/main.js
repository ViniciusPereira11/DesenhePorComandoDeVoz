//facilitar a sua vida
//classe de rôbos escutadores
var SpeechRecognition = window.webkitSpeechRecognition;
//fazer um robôzinho escutador
var robozinho = new SpeechRecognition();
function setup(){
    canvas = createCanvas(320, 280);
    canvas.position(windowWidth/2 - 160, 140);
    background("white");
}
function start(){
    //mandar o robô escutar
    robozinho.start();
    msg.innerHTML = "o sistema está ouvindo......";

}
var x = 0;
var y = 0;
var fala = "";
var podeDesenhar = false;
var kibe;
//facilitar a sua vida ;-;
var msg = document.getElementById("msg");
//define o que ocorre quando termina de ouvir
robozinho.onresult=(e)=>{
    fala = e.results[0][0].transcript;
    msg.innerHTML = "O sistema ouviu" + fala;
    if(fala=='bola' || fala == "kibe" || fala == "banana"){
        //gera um nº aleatório
        x = random(20,300);
        y = random(20, 260);
        podeDesenhar = true;

    }

}
//precarrega arquivos de mídia
function preload(){
    kibe = loadImage("Kirby.png");
    banana = loadImage("BandanaWaddleDee.png");
}
function draw(){
    if(podeDesenhar){
        if(fala=='bola'){
            circle(x,y,30);
        }
        if(fala=='kibe'){
            image (kibe, x, y, 70, 70);
        }
        if(fala=='banana'){
            image (banana, x, y, 70, 70);
        }
    }
}