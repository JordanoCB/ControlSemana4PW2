function imprimir(){

    function Persona(nombre, apellido, edad, rut, vivo){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.rut=rut;
        this.vivo=vivo;
    };
    
    var persona1 = new Persona("Jordano", "Contreras", "30", "1-9", true);

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Insertando tabla en el ID pregunta2
    document.getElementById("pregunta2").appendChild(table);

    // Creando encabezados
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Nombre";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Apellido";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Edad";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Edad";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "RUT";
    let heading_6 = document.createElement('th');
    heading_6.innerHTML = "Vivo";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    thead.appendChild(row_1);

    // Creando contenido de la tabla
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = persona1.nombre;
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = persona1.apellido;
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = persona1.edad;
    let row_2_data_4 = document.createElement('td');
    row_2_data_4.innerHTML = persona1.rut;
    let row_2_data_5 = document.createElement('td');
    row_2_data_5.innerHTML = persona1.vivo;

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    row_2.appendChild(row_2_data_4);
    row_2.appendChild(row_2_data_5);
    tbody.appendChild(row_2);
}