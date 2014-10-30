$(document).ready(function() {
    //toggles instructions when clicked
    $( '#info' ).click(function() {
        $( '#showInfo' ).slideToggle( 'slow' );    
    });   

    $( '#info_btn' ).click(function() {
        stateInfo();      
    });

    $( '#reset' ).click(function() {
        $('#errmsg').html(''); 
    });
     
});

var stateInfo = function() {
    var usr_input = document.getElementById( 'input_st' ).value    
    var state = [["AL","Alabama","Montgomery","4,369,862"],["AK","Alaska","Juneau","619,500"]
                ,["AZ","Arizona","Phoenix","4,778,332"],["AR","Arkansas","Little Rock","2,551,373"]
                ,["CA","California","Sacramento","3,145,121"],["CO","Colorado","Denver","4,056,133"]];
    var st_info;
    if(!usr_input){
        document.getElementById( 'errmsg' ).innerHTML = "No input entered";
    }
    else if(usr_input){      
        $('#errmsg').html(''); 
        switch(usr_input.toUpperCase()){
        case "ALABAMA" :
        case "AL" : st_info = 0; break;
        case "ALASKA" :
        case "AK" : st_info = 1; break;
        case "ARIZONA" :
        case "AZ" : st_info = 2; break;
        case "ARKANSAS" :
        case "AR" : st_info = 3; break;
        case "CALIFORNIA" :
        case "CA" : st_info = 4; break;
        case "COLORADO" :
        case "CO" : st_info = 5; break;
        default : document.getElementById('errmsg').innerHTML = "Pleas enter a State that exist in our database";
    }
        document.getElementById('st_abbr').value = state[st_info][0];
        document.getElementById('st_name').value = state[st_info][1];
        document.getElementById('capital').value = state[st_info][2];
        document.getElementById('pop').value = state[st_info][3];
    }

};
