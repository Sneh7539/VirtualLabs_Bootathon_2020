let n = document.getElementById("str");
var number = parseFloat(n.value);
var ans = document.getElementById("ans");
function fun() {
    if (number % 2 == 0) {
        ans.innerHTML = "The given number " + number.toString() + " is even number.";
    }
    else {
        ans.innerHTML = "The given number " + number.toString() + " is odd number.";
    }
}
//# sourceMappingURL=app.js.map