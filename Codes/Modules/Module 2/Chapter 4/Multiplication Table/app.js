function check() {
    //collecting values form HTML fields
    var i1 = document.getElementById('i1');
    var table = document.getElementById('table');
    var count = 0;
    var num = +i1.value;
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    //for loop
    for (count = 1; count <= num; count++) {
        var row = table.insertRow();
        //declaring new cell for HTMLTableDataCellElemen
        var cell = row.insertCell();
        //declaring text to be in cell
        var text = document.createElement("input");
        text.type = "text";
        text.value = num.toString();
        cell.appendChild(text);
        //declaring new cell for HTMLTableDataCellElemen
        var cell = row.insertCell();
        //declaring text to be in cell
        var text = document.createElement("input");
        text.type = "text";
        text.value = count.toString();
        cell.appendChild(text);
        //declaring new cell for HTMLTableDataCellElemen
        var cell = row.insertCell();
        //declaring text to be in cell
        var text = document.createElement("input");
        text.type = "text";
        text.value = (count * num).toString();
        cell.appendChild(text);
    }
}
//# sourceMappingURL=app.js.map