function real_complex(){
    //reading value from HTML fields
    var i1 : HTMLInputElement = <HTMLInputElement>document.getElementById('i1');
    var i2 : HTMLInputElement = <HTMLInputElement>document.getElementById('i2');
    var i3 : HTMLInputElement = <HTMLInputElement>document.getElementById('i3');

    var data = i1.value;

    //getting the index for + symbol in given value
    var plus = data.indexOf('+');

    //if plus is available
    if(plus!=-1)
    {
        //then converting the input into two variables one for real and another for complex
        var real = data.substr(0, plus);
        var complex = data.substr(plus+1,data.length-1);
        i2.value = "Real Part : "+real;
        i3.value = "Complex Part : "+complex;
    }
    //if + not available, then only real or only complex part is there
    else
    {
        //finding if the complex part  is available, as index for i is -1 or not
        var i = data.indexOf('i');
        //is not present, then only real part is there
        if(i==-1)
        {
            var real = data.substr(0, data.length);
            i2.value = "Real Part : "+real;
            i3.value = "Complex Part : 0";
        }
        //otherwise only complex part is there
        else
        {
            var complex = data.substr(0, data.length);
            i2.value = "Real Part : 0";
            i3.value = "Complex Part : " + complex;
        }

    }
}