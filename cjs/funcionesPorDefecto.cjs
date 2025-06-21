let funciones = {}; 

funciones.mensaje = () => {
    return `-----Estoy intentando hacr funciones por defecto-----`
};

funciones.multiplicar = (n1, n2) => {
    return n1*n2
};

funciones.sumar = (n1, n2) => {
    return n1+n2;
};

module.exports = funciones;