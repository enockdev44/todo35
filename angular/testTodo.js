todos = [
    { selected: false, id: 1, nom: 'lita', description: "asa ataon'i lita" },
    { selected: false, id: 2, nom: 'bozy', description: "asa ataon'i bozy" },
    { selected: false, id: 3, nom: 'raly', description: "asa ataon'i raly" }
];

function activiteeDeCoche(id, action) {
    let todosTotal = [];
    switch (action) {
        case 'cochee':
            todosOn = todos.filter((data) => data.id == id)
            todosOff = todos.filter((data) => data.id !== id)
            for (i of todosOn) {
                todosTotal.push(i);
            }
            todosOn[0].selected = true;
            for (j of todosOff) {
                todosTotal.push(j);
            }
            break;
        case 'decochee':
            todosOff = todos.filter((data) => data.id == id)
            todosOn = todos.filter((data) => data.id !== id)
            for (i of todosOn) {
                todosTotal.push(i);
            }
            todosOff[0].selected = false;
            for (j of todosOff) {
                todosTotal.push(j);
            }
            break;
        default:
            break;


    }
    return todosTotal;
}
activiteeDeCoche(1, 'cochee');
activiteeDeCoche(2, 'decochee');
activiteeDeCoche(3, 'decochee');
console.table(todos);