import { CIPOLISTA } from "./adat.js";

export function listaConsolraKiir(lista) {
    for (let index = 0; index < lista.length; index++) {
        console.log(`Típus: ${lista[index].tipus}, Ára: ${lista[index].ar}`)
    }
}

export function felsorolasOsszeallit(lista){
    let txt = "<ul>";
    for (let index = 0; index < lista.length; index++) {
        txt += `<li> Típus: ${lista[index].tipus}, Ára: ${lista[index].ar} </li>`
}
    txt += "</ul>";

    console.log(txt);
    return txt
}

export function dives_task(lista) {
    let txte = "<div id = dives>"
    for(let index = 0; index < lista.length; index++) {
        txte += `<div class ="termek">`
        txte += `<h3> Típus: ${lista[index].tipus} </h3>`
        txte += `<p> Szín: ${lista[index].szin} </p>`
        txte += `<p> Ár: ${lista[index].ar} </p>`
        txte += `</div>`
    }
    txte += "</div>"
    return txte
   
}

export function ossz_feladat(lista) {
    let blabla = 0;
    for(let index = 0; index < lista.length; index++) {
        blabla += lista[index].ar
    }
    return blabla
}
    
export function ossz_feladat2(){
let blabla2 = 0;
    for(let index = 0; index < lista.length; index++) {
        if(lista[index].ar < lista[blabla2].ar){
            blabla2 = index;
        }
    }
    return blabla2
}    
    
export function ossz_feladat3(){
    let db = 0
    for(let index = 0; index < lista.length; index++) {
        if(lista[index].nev === "körömcipő") {
            db ++
        }
    }
    return db
}
