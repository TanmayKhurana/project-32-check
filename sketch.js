const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var score = 0;

function setup(){
    createCanvas(1000, 500)
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;
    
    ground = new Bodies.rectangle(350, 480, 10000,20,{isStatic:true})
    World.add(world, ground)

    base1 = new Bodies.rectangle(670, 370, 200, 10,{isStatic:true})
    World.add(world, base1)

    base2 = new Bodies.rectangle(900, 150, 125, 10,{isStatic:true})
    World.add(world, base2)

    bold = new Hegxagon(200, 100, 30)

    Chain = new chain(bold.body,{x:200, y:200})
    
    base1botombox1 = new BoxPink(590, 300, 20, 45)
    base1botombox2 = new BoxPink(610, 300, 20, 45)
    base1botombox3 = new BoxPink(630, 300, 20, 45)
    base1botombox4 = new BoxPink(650, 300, 20, 45)
    base1botombox5 = new BoxPink(670, 300, 20, 45)
    base1botombox6 = new BoxPink(690, 300, 20, 45)
    base1botombox7 = new BoxPink(710, 300, 20, 45)
    base1botombox8 = new BoxPink(730, 300, 20, 45)
    base1botombox9 = new BoxPink(750, 300, 20, 45)
    

    base1upperbottombox1 = new BoxYellow(610, 250, 20, 45)
    base1upperbottombox2 = new BoxYellow(630, 250, 20, 45)
    base1upperbottombox3 = new BoxYellow(650, 250, 20, 45)
    base1upperbottombox4 = new BoxYellow(670, 250, 20, 45)
    base1upperbottombox5 = new BoxYellow(690, 250, 20, 45)
    base1upperbottombox6 = new BoxYellow(710, 250, 20, 45)
    base1upperbottombox7 = new BoxYellow(730, 250, 20, 45)


    base1middlebox1 = new BoxOrange(630, 200, 20, 45)
    base1middlebox2 = new BoxOrange(650, 200, 20, 45)
    base1middlebox3 = new BoxOrange(670, 200, 20, 45)
    base1middlebox4 = new BoxOrange(690, 200, 20, 45)
    base1middlebox5 = new BoxOrange(710, 200, 20, 45)

    base1uppermiddlebox1 = new BoxGreen(650, 150, 20, 45)
    base1uppermiddlebox2 = new BoxGreen(670, 150, 20, 45)
    base1uppermiddlebox3 = new BoxGreen(690, 150, 20, 45)

    base1topbox1 = new BoxBlue(670, 100, 20, 45)

    base2bottom1 = new BoxPink(860, 100, 20, 45)
    base2bottom2 = new BoxPink(880, 100, 20, 45)
    base2bottom3 = new BoxPink(900, 100, 20, 45)
    base2bottom4 = new BoxPink(920, 100, 20, 45)
    base2bottom5 = new BoxPink(940, 100, 20, 45)

    base2middle1 = new BoxYellow(880, 50, 20, 45)
    base2middle2 = new BoxYellow(900, 50, 20, 45)
    base2middle3 = new BoxYellow(920, 50, 20, 45)

    base2top1 = new BoxOrange(900, 10, 20, 45)

    ground = new Base(350, 480, 10000,20)

    base1 = new Base(670, 370, 200, 10)

    base2 = new Base(900, 150, 125, 10)

    Engine.run(engine)

}

function draw(){
    rectMode(CENTER);
    background("purple");


    textSize(35)
    fill("white")
    text("Score: "+score, width-400, 50)

    
    Engine.update(engine)

    

    

    
    
    base1botombox1.display()
    base1botombox1.score()
    base1botombox2.display()
    base1botombox2.score()
    base1botombox3.display()
    base1botombox3.score()
    base1botombox4.display()
    base1botombox4.score()
    base1botombox5.display()
    base1botombox5.score()
    base1botombox6.display()
    base1botombox6.score()
    base1botombox7.display()
    base1botombox7.score()
    base1botombox8.display()
    base1botombox8.score()
    base1botombox9.display()
    base1botombox9.score()


    base1upperbottombox1.display()
    base1upperbottombox2.display()
    base1upperbottombox3.display()
    base1upperbottombox4.display()
    base1upperbottombox5.display()
    base1upperbottombox6.display()
    base1upperbottombox7.display()


    base1middlebox1.display()
    base1middlebox2.display()
    base1middlebox3.display()
    base1middlebox4.display()
    base1middlebox5.display()

    base1uppermiddlebox1.display()
    base1uppermiddlebox2.display()
    base1uppermiddlebox3.display()

    base1topbox1.display()

    base2bottom1.display()
    base2bottom2.display()
    base2bottom3.display()
    base2bottom4.display()
    base2bottom5.display()

    base2middle1.display()
    base2middle2.display()
    base2middle3.display()

    base2top1.display()

    bold.display()

    ground.display()

    base1.display()

    base2.display()

    Chain.display()

}

function mouseDragged(){
    Matter.Body.setPosition(bold.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    Chain.fly()
}


function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(bold.body, {x:200, y:100})
        Chain.attach(bold.body);
    }
}
