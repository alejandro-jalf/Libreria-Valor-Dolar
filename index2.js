const moneda = require("./currency-dollar")

//uso necesario de async await

const us = "http://data.fixer.io/api/latest?access_key=57512c792dc9883be5911065edc1dca0&symbols=USD,EUR,MXN";

setValores = async () => {

    const numDolar1 = await moneda.toDolar(5000, us);
    const numDolar2 = await moneda.toDolar(-5000, us);
    const numDolar3 = await moneda.toMXN(1, us);

    console.log(`5000 : ${moneda.toStringUSD(5000)}`);

    console.log(`5000 valen : ${numDolar1}`);

    console.log(`-5000 valen: ${numDolar2}`);

    console.log(`5000 Dolares valen en pesos: ${moneda.toStringMXN(numDolar1)}`);

    console.log(`1 Dolar vale en pesos: ${numDolar3}`);
}

setValores();

