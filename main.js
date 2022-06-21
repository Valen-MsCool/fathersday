

function submitname(){
var personnamevariable = document.getElementById("name").value;
localStorage.setItem ("personname",personnamevariable);


}

function card(){
document.getElementById("cardpt1").innerHTML = "Hello ";
document.getElementById("yourname").innerHTML = localStorage.getItem ("personname");
document.getElementById("cardpt2").innerHTML = ", if you are getting this card, it means you are an excellent dad. I hope you are enjoying your special day and I wish you the best. Have an amazing fathers day.";
}