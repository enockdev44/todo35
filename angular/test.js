allumettes = [
    { id: 1, nom: 'tige 1', etat: 'on' },
    { id: 2, nom: 'tige 2', etat: 'on' },
    { id: 3, nom: 'tige 3', etat: 'on' }
];

function activitee(id) {
    console.table(allumettes);
    tigeAllumee = allumettes.filter((data) => data.id == id)
    tigeEteinte = allumettes.filter((data) => data.id !== id)
    tigeAllumee[0].etat = 'off';
    tigeTotal = [];
    for (i of tigeAllumee) {
        tigeTotal.push(i);
    }
    for (j of tigeEteinte) {
        tigeTotal.push(j);
    }
    return tigeTotal;

}

// console.table(activitee(3));
console.table(activitee(1));
console.table(activitee(2));