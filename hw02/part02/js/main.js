    document.getElementById("sum").onclick = function() {sum()};
    document.getElementById("product").onclick = function() {product()};
    document.getElementById("average").onclick = function() {average()};
    document.getElementById("least").onclick = function() {least()};
    document.getElementById("most").onclick = function() {most()};

    function getNumbers() {
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
        return total;
    }


    function product() 
    {  
        numbers = getNumbers();
        total = 1;
        for (var i = 0; i < numbers.length; i++) {
                total *= numbers[i];
        }
        document.getElementById("result").value = total;
    }

    function average() 
    { 
        numbers = getNumbers();
        numerator = sum();
        denominator = numbers.length;
        result = (numerator/denominator); 
        document.getElementById("result").value = result;
    }

    function least() 
    { 
        numbers = getNumbers();
        result = Math.min.apply(null, numbers);
        document.getElementById("result").value = result;
    }

    function most() 
    {  
        numbers = getNumbers();
        result = Math.max.apply(null, numbers);
        document.getElementById("result").value = result;
    }

