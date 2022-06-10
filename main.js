function setup(){

    video = createCapture(VIDEO);
    video.size(550,500)

    canvas = createCanvas(450, 450)
    canvas.position(560,150)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotResult);
}
function modelLoaded(){
    console.log("model is loaded")
}
function gotResult(results){
    if (results.length > 0){
        console.log(results)
    }
}
function draw(){
    background("#dff2f2");
}



