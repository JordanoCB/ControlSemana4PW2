function MostrarID(){
    var id=$('#valor'); //este campo con ID valor
    console.log(id); // se muestra en consola el campo con ID valor

    //Se inserta campo con ID valor
    var mostrar = $("h3");
    mostrar.text = `El valor del ID seleccionado es ${id}`;
    mostrar.addClass("mostrar_ID");
    $("#pregunta3").append(id);
}