noseX2=0;
noseY2=0;

function preload()
  {
    lipstick = loadImage("l.png");
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
       noseX2 = results[0].pose.nose.x-14;
       noseY2 = results[0].pose.nose.y+110;

       console.log( "nose x2 = " + results[0].pose.nose.x );
       console.log( "nose y2 = " + results[0].pose.nose.y );
 }
}

function draw()
{
 image(video, 10, 100, 400, 400);
 fill(255,0,0);
 stroke(255,0,0);
 image(lipstick, noseX2, noseY2, 50, 50); 
}

function take_snapshot()
{
 save("MyFilterImage.png")
}

function home2()
{
    window.location = "index.html";
}