function preload(){

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
image(video,0,0,300,300)
}

function take_snapshot(){
save('filter.png');
}
function modelLoaded(){
    console.log("POSENET is initilized");
}

function gotPoses(results){
    if(results.length > 0){
console.log(results);
console.log("NOSE X IS " + results[0].pose.nose.x);
console.log("NOSE Y IS " + results[0].pose.nose.y);
    }
}