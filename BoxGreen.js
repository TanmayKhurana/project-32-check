class BoxGreen{
    constructor(x,y,w,h){
        var r_options={
            isStatic:0
        }

        this.r = Bodies.rectangle(x,y,w,h, r_options);
        this.w = w
        this.h = h
 	    World.add(world, this.r);

    }
    display(){
        console.log(this.r.visibility)
        if(this.r.speed<10){
            var pos = this.r.position
            push()
            translate(pos.x, pos.y)
            rectMode(CENTER)
        fill("green");rect(0, 0, this.w, this.h)
        pop()
        }else{
            World.remove(world, this.r)
            push()
            this.visibility = this.visibility-10
            tint(255, this.visibility)
            rect(0, 0, this.w, this.h)
            pop()
        }
    }

    score(){
        if (this.Visibility<0&&this.Visibility>-105)
          score++
        
      }
}