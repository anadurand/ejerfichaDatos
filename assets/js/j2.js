var mostrar = document.getElementById("add-ficha");

mostrar.onclick = function(){

  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var dni = document.getElementById("dni").value;
  var direccion = document.getElementById("direccion").value;

  if(nombre != "" && apellido != "" && dni!= "" && direccion!=""){

    if(dni.length!=8 || dni.match(/[^0-9]/g)){
      alert("Numero de DNI invalido");
    }else{
      document.getElementById("name").innerHTML = nombre.toUpperCase();
      document.getElementById("lastName").innerHTML = apellido.toUpperCase();
      document.getElementById("id").innerHTML = dni;
      document.getElementById("adress").innerHTML = direccion;

      document.getElementById("nombre").value = "";
      document.getElementById("apellido").value = "";
      document.getElementById("dni").value = "";
      document.getElementById("direccion").value = "";


    }



    }

}
