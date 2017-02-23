do{
    var name = prompt("Agregar Nombre").toUpperCase();
    if(name == ""){ alert("Falta Ingresar Nombre");}
  }while(name=="");

do{
      var lastName = prompt("Agregar Apellido").toUpperCase();
      if(lastName == ""){ alert("Falta Ingresar Apellido");}
  }while(lastName=="");

  do{
        var dni = prompt("Agregar DNI");
        if(dni.length!= 8 || dni.match(/[^0-9]/g)){
          alert ("Valor Incorrecto. Ingrese nuevo valor.");
        }
  }while(dni.length!= 8 || dni.match(/[^0-9]/g));

  do{
      var adress = prompt("Ingrese su Dirección");
      if(adress == ""){ alert("Falta Ingresar Direccion");}
    }while(adress=="");

    document.getElementById("name").innerHTML = name;
    document.getElementById("lastName").innerHTML = lastName;
    document.getElementById("dni").innerHTML = dni;
    document.getElementById("adress").innerHTML = adress;
