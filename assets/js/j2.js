var nommbre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var dni = document.getElementById("dni");
var direccion = document.getElementById("direccion");
var mostrar = document.getElementById("add-ficha");

mostrar.onclick = function(){

  document.getElementById("name").innerHTML = nombre.value;
  document.getElementById("lastName").innerHTML = apellido.value;
  document.getElementById("id").innerHTML = dni.value;
  document.getElementById("adress").innerHTML = direccion.value;

}
