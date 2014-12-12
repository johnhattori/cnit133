$( document ).ready(function() {
    $( "#greeting" ).click(function() {
        version();
    });
});

function version() {
    var inputName = document.getElementById("name").value;
    var navVersion = navigator.appVersion;
    var navAgent = navigator.userAgent;
    var browserName  = navigator.appName;
    var fullVersion  = ''+parseFloat(navigator.appVersion); 
    var majorVersion = parseInt(navigator.appVersion,10);
    var nameOffset, verOffset, indx;

    if ((verOffset=navAgent.indexOf("OPR/"))!=-1) {
        browserName = "Opera";
        fullVersion = navAgent.substring(verOffset+4);
    }
    else if ((verOffset=navAgent.indexOf("MSIE"))!=-1) {
        browserName = "IE";
        fullVersion = navAgent.substring(verOffset+5);
    }
    else if ((verOffset=navAgent.indexOf("Chrome"))!=-1) {
        browserName = "Chrome";
        fullVersion = navAgent.substring(verOffset+7);
    }
    else if ((verOffset=navAgent.indexOf("Safari"))!=-1) {
        browserName = "Safari";
        fullVersion = navAgent.substring(verOffset+7);
        if ((verOffset=navAgent.indexOf("Version"))!=-1) {
            fullVersion = navAgent.substring(verOffset+8);
        }
    }
    else if ((verOffset=navAgent.indexOf("Firefox"))!=-1) {
        browserName = "Firefox";
        fullVersion = navAgent.substring(verOffset+8);
    }
    if ((indx=fullVersion.indexOf(";"))!=-1) {
        fullVersion=fullVersion.substring(0,indx);
    }
    if ((indx=fullVersion.indexOf(" "))!=-1) {
        fullVersion=fullVersion.substring(0,indx);
    }
    if (inputName) {

        alert("Howdy " + inputName + "!\n"+
                    "Browser: " + browserName + "\n"+
                    "Version: " + fullVersion + "\n"+
                    "Platform: " + navigator.platform + "\n"+
                    "Screen width: " + screen.width + " px\n"+
                    "Screen height: " + screen.height + " px");
    }
    else {
        alert("Please enter a name");
    }
}
