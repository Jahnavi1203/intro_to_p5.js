function preload(){
}

function setup(){
    canvas = createCanvas(640, 500);
    canvas.position(200, 200);
    video = createCapture(VIDEO);
    video.hide();
}

tint_color = "";

function draw(){
    image(video, 110, 110, 400, 300);
    rect(50, 20, 540, 20);
    rect(50, 20, 20, 440);
    rect(50, 440, 540, 20);
    rect(580, 20, 20, 440);
    fill("red");
    ellipse(56, 40, 55, 55);
    ellipse(56, 446, 55, 55);
    ellipse(586, 446, 55, 55);
    ellipse(586, 40, 55, 55);
    fill("blue");
    tint(tint_color);
}

function take_snapshot(){
    save('Jahnavi.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}