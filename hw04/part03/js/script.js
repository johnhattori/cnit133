

for(var i = 5; i <= 10; i++){
    document.write("<table class='table table-striped'><tr>" +
            "<th>Year</th><th>Initial Deposit</th><th>rate(%)</th>");
    accum(1000, i);
    document.write("</table>");
}

function accum(p,r){
    var a = [], i;
    for(i = 1; i <= 10; i++){
        a[i] = (p*Math.pow(1+(r*.01),i)).toFixed(2);
        document.write("<tr><td>"+i+"</td><td>"+a[i]+"</td><td>"+r+"</td></tr>");
    }
}


