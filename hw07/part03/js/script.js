$(document).ready(function() {
    $( "button" ).click(function() {
        $("form").toggle();
    });

    $( "#submit" ).click(function(e) {
        e.preventDefault();
        var passwd = $( "#password" ).val();
        if (passwd == "obama") {
            window.location = "part3b.html";
        } 
        else {
            alert("incorrect password");
        }
    });

    $( "#stop" ).mouseover(function() {
        $( "body" ).css("background-color", "red");
    });
    $( "#caution" ).mouseover(function() {
        $( "body" ).css("background-color", "yellow");
    });
    $( "#go" ).mouseover(function() {
        $( "body" ).css("background-color", "green");
    });
});

