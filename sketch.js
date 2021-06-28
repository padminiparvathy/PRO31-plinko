var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var divisions;
  var plinkos = [];
  var particles = [];
  var score=0;

  function setup() {
    createCanvas(480, 500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,20);

    divisions =[];
var divisionHeight=200;

for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var j = 20; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,70));
    }

    for (var j = 20; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,130));
    }

     for (var j = 20; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,190));
    }

     for (var j = 20; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,250));
    }

}
 


  function draw() {
    background("black");
    textSize(20)
   //text("Score : "+score,20,30);
    Engine.update(engine);

    ground.display();

    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-110, width/2+110), 10,10));

      score++;
    }



    for (var k = 0; k < divisions.length; k++) {
     
      divisions[k].display();
    }

    for (var i = 0; i < plinkos.length; i++) {
     
      plinkos[i].display();
      
    }

    for (var j = 0; j < particles.length; j++) {
   
      particles[j].display();
    }

  }