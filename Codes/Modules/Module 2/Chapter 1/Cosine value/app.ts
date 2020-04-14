function cosine(){
    let x : HTMLInputElement=<HTMLInputElement>document.getElementById("x");
    var ans : HTMLInputElement = <HTMLInputElement>document.getElementById("ans");
    var r : number = parseFloat(x.value);
    var c = (r + Math.cos(r));
    ans.innerHTML = "The value of cosine is : " + c.toString();
}