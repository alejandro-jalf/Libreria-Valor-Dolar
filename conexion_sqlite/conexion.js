
// var sqlite3 = require('sqlite3').verbose();
const getValor = require("../lib/valor_dolar");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("sqlite:Dolar");
var dt=new Date();

consulta = () => {
    
    db.serialize(() => {
        
        // return new Promise(function(resolve,reject){
        //     db.each("SELECT * FROM Valor_Dolar", function(err, row){
        //         // console.log("User Valor: "+row.dolar +" id: "+row.id+" Fecha: "+row.fecha+" Hora: "+row.hora);
        //         hora_get =  row.hora;
        //         fecha_get =  row.fecha;
        //         console.log("espera: "+fecha_get);
        //         resolve(fecha_get)
        //     })
        // });

        // fecha_actual = new Date(2018,10,06);

        // console.log(fecha_actual);
        // console.log(fecha_get);

        // if(fecha_get ==! fecha_actual){
        //     console.log("son iguales");
        // } else {
        //     console.log("No hay coincidencias");
        // }
    });
}

module.exports = {
    async getSetUpdateData(us){
        let respuesta = await getDatos();
        const item = respuesta[0];
        const fechaActual = await getFecha();
        const item2 = fechaActual[0];
    
        if((item.fecha !== item2.fechac) || ((item.fecha === item2.fechac) && (item.hora !== dt.getHours())) ){
            // console.log("entra")
            const valor = await getValor.consultaValor(us);
            const respt = await updateDatos(valor);
            respuesta = await getDatos();
            return respuesta;
        } else {
            // console.log("No entra");
            return respuesta;
        }
    }
}

getDatos = async () => {  
    try {
        respuesta = sequelize.query("select * from Valor_dolar",{type: Sequelize.QueryTypes.SELECT});
        return respuesta;
    } catch (err) {
        respuesta = "Error: "+ err;
        return respuesta;
    }
}

getFecha = async () => {
    var respuesta = "";
    try {
        respuesta = sequelize.query("select date() as fechac",{type: Sequelize.QueryTypes.SELECT})
        return respuesta;
    } catch (err) {
        respuesta = "EEError: "+ err;
        return respuesta;
    }
}

updateDatos = (valor) => {
    try{
        const res = sequelize.query(`update Valor_dolar set dolar = ${valor}, fecha = date(), hora = ${dt.getHours()} where id = 1`);
        return res;
    } catch (err) {
        return ("Error: "+ err);
    }
}

