function area() {
    let x = document.getElementById("x");
    let y = document.getElementById("y");
    let z = document.getElementById("z");
    var ans = document.getElementById("ans");
    var r = (parseFloat(x.value) + parseFloat(y.value) + parseFloat(z.value)) / 3;
    var c = Math.sqrt(r * (r - (parseFloat(x.value))) * (r - (parseFloat(y.value))) * (r - (parseFloat(z.value))));
    ans.innerHTML = "The are of circle is : " + c.toString();
}
//# sourceMappingURL=app.js.map