function arrays() {
    let colors = ['verd', 'vermell', 'groc', 'blau', 'negre', 'blanc'];

    // Digui si tots els colors són menors que ‘marró’
    let totsMenorsMarro = colors.every(totsMenorMarro);
    document.write(totsMenorsMarro + '<br/>');


    //Et torni els colors que són menors que ‘marró’
    let menorsMarro = colors.filter(menorMarro);
    document.write(menorsMarro + '<br/>');

    //Et torni els darrers 2 colors (independentment de quants hi hagin abans)
    let dosUltims = colors.pop() + " " + colors.pop();
    document.write(dosUltims + '<br/>');

    //Afegeixi el color ‘turquesa’
    colors.push("turquesa");
    document.write(colors + '<br/>');

    //Elimini el color ‘verd’
    colors.shift();
    document.write(colors);
}

function totsMenorMarro(color) {
    return color < 'marró';
}


function menorMarro(color) {
    return color < 'marró';
}