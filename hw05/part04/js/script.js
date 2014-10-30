var i = 0;
var n = new Array();
var currVal;

function inputNum(){
    if(i == 0){document.getElementById("errMsg").innerHTML = "";}
    if(i < 10){     
        currVal = parseInt(document.getElementById("num").value);
        if(invalid(currVal)){
            document.getElementById("errMsg").innerHTML = "Please input a numberic value.";
        }
        else if(checkNum(currVal)){
            document.getElementById("errMsg").innerHTML = "Valid input between 10 and 100 ONLY";       
        }
        else{
            i++;
            if( n.length == 0 ) n.push( currVal );
            else{
                var duplicate = false;
                for( var c = 0; c < n.length; c++ ) {
                    if ( currVal == n[c] ) {
                        duplicate = true;
                        break;
                   }
                }
            if ( !duplicate ) 
                n.push( currVal );
            }document.getElementById("display").innerHTML = "You entered " + n + "<br> Number of items entered : " + i;
        }document.getElementById("num").value = "";
    }
    else{ 
        clearErr();
        document.getElementById("num").value = "";
    }
}

function clearErr(){
    var noinput= "";
    document.getElementById( 'errMsg' ).innerHTML = noinput;
    document.getElementById( 'display' ).innerHTML = noinput;
    n = [];
    i = 0;
}

function invalid(inputNum){
    if (isNaN(inputNum)){
        return true;
    }
}

function checkNum(inputNum){
    if (inputNum < 10 || inputNum > 100){
return true;
    }
}

