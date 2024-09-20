//ejercicio 3
function devolverLitros(time) {
    let litros = Math.floor((time * 0.5) / 1)
    return litros
}


//ejercicio 5
function piedraPapelTijera(j1,j2){
    if(j1==j2){
        return 'empate'
    }
    if((j1=='tijera' && j2=='papel') || (j1=='piedra' && j2=='tijera') || (j1=='papel' && j2=='piedra')){
        return 'jugador 1 gana'
    }else{
        return 'jugador 2 gana'
    }
}

//ejercicio6
function validarDireccion(direccion) {
    const requiredFields = ["street", "number", "zip_code", "city", "province"];
    const errors = [];

    requiredFields.forEach(field => {
        if (!direccion[field]) {
            errors.push(`El campo ${field} es obligatorio.`);
        }
    });

    if (typeof direccion.street !== "string") {
        errors.push("El campo street debe ser una cadena de texto.");
    }
    if (typeof direccion.number !== "number") {
        errors.push("El campo number debe ser un número.");
    }
    if (direccion.floor_apartment && typeof direccion.floor_apartment !== "string") {
        errors.push("El campo floor_apartment debe ser una cadena de texto.");
    }
    if (typeof direccion.zip_code !== "number") {
        errors.push("El campo zip_code debe ser un número.");
    }
    if (direccion.town && typeof direccion.town !== "string") {
        errors.push("El campo town debe ser una cadena de texto.");
    }
    if (typeof direccion.city !== "string") {
        errors.push("El campo city debe ser una cadena de texto.");
    }
    if (typeof direccion.province !== "string") {
        errors.push("El campo province debe ser una cadena de texto.");
    }

    return errors.length > 0 ? errors : "La dirección es válida.";
}

// Ejemplo de uso:
const direccion = {
    "street": "Salta",
    "number": 359,
    "floor_apartment": "D3",
    "zip_code": 5500,
    "town": "",
    "city": "Mendoza",
    "province": "Mendoza"
};






test('litrosPorHora',()=>{
    expect(devolverLitros(3)).toBe(1);
    expect(piedraPapelTijera('tijera','papel')).toBe('jugador 1 gana');
    expect(validarDireccion(direccion)).toBe('La dirección es válida');
})