function verify(){
    var first = document.getElementById("id1").value;
    var second = document.getElementById("id2").value;
    if(first != second){
        alert("The passwords do not match.");
    } else if(first.length < 8 || second.length < 8){
        alert("The passwords must be at least 8 characters long");
    } else if(first == second){
        alert("That's a match!");
    }
}