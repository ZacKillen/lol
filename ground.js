class ground{

constructor(x,y,h,w){
var ground_options = {
isStatic: true
}
this.x = x
this.y = y
this.h = h
this.w = w

this.body=Bodies.rectangle(x, y, w, h , ground_options); 
World.add(world, this.body);
}
display(){
var groundPos = this.body.position
push()
translate(groundPos.x,groundPos.y)
rectMode(CENTER)
strokeWeight(4); 
fill(255,255,0) 
rect(0,0,this.w, this.h);
pop()
}

}