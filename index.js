const moneda = require("./lib/index")

//uso necesario de async await

setValores = async () => {

    const numDolar1 = await moneda.toDolar(5000);
    const numDolar2 = await moneda.toDolar(-5000);
    const numDolar3 = await moneda.toMXN(1);

    console.log(`5000 : ${moneda.toStringUSD(5000)}`);

    console.log(`5000 valen : ${numDolar1}`);

    console.log(`-5000 valen: ${numDolar2}`);

    console.log(`5000 Dolares valen en pesos: ${moneda.toStringMXN(numDolar1)}`);

    console.log(`1 Dolar vale en pesos: ${numDolar3}`);
}

setValores();
