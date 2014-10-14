//while loop to create lyrics
var i = 1;
    document.write("<h4 style='text-align:center'>The Twelve Days of Christmas</h4>");
while(i <= 12){
    document.write("<p style='text-align:center'>On the " + days(i) + " day of Christmas<br>"); 
    document.write("My true love gave to me:<br/>");
dayGift = gift(i);
    document.write(dayGift);
    document.write("" + and(i) + " partridge in a pear tree.</p><br/>");
    i++;
}

//switch statement for days
function days(expr){
    switch(expr){
        case 1: 
            day = "first";     
            break;
        case 2: 
            day = "second";    
            break;
        case 3: 
            day = "third";     
            break;
        case 4: 
            day = "fourth";    
            break;
        case 5: 
            day = "fifth";     
            break;
        case 6: 
            day = "sixth";     
            break;
        case 7: 
            day = "seventh";   
            break;
        case 8: 
            day = "eighth";    
            break;
        case 9: 
            day = "ninth";     
            break;
        case 10:
            day = "tenth";    
            break;
        case 11: 
            day = "eleventh"; 
            break;
        case 12: day = "twelfth";  
            break;
    }
    return day;
}

//switch statement for gifts
var lyric;
function gift(expr){
    switch(expr){
        case 12: 
            lyric = "Twelve drummers drumming,<br>";    
            break;
        case 11: 
            lyric = "Eleven pipers piping,<br>";  
            break;
        case 10: 
            lyric = "Ten lords a leaping,<br>";   
            break;
        case 9: 
            lyric = "Nine ladies dancing,<br>";    
            break;
        case 8: 
            lyric = "Eight maids a milking,<br>";  
            break;
        case 7: 
            lyric = "Seven swans a swimming,<br>"; 
            break;
        case 6: 
            lyric = "Six geese a laying,<br>"; 
            break;
        case 5: 
            lyric = "Five golden rings,<br>";  
            break;
        case 4: 
            lyric = "Four calling birds,<br>"; 
            break;
        case 3: 
            lyric = "Three French Hens,<br>";  
            break;
        case 2: 
            lyric = "Two turtle doves<br>";    
            break;
        case 1: 
            lyric = ""; 
            break;
    }
    return lyric;
}

//whether to use 'and' or not
function and(expr){
    switch(expr){
        case 1: 
            article = "A ";  
            break;
        case 2: 
            article = "And a ";  
            break;
    }
    return article;
}

