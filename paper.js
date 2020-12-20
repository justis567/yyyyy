class Paper {

    constructor(x, y, width, height,angle) {
        var options = {
        'isStatic':false,
            'restitution':0.3,
            'friction':0.3,
            'density':1.2


            
        }
    }
}
{
    Matter.Bodies.circle(200,550,385,[options],[maxSides])
}
{
    function keyPressed(){
        if(keyCode === UP_ARROW	) {
    
            Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
        }
    }
    
}
