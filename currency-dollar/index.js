const parse = require ("../lib/Letras")
const valDolar = require("../conexion_sqlite/conexion");


let valorDolar=19.88;


refreshValue = async (url) => {
    const respuesta = await valDolar.getSetUpdateData(url);
    const item = respuesta[0];

    const vd = item.dolar;
    return vd;
}

module.exports = {
    async toDolar(value, url) {
        valorDolar = await refreshValue(url);
        if(value < 0) {return 0;} else{return value/valorDolar;}
        if(typeof(value) === "string"){return 0;}else{return value/valorDolar;}
        
    },

    async toMXN(value, url) {
        valorDolar = await refreshValue(url);
        if(value < 0) {return 0;} else{return value*valorDolar;}
        if(typeof(value) === "string"){return 0;}else{return value*valorDolar;}
        return value*valorDolar;
    },
    toStringMXN(value) {
        if(value === undefined){
            return "Se espera un valor numerico: Valor vacio";
        }else {
            if((typeof(value) === "string")) {
                return "Formato invalido: Solo se aceptan numeros";
            }else {
                if(parseInt(value)<0) {
                    return "Valor invalido: No se aceptan numeros negativos";
                }else {
                    return parse.NumeroALetras(value,"PESO","PESOS");
                }
            }
        }
    },
    toStringUSD(value) {
        if(value === undefined){
            return "Se espera un valor numerico: Valor vacio";
        }else {
            if(typeof(value) === "string") {
                return "Formato invalido: Solo se aceptan numeros";
            }else {
                if(value<0) {
                    return "Valor invalido: No se aceptan numeros negativos";
                }else {
                    return parse.NumeroALetras(value,"DOLAR","DOLARES");
                }
            }
        }
    }
}

