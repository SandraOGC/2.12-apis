"use strict";

var person = document.querySelector(".personaje");
var button = document.querySelector(".boton");
var list = document.querySelector(".lista");
var parrafo = document.querySelector(".Resultados");
// button.addEventListener("click", mostrar);

function mostrar() {
  fetch("https://swapi.co/api/people/?search=" + person.value)
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(respuesta2) {
      // console.log (respuesta2.results[0].eye_color);
      //return respuesta2.results;
      var resultado = respuesta2.results;
      for (var i = 0; i < resultado.length; i++) {
           
        list.innerHTML += "<li>" + resultado[i].name + "</li>";
        resultado[i].gender;
      }
    });
}
