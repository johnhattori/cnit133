$(document).ready(function(){
    //assign the table to a variable
    var table = document.getElementById("1thru6");
    //title the different columns with number, square, and cube
    var head = table.insertRow(0);
        head.insertCell(-1).innerHTML = "  number  ";
        head.insertCell(-1).innerHTML = "  square  ";
        head.insertCell(-1).innerHTML = "  cube  ";
    //run a for loop to put the squares and cubes of 1 to 6
    for (var i = 1; i < 7; i++){
        var holder = table.insertRow(-1);
        holder.insertCell(-1).innerHTML = i;
        holder.insertCell(-1).innerHTML = (i*i);
        holder.insertCell(-1).innerHTML = (i*i*i);
    }
)};
