function suma(n1,  n2)  {
    return n1 + n2;
};

function resta(n1,  n2){
    return n1 - n2;
};

function saludo(nombre){
    return `Hola ${nombre} estoy practicando modulos`
};

function noMeRindo(mensaj){
    return `Este es un mensaje de auxilio: ${mensaj}`
};

//exportamos ambas funciones sdentro de un objto
//para q puedan ser accesibles por su nombre al importarkas,

module.exports = {suma,resta, saludo,noMeRindo};