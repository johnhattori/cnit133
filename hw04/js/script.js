$(document).ready(function(){
    $(function() {
        $('#drag').draggable();
    });

    $('#three').append('The product and sum of every third integer from 5 to 20');
    $('#prod3').text("The product is: " + prod3());
    $('#sum3').text("The sum is: " + sum3());
    
    $('#four').append('The product and sum of every forth integer from 3 to 31');
    $('#prod4').text("The product is: " + prod4());
    $('#sum4').text("The sum is: " + sum4());
});

function prod3() {
    var prod3 = 5;
    for(var i = 8; i <= 20; i += 3){
        prod3 *= i;
    }
    return prod3;
}  

function sum3() {  
    var sum3 = 5; 
    for(var i = 8; i <= 20; i += 3){
        sum3 +=i;
    }
    return sum3;
}

function prod4() {
    var prod4 = 3;
    var i = 7;
    while(i <= 31){
        prod4 *= i;
        i += 4;
    }
    return prod4;
}

function sum4() {
    var sum4 = 3;
    var i = 7;
    while(i <= 31){
        sum4 += i;
        i += 4;
    }
    return sum4;
}
