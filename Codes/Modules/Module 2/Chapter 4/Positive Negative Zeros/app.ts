function find(){
    //getting inputs from html file
    var i1 : HTMLInputElement = <HTMLInputElement>document.getElementById('i1');

    //getting the number of terms as count
    var count : number = +i1.value;
    console.log("Count : " + count);

    //declaring variables for counting postitive, negative, zero terms
    var positive_count:number = 0;
    var negative_count:number = 0;
    var zero_count:number = 0;

    //checking if given input is number
    if(isNaN(count))
    {
        //if not then displaying error
        document.getElementById('ans').innerHTML = "Input to number of terms is not a number!<br>Only number is allowed in number of terms";
    }
    //if correct input
    else
    {
        //iterating for loop to get propmts
        for(var i=0;i<count;i++)
        {
            //storing value of prompt in variable 'num'
            var num :number =  +prompt("Enter a number");

            //checking if non number input is added
            if(isNaN(num))
            {
                //if added then showing error and breaking loop
                document.getElementById('ans').innerHTML = "The last input is not valid as only numbers are valid inputs!<br>";
                document.getElementById('ans').innerHTML += "Results for numbers entered before the last value are displayed.";
                break; 
            }
            //if valid input then checking conditions
            else
            {
                //checking condition for input to be positive
                if(num > 0)
                {
                    //if positive then incrementing count variable
                    positive_count++;
                }
                if(num < 0)
                {
                    //if positive then incrementing count variable
                    negative_count++;
                }
                if(num == 0)
                {
                    //if positive then incrementing count variable
                    zero_count++;
                }
                //sending the results back to html file
                document.getElementById('pos').innerHTML = "Number of positive terms are <b>: " + positive_count + "</b>";
                console.log("Positive numbers : " + positive_count);

                document.getElementById('neg').innerHTML = "Number of negative terms are <b>: " + negative_count + "</b>";
                console.log("Negative numbers : " + negative_count);

                document.getElementById('zero').innerHTML = "Number of zero terms are <b>: " + zero_count + "</b>";
                console.log("Zero numbers : " + zero_count);
            }
        }
    }
}