rightwristX = 0;
leftwristX = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);

    canvas = createCanvas(400,400);
    canvas.position(550,120);

    poseNet = ml5.poseNet(video,modeloaded);
    poseNet.on('pose',gotPoses);
}

function modeloaded(){
    console.log("PoseNet Is Intialized");
}


function draw(){
   
    background('#D4AF37');
    text('Minecraft',10,30)
fill(0,0,255)
stroke(128,0,0)
textSize(difference)
}


function gotPoses(results){
if (results.length > 0){
    console.log(results);

    leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.x;
    difference = floor(leftwristX - rightwristX)
    console.log("leftwristX ="+leftwristX +  "rightwristX =" +  rightwristX  + "difference" + difference)

}
}

