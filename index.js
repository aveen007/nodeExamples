const rectangle = require("./rectangle")
var rect=require("./rectangle")

function solveRectangle(l,b){
    console.log("solving for l="+l+" and b= "+ b)
    // if (l<=0||b<=0){

    //     console.log("Rectangle dimensions should be greater than zero")
    // }
    // else{
    //     console.log("Rectangle area is"+ rect.area(l,b))
    //     console.log("Rectangle perimeter is "+rect.perimeter(l,b))


    // }
rect(l,b,(err,rectangle)=>{if (err)
console.log("ERROR: "+err.message)
else{
    console.log("Rectangle area is"+ rectangle.area())
        console.log("Rectangle perimeter is "+rectangle.perimeter())

    
}
}
);
console.log("that's after")
}
solveRectangle(2,4)
solveRectangle(-2,4)
solveRectangle(9,4)
solveRectangle(2,4)