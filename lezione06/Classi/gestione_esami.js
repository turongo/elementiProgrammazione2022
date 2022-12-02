let studenti = [
    new Studente('pippo', 24),
    new Studente('kira', 26),
    new Studente('albert', 30),
    new Studente('ildiko', 18),
    new Studente('desi', 29),
]

var totale = 0;
for(const studente of studenti) {

    for (const key in studente) {
        if (studente.hasOwnProperty(key)) {
            const element = studente[key];
            console.log(key + ':' + element);
        }
    }
    console.log(studente.nome);
    totale += studente.voto;
}

switch (studenti.voto) {
    case 15:
    case 16:
    case 17:
        console.log('insufficente');
        break;
    case 18:
    case 19:
    case 20:
        console.log('sufficente');
        break;
    case 21:
    case 22:
    case 23:
        console.log('buono');
        break;
    case 24:
    case 25:
    case 26:
        console.log('molto buono');
        break;
                
    default: 27
    console.log('excellent');
        break;
}



console.log('il totale dei voti è: ' + totale);