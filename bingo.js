var nums = new Array();


function draw() {
var randomn = Math.floor(Math.random() * 100) + 1;
if (nums.length <100) {
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
    for (var i = 0; i < 5; i++) {
        document.write("<tr height='50px'>");
        for (var j = 0; j < 5; j++) {
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
    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);
  
    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(y);
  
    var z = document.createElement("TD");
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);
  }