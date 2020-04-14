function check(){
    //collecting values form HTML fields
    var i1 : HTMLInputElement = <HTMLInputElement>document.getElementById('i1');

    var table : HTMLTableElement = <HTMLTableElement>document.getElementById('table');

    var count :number = 0;

    var num : number = +i1.value;

    while(table.rows.length>1)
    {
        table.deleteRow(1);
    }
    
    //for loop
    for(count=1;count<=num;count++)
    {
        var row:HTMLTableRowElement = table.insertRow();

        //declaring new cell for HTMLTableDataCellElemen
        var cell:HTMLTableDataCellElement = row.insertCell();

        //declaring text to be in cell
        var text:HTMLInputElement = document.createElement("input");
        text.type = "text";
        text.value = num.toString();
        cell.appendChild(text);

        //declaring new cell for HTMLTableDataCellElemen
        var cell:HTMLTableDataCellElement = row.insertCell();

        //declaring text to be in cell
        var text:HTMLInputElement = document.createElement("input");
        text.type = "text";
        text.value = count.toString();
        cell.appendChild(text);

        //declaring new cell for HTMLTableDataCellElemen
        var cell:HTMLTableDataCellElement = row.insertCell();

        //declaring text to be in cell
        var text:HTMLInputElement = document.createElement("input");
        text.type = "text";
        text.value = (count*num).toString();
        cell.appendChild(text);
    }
}