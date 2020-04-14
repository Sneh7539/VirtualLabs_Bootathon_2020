function check2(){
    //taking values from HTML fields
    var s1 : HTMLInputElement = <HTMLInputElement>document.getElementById('i1');
    var s2 : HTMLInputElement = <HTMLInputElement>document.getElementById('i2');
    var s3 : HTMLInputElement = <HTMLInputElement>document.getElementById('i3');

    var s11 = +s1.value;
    var s22 = +s2.value;
    var s33 = +s3.value;
    console.log("Side 1 : " + s11);
    console.log("Side 2 : " + s22);
    console.log("Side 3 : " + s33);
    
    //checking if any of them is other than numeirc value
    if((isNaN(s11)) || (isNaN(s22)) || (isNaN(s33)))
    {
        //if there, then showing error message
        document.getElementById('t1').innerHTML = "One of the given input contains value other than number!<br>Only number allowed as input";
    }
    //if not then finding the type of triangle
    else
    {
        //if all sides are equal
        if((s11==s22 && s22==s33) )
        {
            //then Equilateral triangle
            document.getElementById('t1').innerHTML = "The triangle with given sides is <b>Equilateral</b>";
        }
        //else two sides are equal
        else if((s11==s22 && s11!=s33) || (s11==s33 && s11!=s22) || (s33==s22 && s33!=s11))
        {
            //then Isosceles triangle
            document.getElementById('t1').innerHTML = "The triangle with given sides is <b>Isosceles</b>";
            //checking for right angle triangle
            if((Math.pow(s11,2) == (Math.pow(s22,2)+Math.pow(s33,2))) || (Math.pow(s22,2) == (Math.pow(s11,2)+Math.pow(s33,2))) || (Math.pow(s33,2) == (Math.pow(s22,2)+Math.pow(s11,2))))
            {
                document.getElementById('t2').innerHTML = "This Isosceles triangle is Right angle triangle also";
            }
        }
        //if no sides are equal
        else if((s11!=s22) && s22!=s33 && s33!=s11)
        {
            //then scelene triangle
            document.getElementById('t1').innerHTML = "The triangle with given sides is <b>Scelene</b>";
            //checking for right angle triangle
            if((Math.pow(s11,2) == (Math.pow(s22,2)+Math.pow(s33,2))) || (Math.pow(s22,2) == (Math.pow(s11,2)+Math.pow(s33,2))) || (Math.pow(s33,2) == (Math.pow(s22,2)+Math.pow(s11,2))))
            {
                document.getElementById('t2').innerHTML = "This Scelene triangle is Right angle triangle also";
            }
        }
    }
}