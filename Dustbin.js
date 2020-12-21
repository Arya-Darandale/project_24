class Dustbin{
    construtor(x,y,w,h){
        var options={
            isStatic:true
        }
     this.image=loadImage("sprites/dustbingreen.png");
     this.body=Bodies.rectangle(x,y,w,h,options);
     World.add(world,this.body);
     this.width=w;
     this.height=h;     
    }
    display(){
        var pos= this.body.position;

        ImageMode(CENTER);

        Fill(255,0,0);
        this.image(this.image,pos.x,pos.y,this.width,this.height);

    }
}