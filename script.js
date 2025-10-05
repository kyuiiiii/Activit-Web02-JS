function convert(){ //fonction pour convertir avec bouton
    if(document.getElementById("euro").value!=0){
        var e = document.getElementById("euro").value; 
        var dam = e*1.17;
        var dau = e*1.78;
        document.getElementById("dollaram").value=dam;
        document.getElementById("dollaraus").value=dau;
    } 
    else if(document.getElementById("dollaram").value!=0){
        var dam = document.getElementById("dollaram").value;
        console.log(dam);
        var e = dam*0.85;
        var dau = dam*1.52;
        document.getElementById("euro").value=e;
        document.getElementById("dollaraus").value=dau;
    }
    else if(document.getElementById("dollaraus").value!=0){
        var dau = document.getElementById("dollaraus").value;
        var e = dau*0.56;
        var dam = dau*0.66;
        document.getElementById("euro").value=e;
        document.getElementById("dollaram").value=dam;
    }
}

//trois eventlistener pour chaque input
//euro
const input = document.getElementById("euro2");
input.addEventListener("input", (event)=>{
    var eur = document.getElementById("euro2").value;
    var doam = eur*1.17;
    var doau = eur*1.78;
    document.getElementById("dollaram2").value=doam;
    document.getElementById("dollaraus2").value=doau;
})
//dollar americain
const input2 = document.getElementById("dollaram2");
input2.addEventListener("input", (event) =>{
    var doam = document.getElementById("dollaram2").value;
    var eur = doam*0.85;
    var doau = doam*1.52;
    document.getElementById("euro2").value=eur;
    document.getElementById("dollaraus2").value=doau;
})
//dollar australien
const input3 = document.getElementById("dollaraus2");
input3.addEventListener("input", (event) =>{
    var doau = document.getElementById("dollaraus2").value;
    var eur = doau*0.56;
    var doam = doau*0.66;
    document.getElementById("euro2").value=eur;
    document.getElementById("dollaram2").value=doam;
})

//change wikipedia vers le site fr
document.querySelector("a").href = "https://fr.wikipedia.org";

//verifie si le input text contient oui/non ou pas
function msg(){
    var a = document.querySelector("#pas");
    var avalue = a.value;
    if(avalue==="Oui"||avalue==="Non"){
        alert("Aucun problème");
    }
    else{
        a.placeholder="Il faut mettre Oui ou Non";
    }
}

//change les choix
document.getElementById("choix1").innerHTML="HP";
document.getElementById("choix2").innerHTML="Casque";
document.getElementById("choix3").innerHTML="Bluetooth";

//change le type de volume en fonction du choix
const elem = document.getElementById("c1")
elem.addEventListener("change", (event) => {
    document.getElementById("vol").innerHTML="Volume HP";
});
const elem2 = document.getElementById("c2")
elem2.addEventListener("change", (event) => {
    document.getElementById("vol").innerHTML="Volume Casque";
});
const elem3 = document.getElementById("c3")
elem3.addEventListener("change", (event) => {
    document.getElementById("vol").innerHTML="Volume Bluetooth";
});
    
//change le volume max et l'affiche dans la console
document.getElementById("slider").max=111;
let vol = document.getElementById("slider").max;
console.log("volume max=" + vol);

//affiche et change le volume en fonction du slider
var slider = document.getElementById("slider");
var output = document.getElementById("output");
output.innerHTML = slider.value; 
slider.oninput = function() {
  output.innerHTML = this.value;
}

//change vers Mute
document.querySelector("#case").innerHTML="Mute";

//bloque le slider si la boite est coche
document.getElementById("check").onchange=function(){
    document.getElementById("slider").disabled = this.checked;
}

//ajoute img dans liens et images
var img = document.createElement("img");
img.setAttribute("class", "google");
img.src="https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg";
var src = document.getElementById("liens");
src.appendChild(img);

//affiche seulement l'annee de la date
const date = document.querySelector('input[type="date"]');
date.addEventListener("input", (event)=>{
    var dat = date.value;
    var maxlength = 4;
    var courtdate = dat.substring(0, maxlength);
    console.log(courtdate);
})

let dl = document.getElementById("dl");
let space = document.getElementById("space");

dl.value = 0;
space.value = 0;

let intervalle = setInterval(function() {
    if(dl.value < dl.max){
        dl.value+=5;
    }
    if(space.value < space.max){
        space.value+=5;
    }
}, 1000);

