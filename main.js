function setup(){
    canvas=createCanvas(500,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

song="";

function preload(){
    song=loadSound("music.mp3");
}

function draw(){
    image(video,0,0,500,500)
}

function musicplay(){
    song.play();
}

function musicstop(){
    song.stop();
}