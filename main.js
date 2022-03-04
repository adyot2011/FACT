noseX=0;
noseY=0;

function preload()
{
moustache = loadImage("m.png");
}

function setup()
{    
    canvas =createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}





function modelLoaded()
{
    console.log("Posenet Initialized");
}

function gotPoses(results)
{
    if ( results.length>0 )
    {
          console.log(results);
          noseX = results[0].pose.nose.x-14;
          noseY = results[0].pose.nose.y+101;

          console.log( "nose x = " + results[0].pose.nose.x );
          console.log( "nose y = " + results[0].pose.nose.y );
    }
}


function draw()
{
    image(video, 10, 100, 400, 400);
    fill(255,0,0);
    stroke(255,0,0);
    image(moustache, noseX, noseY, 50, 50); 
}

function take_snapshot()
{
    save("MyFilterImage.png")
}

function home1()
{
    window.location = "index.html";
}