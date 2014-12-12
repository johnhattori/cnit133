$( document ).ready(function() {
    $(function () { $("[data-toggle='tooltip']").tooltip(); });  
   
    $( '#submit' ).click(function(e) {
        e.preventDefault();
        validate();
        
    }); 
    var validate = function() {
        var userInput = $( '#user' ).val().toLowerCase();
        var passwdInput = $( '#passwd' ).val().toLowerCase();
        var user = "rosebud";
        var password = "komodo";
        if (userInput != user) {
            alert("Please enter correct use");
        } else if (passwdInput != password) {
            alert("Please enter correct password.");
        } else {
            alert("Correct");
            setCookie(userInput);
            window.location = "http://gulpjs.com/";       
        }    
    };

// functions dealing with cookies taken from Steve Rubin's CNIT133 example
    
    function setCookie(username) {
        var expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 30);
        expiryUTC = expiryDate.toUTCString();
        document.cookie = "username=" + username + "; " + "expires=" + expiryUTC + "; ";

    }

    function getUsername(username) {
        if (document.cookie.length > 0) {
            var start = document.cookie.indexOf(username + "=");
            if (start != -1)
            {
                start = start + username.length + 1;
                end = document.cookie.indexOf(";",start);
                if (end == -1)
                    end = document.cookie.length;
                return document.cookie.substring(start, end);
            }
        }
        return "";
    }

    function checkCookie() {
        var username=getUsername("username");
        if (username == "rosebud") {
            window.alert("Welcome again, " + username);
            document.pwForm.username.value = username;
            document.pwForm.password.value = "komodo";
        }

    }

    function deleteCookie() {
        document.cookie = "username=;expires=-1";
    }
});
