//Ejercio x

function add(a, b) {
    return a + b;
}
test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

//Ejercicio 1

const pin = '1234';
function validar(pin) {
    if (/^\d+/.test(pin) && (pin.length === 4 || pin.length === 6)) {
        return true;
    } else {
        return false;
    }
}

test('validar pin', () => {
    expect(validar(pin)).toBe(true);
    expect(validar('hola2345')).toBe(false);
    // expect(validar('hola')).toBe(false);
});

//ejercicio 2
function volumenTanque(altura, diametro) {
    const medidaEnCm = /^[0-9\s]+cm$/; //validar que sea un numero y que tenga cm
    const medidaEnM = /^[0-9\s]+m$/; //validar que sea un numero y que tenga m

    if (medidaEnM.test(altura) && medidaEnM.test(diametro)) {
        diametro = parseFloat(diametro) * 100;
        altura = parseFloat(altura) * 100;
        return true;
    } else if (medidaEnCm.test(altura) && medidaEnCm.test(diametro)) {
        diametro = parseFloat(diametro); //parse float, convierte la cadena en numero
        altura = parseFloat(altura);
        return true;
    } else {
       return false;
    }
    const radio = diametro / 2;
    const volumenCm3 = Math.PI * (Math.pow(radio * 2)) * altura;
    const volumenLitros = volumenCm3 / 1000;
    return volumenLitros;

}

test('validarDatos', () => {
    expect(volumenTanque('10m', '1m')).toBe(true);
    expect(volumenTanque('10cm', '1cm')).toBe(true);
    expect(volumenTanque('15m', '2m')).toBe(true);
})

//ejercicio4
function calcularSiglo(year){
    const siglo=parseInt(year);
    return Math.floor(siglo/100);
}

test('calcularSiglo',()=>{
    expect(calcularSiglo(1705)).toBe(17);
})