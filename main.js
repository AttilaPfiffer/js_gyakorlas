import { CIPOLISTA } from "./adat.js";
import { dives_task, felsorolasOsszeallit, listaConsolraKiir, ossz_feladat } from "./fuggveny.js";
//írd ki a consolera a cipőlista típusait! mehet mellé az ár is

console.log(CIPOLISTA)


listaConsolraKiir(CIPOLISTA)

/* HTML DOM-ba írjuk ki felsorolásba*/
/* 1. megfogjuk a html megfelelő elemét*/
//const CIPOKELEM = document.getElementById("cipok");
const CIPOKELEM = document.querySelector("#cipok");
console.log(CIPOKELEM);
/* 2. Összeállítjuk a html kódot, és */
let txt = felsorolasOsszeallit(CIPOLISTA)

let txte = dives_task(CIPOLISTA)
console.log(txte)
/* 3. Beletesszük az elembe */
CIPOKELEM.innerHTML = "<h3>Szép nap van, vegyünk cipőt!</h3>";
CIPOKELEM.innerHTML += txt;
const CIPOK = document.querySelector("#dives");

CIPOK.innerHTML += txte;



const LEGDRA = document.querySelector("#osszegzes")
let blabla = ossz_feladat(CIPOLISTA)
LEGDRA.innerHTML = `<p> A termékek összértéke: ${blabla} </p>`