
var axios = require("axios");

const user = "http://data.fixer.io/api/latest?access_key=57512c792dc9883be5911065edc1dca0&symbols=USD,EUR,MXN";

let mxn = 0, vari = 0, usd = 0;

module.exports = {
    async consultaValor(){
        try{
            let response = await  axios.get(user);
            usd = response.data.rates.USD;
            mxn = response.data.rates.MXN;
            return (mxn/usd);
        } catch (err) {
            return "EError: "+err;
        }
    }
}

    reci = async() => {
        const r = await consultaValor();
        console.log(r)
    }

// reci();

