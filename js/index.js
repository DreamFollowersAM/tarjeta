var tm = "";

var theme = function (tema) {
  tm = tema;
  var mr = document.getElementsByClassName("mr");
  var im = document.getElementsByClassName("im");

  for (var i = 0; i < mr.length; i++) {
    mr[i].src = "imagenes/marcos/" + tema + (i + 1) + ".png";
  }
  for (var u = 0; u < im.length; u++) {
    im[u].src = "imagenes/" + tema + (u + 1) + ".png";
  }

  switch(tema){
      case 'n':
        document.getElementById("tpg").innerHTML = '<option value="Snell Roundhand, cursive">Snell Roundhand, cursive</option>'+
            '<option value="URW Chancery L, cursive">URW Chancery L, cursive</option>';
      break;
      case 'm':
        document.getElementById("tpg").innerHTML = '<option value="Times New Roman, Times, serif">Times New Roman, Times, serif</option>'+
            '<option value="Arial, Helvetica, sans-serif">Arial, Helvetica, sans-serif</option>';
      break;
      case 'p':
        document.getElementById("tpg").innerHTML = '<option value="Arial Narrow, sans-serif">Arial Narrow, sans-serif</option>'+
            '<option value="Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif">Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif</option>';
      break;
  }
};

var marco = function (nomFoto) {
  document.getElementById("bgimg").style =
    'background-image: url("imagenes/marcos/' + tm + nomFoto + '.png")';
  document.getElementById("bgimg").style.backgroundSize = "cover";
};

var imagen = function (nomFoto) {
  document.getElementById("immg").src = "imagenes/" + tm + nomFoto + ".png";
};

var clr = function () {
  document.getElementById("bgclr").style.backgroundColor =
    document.getElementById("color").value;
};

var clrt = function () {
  var txt = document.getElementsByClassName("txt");
  for (var i = 0; i < txt.length; i++) {
    txt[i].style.color = document.getElementById("colort").value;
  }
};

var text = function () {
  document.getElementById("destr").innerHTML =
    document.getElementById("dest").value;
  document.getElementById("ttlr").innerHTML =
    document.getElementById("ttl").value;
  document.getElementById("mssr").innerHTML =
    document.getElementById("mss").value;
};

var tmt = function () {
  document.getElementById("ttlr").style.fontSize =
    document.getElementById("tmt").value + "px";
  document.getElementById("destr").style.fontSize =
    document.getElementById("tmtd").value + "px";
  document.getElementById("mssr").style.fontSize =
    document.getElementById("tmtm").value + "px";
};

var tpgr = function () {
    document.getElementById("ttlr").style.fontFamily =
    document.getElementById("tpg").value;
    document.getElementById("destr").style.fontFamily =
    document.getElementById("tpg").value;
    document.getElementById("mssr").style.fontFamily =
    document.getElementById("tpg").value;
}

var imp = function ()
{
    var vista = document.getElementById("imprimirv").innerHTML; 
    localStorage.setItem('vista', vista);

    
    window.open("imprimir.html", "vista", "width=533, height=800, scrollbars=NO")
}