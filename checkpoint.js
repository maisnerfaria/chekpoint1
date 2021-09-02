function microondas(tempo, alimento){
    let tempoPadrao = 0;

    switch(alimento){
        case 'Pipoca':
            tempoPadrao = 10;
        break;
        case 'Macarrão':
        case 'Brigadeiro':
            tempoPadrao = 8;
        break;
        case 'Carne':
            tempoPadrao = 15;
        break;
        case 'Feijão':
            tempoPadrao = 12;
        break;
        default:
            console.log("Alimento inexistente");
        break;    
    }

if(tempo > (tempoPadrao * 2)){
    console.log("Sua comida queimou");
}else if(tempo < tempoPadrao){
    console.log("Tempo insuficiente");
}
if(tempo > (tempoPadrao * 3)){
    console.log("Kabum");
}
if(tempo = tempoPadrao){
    console.log("Prato pronto, bom apetite!")
}
}

microondas(30, 'torta');
microondas(9, 'Pipoca');
microondas(30, 'Pipoca');
microondas(10, 'Pipoca');
microondas(40, 'Feijão');
microondas(20, 'queijo');