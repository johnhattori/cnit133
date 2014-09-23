$(document).ready(function(){
  
    // Toggle instructions
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
    
    // Calculate grade 
    $("#score").click(function(){
        numbers = [];
        is_error = false;
        $(".score").each(function() {
            number = parseFloat($(this).val());

            if (number > 100 || number < 0) {
                $("#error").text("Number out of range").show();
                $("#average").empty();
                $("#grade").empty();
                $("#warning").empty().hide();
                is_error = true;
                return; //abort
            } else {
            if (!isNaN(number)) {
                numbers.push(number);
            }
        }
    });
    if (!is_error) {
        sum = add(numbers);
        grade = getGrade(sum);
        $("#error").empty().hide();
        $("#average").text("Average score : " + sum);
        $("#grade").text("Grade : " + grade);
        if(sum <= 59) {
            $("#warning").text("You need to retake this course.");
        }
    }

    });
        $("#reset").click(function(){
            $(".score").each(function() {
                $(this).val("");
            });
            $("#error").empty().hide();
            $("#warning").empty().hide();
            $("#average").empty();
            $("#grade").empty();
    });

});

function add(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (i === 0) {
            sum += numbers[i] * .5;
        }else if (i === 1 || i === 2) {
            sum += numbers[i] * .2;
        }else {
            sum += numbers[i] * .1;
        }
    }   
    return sum;
} 

function getGrade(total) {
    if(total >= 90) {
        return "A";
    }  
    if(total >= 80) {
        return "B";
    }  
    if(total >= 70) {
        return "C";
    }  
    if(total >= 60) {
        return "D";
    }  
    if(total <= 59) {
        return "F";
    }  
}
