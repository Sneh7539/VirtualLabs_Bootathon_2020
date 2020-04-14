var originalString : string = (<HTMLInputElement>document.getElementById("str")).value;
var ans : HTMLInputElement = <HTMLInputElement>document.getElementById("ans");
function uppstr(){
    var res1 : string = originalString.toUpperCase();
    ans.innerHTML += res1;
}
function lowstr(){
    var res2 : string = originalString.toLowerCase();
    ans.innerHTML += res2;
}
function splttstr(){
    var res3 = originalString.split(" ");
    ans.innerHTML += res3;
}