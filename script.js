function limpiar(){
    document.getElementById("formulario").reset();
}

const sumar = ()=>{
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").value = num1 + num2;
}

const restar = ()=>{
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").value = num1 - num2;
}

const multiplicar = ()=>{
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").value = num1 * num2;
}

const dividir = ()=>{
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").value = num1 / num2;
}