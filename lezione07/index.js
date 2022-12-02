 // const luoghi = []

let contatore = 0;

const BTN_UP = document.getElementById('btnFwd');
const BTN_DOWN = document.getElementById('btnBack');
const FOTO = document.getElementById('fotoCopertina');
const TESTO = document.getElementById('testo');

//const luogo1 = {
 //   foto: 'img/piazza_carignano.jpg',
   //   title: 'Piazza carignano'
 // }

 // const luogo2 = {
 //     foto: 'img/piazza_carlina.jpg',
 //     title: 'Piazza Carlina'
 // }

 // const luogo3 = {
    //  foto: 'img/piazza_vittorioveneto.jpg',
    //  title: 'Piazza Vittorio Veneto'
 // }


BTN_DOWN.onclick = counterDOWN;
BTN_UP.onclick = counterUP;
 // luoghi.push(luogo1);
 // luoghi.push(luogo2);
 // luoghi.push(luogo3);

for (const luogo of luoghi) {
    console.log(luogo);
}


function counterDOWN() {
    contatore--;
    if (contatore > 0){
        contatore = luoghi.length -1;
        contatore = 0;
    }
    display();
}


function counterUP() {
    contatore++;
    if (contatore > luoghi.length -1) {
        contatore = 0;
    }
    display();
}

function display() {
    console.log(contatore);
    console.log(FOTO);
    FOTO.src = luoghi[contatore].foto;
    TESTO.textContent = luoghi[contatore].title;
}