function check(){
    //collecting value from HTML fields
    var a : HTMLInputElement = <HTMLInputElement>document.getElementById('x1');
    var b : HTMLInputElement = <HTMLInputElement>document.getElementById('y1');
    var c : HTMLInputElement = <HTMLInputElement>document.getElementById('x2');
    var d : HTMLInputElement = <HTMLInputElement>document.getElementById('y2');
    var e : HTMLInputElement = <HTMLInputElement>document.getElementById('x3');
    var f : HTMLInputElement = <HTMLInputElement>document.getElementById('y3');
    var g : HTMLInputElement = <HTMLInputElement>document.getElementById('x');
    var h : HTMLInputElement = <HTMLInputElement>document.getElementById('y');

    //vertice 1 values
    var x1 = +a.value;
    var y1 = +b.value;
    console.log("(x1,y1) : (" + x1 +" , "+ y1+")");

    //vertice 2 values
    var x2 = +c.value;
    var y2 = +d.value;
    console.log("(x2,y2) : (" + x2 +" , "+ y2+")");

    //verice 3 values
    var x3 = +e.value;
    var y3 = +f.value;
    console.log("(x3,y3) : (" + x3 +" , "+ y3+")");

    //poit values
    var x = +g.value;
    var y = +h.value;
    console.log("(x,y) : (" + x +" , "+ y+")");

    if(isNaN(x1) || isNaN(x2) || isNaN(x3) || isNaN(y1) || isNaN(y2) || isNaN(y3) || isNaN(x) || isNaN(y))
    {
        //if there, then show error
        document.getElementById('ans').innerHTML = "One of the input is not a number!<br>Only number are allowed as input";
    }
    //otherwise go on calculation
    else
    {
        //find area of main triangle
        var area_main = Math.abs((x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2))/2);

        //find area of sub triangle 1
        var area_sub1 = Math.abs((x*(y1-y2) + x1*(y2-y) + x2*(y-y1))/2);

        //find area of sub triangle 2
        var area_sub2 = Math.abs((x*(y2-y3) + x2*(y3-y) + x3*(y-y2))/2);

        //find area of sub triangle 3
        var area_sub3 = Math.abs((x*(y1-y3) + x1*(y3-y) + x3*(y-y1))/2);

        //find sum of all sub triangle area
        var sum = area_sub1 + area_sub2 + area_sub3;

        //if difference bet sum and main area is as given condi.
        if((area_main-sum)<0.000000001)
        {
            //then point is in triangle
            document.getElementById('ans').innerHTML = "The given point (x,y) : (" + x + " , " + y + ") is in the given triangle";
        }
        else
        {
            //point is not in triangle
            document.getElementById('ans').innerHTML = "The given point (x,y) : (" + x + " , " + y + ") is not in the given triangle";
        }
    }
}