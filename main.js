lwristx="";
rwristx="";
function setup(){
    video=createCapture(VIDEO);
    video.size(500,550);
    video.position(100,120);
    canvas = createCanvas(500, 550);
    canvas.position((screen.width / 2) + 50, 120);
    posnet= ml5.poseNet(video,modelready);
}
function modelready(){
    console.log("model is working");
    posnet.on("pose",gotr);
}
function gotr(r){
    if(r.length>0){
        lwristx=r[0].pose.leftWrist.x;
        rwristx=r[0].pose.rightWrist.x;
        console.log(lwristx,rwristx);
    }
}