var rgb = function(r,g,b){
    return ("rgb("+r+","+g+","+b+")");
}

var changeBackground = function(){
    var R = document.getElementById("R").value;
    var G = document.getElementById("G").value;
    var B = document.getElementById("B").value;
    var pTag = document.getElementById("p1");
    var total = rgb(R,G,B);
    pTag.style.backgroundColor = total;
}

var changeBorder = function(){
    var R = document.getElementById("R").value;
    var G = document.getElementById("G").value;
    var B = document.getElementById("B").value;
    var pTag = document.getElementById("p1");
    var total = rgb(R,G,B);
    pTag.style.borderColor = total;
}