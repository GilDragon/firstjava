var nums = new Array();


function draw() {
var randomn = Math.floor(Math.random() * 100) + 1;
for (var i =0; i <9; i++) {
    while (nums.includes(randomn)) {
        randomn = Math.floor(Math.random() * 100) + 1;
        }
    nums.push(randomn);
    console.log(nums);
    }
}
function maketable() {


    var count = 0;
    document.write("<table border='1px;'>")
    for (var i = 0; i < 3; i++) {
        document.write("<tr height='50px'>");
        for (var j = 0; j < 3; j++) {
            document.write("<td width='50px'>");
            document.write(nums[count]);
            count++;
        }
    }
    document.write("</td>")
    document.write("</tr>")
    document.write("</table>")
}
function maketable2() {
    var bingos = 0;
    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);
    for (var i = 0; i < 3; i++) {
        var y = document.createElement("TR");
        y.setAttribute("id", "myTr");
        document.getElementById("myTable").appendChild(y);
        for (var j = 0; j < 3 ; j++) {
  
            var z = document.createElement("TD");
            var t = document.createTextNode(nums[bingos]);
            z.appendChild(t);
            document.getElementById("myTr").appendChild(z);
            bingos++;
    }
    }
  }
function maketable3() {
    let table  = document.getElementById('table2');
    for (var i = 0; i < 3; i++) {
        let newRow = document.createElement('tr');
        newRow.id = "cardRow[i]";
        newRow.className = "row";
        table.append(newRow);
        for(var j = 0; j <3; j++) {
            let newCell = document.createElement('td');
            newCell.innerHTML = 9;
            newRow.append(newCell[j]);
        }
    }

    table.append(newRow);
}

function tableCreate1(row, col){
    var count = 0;
    let body = document.body;
    let tbl  = document.createElement('table');
    tbl.style.width  = '1px';
    tbl.style.border = '1px solid black';
    for(let i = 0; i < row; i++){
        let tr = tbl.insertRow();
        for(let j = 0; j < col; j++){
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(nums[count]));
                td.style.border = '1px solid black';
                count++;
            }
    }
    body.appendChild(tbl);
    tableCreate(3,3)
}
