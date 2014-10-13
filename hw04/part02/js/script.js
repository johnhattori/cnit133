$(document).ready(function(){
    $('#submit').click(function() {
        calculatePay();    
    }); 
    $('#reset').click(function() {});
        $('.form-control').each(function() {
            $(this).val("");    
        });
    });

function calculatePay() {
    var hours = new Array(), rate = new Array(), pay = new Array(), i;
    for(i=1;i<=6;i++){
        hours[i] = parseInt(document.getElementById("hours"+i).value);
        rate[i] = parseInt(document.getElementById("rate"+i).value);
        if(isNaN(hours[i]) | isNaN(rate[i])){
            alert("Must input numbers");
            return false;
        }else if(hours[i] <= 40){
            pay[i] = (hours[i] * rate[i]).toFixed(2);
        }else if(hours[i] > 40){
            pay[i] = (((hours[i] - 40) * (rate[i] * 1.5)) + (rate[i] * 40)).toFixed(2);
        }
        (document.getElementById("gross"+i).value) = (pay[i]);
        (document.getElementById("f_hours"+i).value) = (hours[i]);
        (document.getElementById("f_rate"+i).value) = (rate[i]);

    }    
}
