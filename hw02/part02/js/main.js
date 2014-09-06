$(document).ready(function() {

    document.getElementById("sum").onclick = function() {sum()};
    document.getElementById("product").onclick = function() {product()};
    document.getElementById("average").onclick = function() {average()};
    document.getElementById("least").onclick = function() {least()};
    document.getElementById("most").onclick = function() {most()};

    function getNumbers()
    {
    var fn = parseInt(document.getElementById("num1").value, 10);
    var sn = parseInt(document.getElementById("num2").value, 10);
    var tn = parseInt(document.getElementById("num3").value, 10);
    return [fn, sn, tn];
    }

    function sum() 
    {
        numbers = getNumbers();
        total = 0;
        for (var i = 0; i < numbers.length; i++) {
                total += numbers[i] << 0;
        }
        document.getElementById("result").value = total;
    }


    function product() 
    { 
        var fn, sn, tn, result; 
        fn = parseInt(document.getElementById("num1").value, 10);
        sn = parseInt(document.getElementById("num2").value, 10);
        tn = parseInt(document.getElementById("num3").value, 10);
        result = (fn*sn*tn); 
        document.getElementById("result").value = result;
    }

    function average() 
    { 
        var fn, sn, tn, result; 
        fn = parseInt(document.getElementById("num1").value, 10);
        sn = parseInt(document.getElementById("num2").value, 10);
        tn = parseInt(document.getElementById("num3").value, 10);
        result = ((fn+sn+tn)/3); 
        document.getElementById("result").value = result;
    }

    function least() 
    { 
        var fn, sn, tn, result; 
        fn = parseInt(document.getElementById("num1").value, 10);
        sn = parseInt(document.getElementById("num2").value, 10);
        tn = parseInt(document.getElementById("num3").value, 10);
        result = Math.min(fn, sn, tn);
        document.getElementById("result").value = result;
    }

    function most() 
    { 
        var fn, sn, tn, result; 
        fn = parseInt(document.getElementById("num1").value, 10);
        sn = parseInt(document.getElementById("num2").value, 10);
        tn = parseInt(document.getElementById("num3").value, 10);
        result = Math.max(fn, sn, tn); 
        document.getElementById("result").value = result;
    }

});



