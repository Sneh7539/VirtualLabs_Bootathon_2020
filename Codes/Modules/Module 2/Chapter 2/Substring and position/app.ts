var originalString : string = (<HTMLInputElement>document.getElementById("str")).value;
var ans : HTMLInputElement = <HTMLInputElement>document.getElementById("ans");
function substr(){
    var substr : string = originalString.substring(4.10);
    ans.innerHTML += substr;
}
function strpos(){
    var position : number = originalString.indexOf("E");
    ans.innerHTML += position;
}