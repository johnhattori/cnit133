

function sum() 
{ 
    var fn, sn, tn result; 
    fn = parseInt(document.getElementById("num1").value, 10);
    sn = parseInt(document.getElementById("num2").value, 10);
    tn = parseInt(document.getElementById("num3").value, 10);
    result =  (fn+sn+tn); 
    document.getElementById("result").value += result; 
}








function add(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
  }
