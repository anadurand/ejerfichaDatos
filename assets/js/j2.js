var mostrar = document.getElementById("add-ficha");

mostrar.onclick = function(){

  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var dni = document.getElementById("dni").value;
  var direccion = document.getElementById("direccion").value;

  if(nombre != "" && apellido != "" && dni!= "" && direccion!=""){

    document.getElementById("name").innerHTML = nombre;
    document.getElementById("lastName").innerHTML = apellido;
    document.getElementById("id").innerHTML = dni;
    document.getElementById("adress").innerHTML = direccion;

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("direccion").value = "";

    }

}
