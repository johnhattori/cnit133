$(document).ready(function() {
    $("input:radio[name=bgcolor]").click(function() {
        var value = $(this).val();
        $( "body" ).css("background-color", value);
    });

    $("input:radio[name=font]").click(function() {
        var value = $(this).val();
        $( "body" ).css("font-family", value);
    });

    $("input:checkbox[name=weight]").click(function() {
        var value = $(this).val();
        $( "body" ).css("font-weight", value);
    });
   
    $("input:button[name=style]").click(function() {
        var value = $(this).val();
        $( "body" ).css("font-style", value);
    });


});
