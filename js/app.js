console.log("Aplicacion Calculadora");

function calcular(operación) {
    const forma = document.getElementById("forma");
    let operandoA = parseFloat(forma["operandoA"].value);
    let operandoB = parseFloat(forma["operandoB"].value);

    switch(operación){
        case 'suma':
            resultado  = operandoA + operandoB;
            break;
            case 'resta':
                resultado = operandoA - operandoB;
                break;
                case 'multiplicacion':
                    resultado = operandoA * operandoB;
                    break;
                    case 'division':
                        resultado = operandoA / operandoB;
                        break;
                        default:
                            resultado = "Operación no válida";
    }

    if (isNaN(resultado)) {
        document.getElementById("resultado").innerHTML = "La operación no incluye números válidos";
    } else {
        document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
    }
}   