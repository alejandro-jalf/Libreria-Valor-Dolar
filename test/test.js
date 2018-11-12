
const assert = require("chai").assert;
const libMoneda = require("../lib/index")

describe ('libMoneda',function() {
    describe('toDolar', function() {
        it('Retorno numero',function(){
            assert.typeOf(libMoneda.toDolar("jsjsj"),"number");
        });
        it('Retorno USD ',function(){
            assert.equal(libMoneda.toDolar(19.88),1);
        });
        it("No aceptar numeros negativos", () => {
            assert.equal(libMoneda.toDolar(-19.88),0);
        });
    });

    describe('toMXN', function() {
        it('Retorno numero',function(){
            assert.typeOf(libMoneda.toDolar("jsjsj"),"number");
        });
        it('Retorno MXN ',function(){
            assert.equal(libMoneda.toDolar(1),19.88);
        });
        it("No aceptar numeros negativos", () => {
            assert.equal(libMoneda.toDolar(-19.88),0);
        });
    });
});
