var rect={


    perimeter: (x,y)=> (2*(x+y)),
    area:(x,y)=>(x*y)
}

function solveRectangle(l,b){
    console.log("solving for l="+l+" and b= "+ b)
    if (l<=0||b<=0){

        console.log("Rectangle dimensions should be greater than zero")
    }
    else{
        console.log("Rectangle area is"+ rect.area(l,b))
        console.log("Rectangle perimeter is "+rect.perimeter(l,b))


    }


}
solveRectangle(2,4)
solveRectangle(-2,4)
solveRectangle(9,4)
solveRectangle(2,4)