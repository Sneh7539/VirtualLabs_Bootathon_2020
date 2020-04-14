function check(){
    //for loop from 100 to 999
    for(var i=100;i<=999;i++)
    {
        var y = i;
        
        var sum = 0;
        
        //iterating the y variable through while loop until it is greater than 0
        while(y>0)
        {
            var z = y % 10;
            console.log("z = y % 10 : " + z );

            //finding cube of z and adding it into the sum
            sum += Math.pow(z,3);
            console.log("Sum : " + sum);

            y = Math.floor(y/10);
            console.log("y = math.flooe(y/10) : " + y);
        }
        if(sum == i)
        {
            //if both are equal, then armstrong number found 
            document.getElementById('ans').innerHTML += "<br><b>" + i.toString() + "</b>";
        }
    }
}