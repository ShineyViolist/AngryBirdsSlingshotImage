class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 50
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1,200,20);
        image(this.image2,170,17);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            strokeWeight(4);
            stroke("#301608");
            if(pointA.x < 220){
            line(pointA.x - 20, pointA.y,220,50);
            line(pointA.x - 20, pointA.y,180,50);
            image(this.image3,pointA.x - 30,pointA.y - 10,15,30);
            } else{
                line(pointA.x + 25, pointA.y,220,50);
                line(pointA.x + 25, pointA.y,180,50);
                image(this.image3,pointA.x + 25,pointA.y - 10,15,30);
            }
        }
    }
    
}