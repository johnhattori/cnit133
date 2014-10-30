$(document).ready(function() {
    var counters = [0, 0, 0, 0, 0, 0, 0, 0 ,0];
    $( '#sales' ).numeric();
    $( '#results' ).click(function() {
        var emp = $( '#empName' ).val();
        var total = sales();
        var print_total = '$ ' + total;
        var newRow = '<tr><td>' + emp + '</td><td>' + print_total + '</td></tr>';
        $('#salesTable tr:last').after(newRow);
        count(total, counters);
        display(counters);
    });
    $( '#reset' ).click(function() {
        $( '#salesTable' ).find("tr:gt(0)").remove();
        counters = [0, 0, 0, 0, 0, 0, 0, 0 ,0];
        display(counters);
        $( '#errMsg' ).empty();
    });
    $( 'input' ).on('click focusin', function() {
        this.value = '';
    });

});

function display(counters) {
    for (var i = 0; i < counters.length; i++){
        $('#countTable > tbody > tr > td:nth-child('+ (i+1) +')').text(counters[i]);
    }
    
}
function sales() {
    var usr_input = parseInt($( '#sales' ).val());
    return usr_input * .09 + 200;
}

function count(total, counters) {
    if (total < 300)
        counters[0] ++;
    else if (total < 400)
        counters[1]++;
    else if (total < 500)
        counters[2]++;
    else if (total < 600)
        counters[3]++;
    else if (total < 700)
        counters[4]++;
    else if (total < 800)
        counters[5]++;
    else if (total < 900)
        counters[6]++;
    else if (total < 1000)
        counters[7]++;
    else 
        counters[8]++;
    return counters;
}

