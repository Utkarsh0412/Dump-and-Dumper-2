class Wall{

    constructor(x,y,width,height){
            var options={
            isStatic:true,
            friction:0.5,
            density:0.5
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    
    }
    display()
    {
        var wall=this.body.position;
        push()
        translate(wall.x,wall.y);
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}