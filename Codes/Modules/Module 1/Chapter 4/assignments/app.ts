var t1 : HTMLInputElement = <HTMLInputElement>document.getElementById("t1");
var t2 : HTMLInputElement = <HTMLInputElement>document.getElementById("t2");
var t3 : HTMLInputElement = <HTMLInputElement>document.getElementById("t3");
var t4 : HTMLInputElement = <HTMLInputElement>document.getElementById("t4");
var t5 : HTMLInputElement = <HTMLInputElement>document.getElementById("t5");
var t6 : HTMLInputElement = <HTMLInputElement>document.getElementById("t6");
function add()
{
    var c:number = parseFloat(t1.value) + parseFloat(t2.value);
    t3.value = c.toString();
}
function sub()
{
    var c:number = parseFloat(t4.value) - parseFloat(t5.value);
    t6.value = c.toString();
}
function mul()
{
    var c:number = parseFloat(t7.value) * parseFloat(t8.value);
    t9.value = c.toString();
}
function div()
{
    var c:number = parseFloat(t10.value) / parseFloat(t11.value);
    t12.value = c.toString();
}