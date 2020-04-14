function area() {
    let a1 = document.getElementById("a1");
    var ans = document.getElementById("ans");
    var r = parseFloat(a1.value);
    var c = Math.PI * Math.pow(r, 2);
    ans.innerHTML = "The are of circle is : " + c.toString();
}
//# sourceMappingURL=app.js.map