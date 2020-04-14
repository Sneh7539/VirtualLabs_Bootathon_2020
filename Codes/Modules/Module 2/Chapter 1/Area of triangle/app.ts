function area(){
    let x : HTMLInputElement=<HTMLInputElement>document.getElementById("x");
    let y : HTMLInputElement=<HTMLInputElement>document.getElementById("y");
    let z : HTMLInputElement=<HTMLInputElement>document.getElementById("z");
    var ans : HTMLInputElement = <HTMLInputElement>document.getElementById("ans");
    var r : number = (parseFloat(x.value) + parseFloat(y.value) + parseFloat(z.value))/3;
    var c = Math.sqrt(r * (r - (parseFloat(x.value))) * (r - (parseFloat(y.value))) * (r - (parseFloat(z.value))));
    ans.innerHTML = "The are of triangle is : " + c.toString();
}