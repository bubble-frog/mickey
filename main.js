function preload() {
}

function setup() {
    canvas = createCanvas(1000, 1000);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    c = color('black');
}

function draw() {
    background(220)
    circle(150,150,200)
    fill(c)
    circle(655,150,200)
    rect(150,150,500,500)
    image(video, 200, 250, 400, 300)
}

function take_snapshot(){
    save('mickeypicture');
}
