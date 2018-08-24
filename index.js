//var btn_am = document.getElementById("btn_am");
var div_som = document.getElementById("som");
var btn_afficher = document.getElementById("btn_afficher");
var btn_masquer = document.getElementById("btn_masquer");

function masquer()
{
    div_som.style.display = "none";
    btn_masquer.style.display = "none";
    btn_afficher.style.display = "block";
    
}
function afficher()
{
    div_som.style.display = "block";
    btn_masquer.style.display = "block";
    btn_afficher.style.display = "none";
}
