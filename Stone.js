class Stone{
    constructor(x,y){
        var options = {
           restitution : 0.8,
           density :12,
           friction : 0.9,
           

       }
    
       this.x=x;
       this.y=y;
       this.body=Bodies.rectangle(this.x, this.y,options)
		World.add(world, this.body);




    }
    display()
	{
			var stonepos =this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			

			pop()
	}

};