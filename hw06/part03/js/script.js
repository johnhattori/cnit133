var app = angular.module('myApp',[])

app.run(function($rootScope,$interval){
    $rootScope.AssignedDate = Date; // 'Date' could be assigned too of course:)
    
    $interval(function(){
        // nothing is required here, interval triggers digest automaticaly
    },1000)
})
$( document ).ready(function() {
    $( '#format' ).click(function() {
        $( '#area' ).empty();    
        $( '#prefix' ).empty();    
        $( '#suffix' ).empty();    
        var num = $( '#mobile-number' ).intlTelInput("getCleanNumber");
        var area = num.slice(2,5);
        var prefix = num.slice(4,7);
        var suffix = num.slice(7,14);
        $( '#area' ).append("Your area code is: " + area);    
        $( '#prefix' ).append("Your prefix is: " + prefix);    
        $( '#suffix' ).append("Your line number is: " + suffix);    
    });

});
