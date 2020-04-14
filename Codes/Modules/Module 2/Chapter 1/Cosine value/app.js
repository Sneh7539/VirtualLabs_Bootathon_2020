function cosine() {
    let x = document.getElementById("x");
    var ans = document.getElementById("ans");
    var r = parseFloat(x.value);
    var c = (r + Math.cos(r));
    ans.innerHTML = "The value of cosine is : " + c.toString();
}
//# sourceMappingURL=app.js.map