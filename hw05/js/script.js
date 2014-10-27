$( document ).ready(function() {
    $( "#submit" ).click(function() {
        validate(this.form);
    });
    $( "#reset" ).click(function() {
        reset(this.form);
    });
    $(function(){
      // bind change event to select
      $('#dynamic_select').bind('change', function () {
          var url = $(this).val(); // get selected value
          if (url) { // require a URL
              window.location = url; // redirect
          }
          return false;
      });
    });

});
/* funtion to check if user entered values for textfield, checkboxes and radio buttons */
function validate(form){
    //value for textfield
    var txt = document.getElementById("text").value;
    //value for radio buttons
    var radio;
    for (var i = 0; i < form.rad.length; i++){
        if (form.rad[i].checked)
            radio = form.rad[i].value;
    }
    //value for checkbox
    var checkedValue = null; 
    var inputElements = document.getElementsByClassName('cbox');
    for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
        }
    }
    //value for options
    var e = document.getElementById("opt");
    var option = e.options[e.selectedIndex].value;
    
    var msg = "";   
    if(!txt)
        msg = "No text entered. <br>";
    else
        msg = txt + "<br>";
    if(!radio)
        msg = msg + "No radio button chosen<br>";
    else{
        switch(radio){
            case "r1" : msg = msg + "You checked button #1<br>";
            break;
            case "r2" : msg = msg + "You checked button #2<br>";
            break;
            case "r3" : msg = msg + "You checked button #3<br>";
            break;
        }
    }
    if(checkedValue == null)
        msg = msg + "No checkbox chosen<br>";
    else{
        for(i=0;i<checkedValue.length;i++){
            msg = msg + "Checkbox " + checkedValue[i] + " checked<br>";
        }
    } 
    if(option == "o0")
        msg = msg + "No option selected";
    else{
        switch(option){
            case "o1" : msg = msg + "You selected option 1<br>";
            break;
            case "o2" : msg = msg + "You selected option 2<br>";
            break;
            case "o3" : msg = msg + "You selected option 3<br>";
            break;
        }
    }
    document.getElementById('showmsg').innerHTML = msg;
}

function reset(form) {
    document.index1.text.value = "";  
    document.getElementById('showmsg').innerHTML = "";
}

function validate1(form) {
    var e = document.getElementById("options");
    var option = e.options[e.selectedIndex].value;
    var msg = ""
    if(option == "select") {
        msg = msg + "No option selected";
    document.getElementById('showmsg').innerHTML = msg;
    }    
    else{ 
        msg = "";
        document.getElementById('showmsg').innerHTML = msg;
        window.location.replace(option);
    }
}   
