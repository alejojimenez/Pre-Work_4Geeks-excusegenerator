window.onload = () => {
    // pasar al HTML el generate messages
    document.querySelector("#excuse").innerHTML = excusemessage();
    //console.log(excusemessage());
    // return;
};

function excusemessage() {
    // asignar arreglo a variables
    var who = ['The dog','My granma','His turtle','My bird'];
    var what = ['eat','pissed','crushed','broked'];
    var when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
    var where = ['in my house','on the street','in my garden']

    // asignar posicion de arreglo segun random
    var whoId = Math.floor(Math.random() * who.length);
    var whatId = Math.floor(Math.random() * what.length);
    var whenId = Math.floor(Math.random() * when.length);
    var whereId = Math.floor(Math.random() * where.length);
    
    // concatenar resultados
    sum_message = who[whoId]+' '+what[whatId]+' '+when[whenId]+' '+where[whereId];
    
    return sum_message;
};