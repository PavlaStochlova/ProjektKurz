/* projekt pro kurz */
let tabulka;
const vychoziVelikostY = 1;
const vychoziVelikostX = 3; 
let pojistenci = [];
let pocetVypsanychRadku = 0;

function vytvorBunku(hodnota) {
    let td = document.createElement("td");
    td.className = "sloupec";
    let labelBunky = document.createElement("label");
    labelBunky.className = "paddingBunky"
    labelBunky.innerText = hodnota;  
    td.appendChild(labelBunky);
    return td;
}

function vytvorVychoziTabulku() {
    tabulka = document.createElement("table");
    let tabulkaPojistencu = document.getElementById("tabulkaPojistencu"); 
    tabulkaPojistencu.appendChild(tabulka);
    for (let y = 0; y < vychoziVelikostY; y++) {
        let tr = document.createElement("tr");
        tr.className = "radek"
        tabulka.appendChild(tr);
        tr.appendChild(vytvorBunku('Jméno a příjmení'));
        tr.appendChild(vytvorBunku('Věk'));
        tr.appendChild(vytvorBunku('Telefon'));
    }
}

window.onload = function () {
  vytvorVychoziTabulku();
  nastavUdalosti();
}

function vytvorRadek(j) {
    let novyRadek = document.createElement("tr");
    novyRadek.className = "radek"
    novyRadek.appendChild(vytvorBunku(pojistenci[j].jmeno + " " + pojistenci[j].prijmeni));
    novyRadek.appendChild(vytvorBunku(pojistenci[j].vek));
    novyRadek.appendChild(vytvorBunku(pojistenci[j].telefon));
    return novyRadek;
}

class Pojistenec {
      constructor(jmeno, prijmeni, vek, telefon) {
        this.jmeno = jmeno;
        this.prijmeni = prijmeni;
        this.vek = vek;
        this.telefon = telefon;
      }
}

function nastavUdalosti() {
    this.tlacitkoUlozit.onclick = () => {
        const pojistenec = new Pojistenec(this.jmeno.value, this.prijmeni.value, this.vek.value, this.telefon.value);
        pojistenci.push(pojistenec);
        this.vypisTabulky(pocetVypsanychRadku);
        pocetVypsanychRadku = pocetVypsanychRadku + 1;
    }
}

function vypisTabulky(pocetVypsanychRadku) {
    for (let j = pocetVypsanychRadku; j< pojistenci.length; j++ ) {
        tabulka.appendChild(vytvorRadek(j));
        /*  vyčištění formuláře pro zapisování dalšího pojištěnce  */
        let poleJmeno = document.getElementById("jmeno");
        poleJmeno.value = "";
        let polePrijmeni = document.getElementById("prijmeni");
        polePrijmeni.value = "";
        let poleVek = document.getElementById("vek");
        poleVek.value = "";
        let poleTelefon = document.getElementById("telefon");
        poleTelefon.value = "";   
    }           
}