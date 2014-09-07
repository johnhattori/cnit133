$(document).ready(function(){
    var list1 = [1,2,3,4,5,6];
    var list2 = [7,8,9,10];

    function create_table(list){
        table = '<tr><td>Number</td><td>Square</td><td>Cube</td></tr>'
        $.each(list, function(i, v) {
            table += '<tr><td>' + v + '</td><td>' + v*v +'</td><td>' + v*v*v + '</td></tr>'
        });
        return table;
    }
     
    $('#show_table2').click(function() {
        $('#table2').html(create_table(list2));
    });

    $('#table1').html(create_table(list1));
});
