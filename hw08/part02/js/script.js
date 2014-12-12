
function ajaxFunction(){
    var ajaxRequest1, ajaxRequest2, ajaxRequest3;
    
    try{
        ajaxRequest1 = new XMLHttpRequest();
        ajaxRequest2 = new XMLHttpRequest();
        ajaxRequest3 = new XMLHttpRequest();

    } catch (e){
        try{
            ajaxRequest1 = new ActiveXObject("Msxml2.XMLHTTP");
            ajaxRequest2 = new ActiveXObject("Msxml2.XMLHTTP");
            ajaxRequest3 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try{
                ajaxRequest1 = new ActiveXObject("Microsoft.XMLHTTP");
                ajaxRequest2 = new ActiveXObject("Microsoft.XMLHTTP");
                ajaxRequest3 = new ActiveXObject("Microsoft.XMLHTTP");

            } catch (e){
                alert("Your browser ain't working!");
                return false;
            }
        }
    }
    ajaxRequest1.onreadystatechange = function(){
        if(ajaxRequest1.readyState == 4){
            document.myForm.time.value = ajaxRequest1.responseText;
        }
    }

    ajaxRequest2.onreadystatechange = function(){
        if(ajaxRequest1.readyState == 4){
            document.myForm.day.value = ajaxRequest2.responseText;
        }
    }
    
    ajaxRequest3.onreadystatechange = function(){
        if(ajaxRequest3.readyState == 4){
            document.myForm.date.value = ajaxRequest3.responseText;
        }
    }


    ajaxRequest1.open("GET", "../../time.php", true);
    ajaxRequest1.send(null); 
    ajaxRequest2.open("GET", "../../day.php", true);
    ajaxRequest2.send(null);
    ajaxRequest3.open("GET", "../../date.php", true);
    ajaxRequest3.send(null);

}



