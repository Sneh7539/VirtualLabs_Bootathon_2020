var originalString = document.getElementById("str").value;
var ans = document.getElementById("ans");
function uppstr() {
    var res1 = originalString.toUpperCase();
    ans.innerHTML += res1;
}
function lowstr() {
    var res2 = originalString.toLowerCase();
    ans.innerHTML += res2;
}
function splttstr() {
    var res3 = originalString.split(" ");
    ans.innerHTML += res3;
}
//# sourceMappingURL=app.js.map