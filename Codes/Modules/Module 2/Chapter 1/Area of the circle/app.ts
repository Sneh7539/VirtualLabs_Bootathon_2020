function area(){
    let a1 : HTMLInputElement=<HTMLInputElement>document.getElementById("a1");
    var ans : HTMLInputElement = <HTMLInputElement>document.getElementById("ans");
    var r : number = parseFloat(a1.value);
    var c = Math.PI * Math.pow(r,2);
    ans.innerHTML = "The are of circle is : " + c.toString();
}