(function () {
  document.getElementById("imprimir").innerHTML = localStorage.getItem("vista");

  var a;
  a = prompt("Ingrese el autor");

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = mm + "/" + dd + "/" + yyyy;

  document.getElementById("cred").innerHTML = "autor: "+ a +" | fecha de creacion: "+today;
  
  const music = new Audio("cancion/jazz.mp3");
    music.play();
    music.loop = true;
})();
