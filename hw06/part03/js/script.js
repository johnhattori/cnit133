var app = angular.module('myApp',[])

app.run(function($rootScope,$interval){
    $rootScope.AssignedDate = Date; // 'Date' could be assigned too of course:)
    
    $interval(function(){
        // nothing is required here, interval triggers digest automaticaly
    },1000)
})
$( document ).ready(function() {
    var num = $( '#mobile-number' ).intlTelInput("getCleanNumber");
    $( '#format' ).click(function() {
        console.log($( '#mobile-number' ).intlTelInput("getCleanNumber"));
            
    });

});
