nose_x=0;
nose_y=0;
function preload(){
    cap=loadImage("https://i.postimg.cc/g0r64n9J/cap.png");
    nose=loadImage("https://i.postimg.cc/DwpSWnWK/download.png");
}
function setup(){
    var canvas= createCanvas(500,500);
    canvas.center();
    canvas.position(500,150);
    video1=createCapture(VIDEO);
    video1.size(500,500);
    video1.hide();
    posenet=ml5.poseNet(video1,modelLoaded);
    posenet.on('pose',gotresults);
}
function draw(){
  image(video1,0,0,500,500);
    fill("red");
    //circle(nose_x,nose_y,50);
    image(cap,nose_x-100,nose_y-200,200,200);
    //image(nose,nose_x,nose_y,100,100);
}
function snap(){
    save("filter_snapshot");
}
function modelLoaded(){
    console.log("poseNet intialized");
}
function gotresults(results){
    if (results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
    }    
}