var ticker = 1;

var goToPrev = function(){
    var theImgTag = document.getElementById("imgID");
    
    if(ticker == 1){
        theImgTag.src = "Luca5.jpg";
        ticker = 5;
    } else if(ticker == 2){
        theImgTag.src = "Luca1.jpg";
        ticker = 1;
    } else if(ticker == 3){
        theImgTag.src = "Luca2.jpg";
        ticker = 2;
    } else if(ticker == 4){
        theImgTag.src = "Luca3.jpg";
        ticker = 3;
    } else if(ticker == 5){
        theImgTag.src = "Luca4.jpg";
        ticker = 4;
    }

}

var goToNext = function(){
    var theImgTag = document.getElementById("imgID");
    
    if(ticker == 1){
        theImgTag.src = "Luca2.jpg";
        ticker = 2;
    } else if(ticker == 2){
        theImgTag.src = "Luca3.jpg";
        ticker = 3;
    } else if(ticker == 3){
        theImgTag.src = "Luca4.jpg";
        ticker = 4;
    } else if(ticker == 4){
        theImgTag.src = "Luca5.jpg";
        ticker = 5;
    } else if(ticker == 5){
        theImgTag.src = "Luca1.jpg";
        ticker = 1;
    }

}