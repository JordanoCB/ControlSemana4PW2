function obtenerSuma(){
    var valor1 = document.getElementById("valor").value;
    var valor2 = valor1-1;
    var resultado = 0;
    var i =0;

    while(i <= (valor1 - 1)) {
        resultado += i;
        i++;
    }

    document.getElementById("mostrarsuma").innerHTML = `la suma hasta ${valor2} es ${resultado}`;
}