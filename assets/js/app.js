var body = document.getElementsByTagName('BODY')[0];
var encabezado = document.createElement("header");

var div = document.createElement("div");
div.setAttribute("id","cabecera");
encabezado.appendChild(div);
body.appendChild(encabezado);


for(var i=0;i<7;i++){
  var contenedor= document.getElementById("cabecera");
  var div = document.createElement("div");
  contenedor.appendChild(div);
if (i==0) {
  div.setAttribute("id","logo");
  var img= document.createElement("img");
  img.setAttribute("src","assets/image/Icono.ico");
  img.setAttribute("class","logo");
  div.appendChild(img);
}else if (i==1) {
  div.setAttribute("id","raya");
}else if (i==2) {
  div.setAttribute("id","img-cont");
      var img= document.createElement("img");
      img.setAttribute("src","assets/image/lab.jpg");
      img.setAttribute("class","img");
      div.appendChild(img);
}else if (i==3) {
  div.setAttribute("class","redes");
      var spanT= document.createElement("span");
      spanT.setAttribute("class","icon-twitter");

      var spanF= document.createElement("span");
      spanF.setAttribute("class","icon-facebook");
      div.appendChild(spanT);
      div.appendChild(spanF);
}else if (i==4) {
  div.setAttribute("id","buscar");
      var input= document.createElement("input");
      input.setAttribute("placeholder","Edit");
      var spanL= document.createElement("span");
      spanL.setAttribute("class","icon-bubble");
      div.appendChild(input);
      div.appendChild(spanL);
}else if (i==5) {
  div.setAttribute("id","num");
  div.innerText= 5 ;
}else if (i==6) {
  div.setAttribute("id","autor");
      var img= document.createElement("img");
      img.setAttribute("src","assets/image/11.png");
      img.setAttribute("class","autor");
      div.appendChild(img);
}
}

var contenidoPag = document.createElement("section");
var contenido1 = document.createElement("div");
contenido1.setAttribute("id","contAutor");
var contenido2 = document.createElement("div");
contenido2.setAttribute("id","Articulo");

contenidoPag.appendChild(contenido1);
contenidoPag.appendChild(contenido2);
body.appendChild(contenidoPag);

for(var i=0;i<3;i++){
  var articulo= document.getElementById("contAutor");

  var divAutor = document.createElement("div");
  articulo.appendChild(divAutor);
  if (i==0) {
    divAutor.setAttribute("id","autorCont");
    var img= document.createElement("img");
    img.setAttribute("src","assets/image/11.png");
    img.setAttribute("class","autorCont");
    divAutor.appendChild(img);
  }else if (i==1) {
        divAutor.setAttribute("id","Info");
    for(var a=0;a<3;a++){
      var mensaje= document.getElementById("Info");
      var tex= document.createElement("span");
      tex.setAttribute("class","text-autor");
      mensaje.appendChild(tex);
      if (a==0) {
        tex.innerText= "Belen Recabal";
        tex.setAttribute("id","name");
      }  else if (a==1) {
        tex.innerText= "Teaching Assistant at Laboratoria. Trabajando para ver a más mujeres en el mundo de la programación.";
        tex.setAttribute("id","text1");
      }else if (a==2) {
          tex.innerText="Mar 21 - 6 min read";
          tex.setAttribute("id","text2");
          }
  }
}
}

  var texto= document.getElementById("Articulo");
  var textH1= document.createElement("h1");
  var textP= document.createElement("p");

    textH1.innerText="Hazlo con estilo:Tipografías, iconos y sprite";
    textP.innerText="Te imaginas el mundo sin tipos de letras, tamaños, colores, o sin iconos, nada, nada sería iguaaaaaal!!!! Pero gracias a muchos desarrolladores y diseñadores, hoy contamos con una inimaginable gama de fuentes para nuestros desarrollos web, pero la pregunta que nos hacemos es, ¿existen reglas, hay una mejor forma de hacerlo, no sé que tipografía usar? Tengo muchas preguntas y pocas respuestas!!";

  texto.appendChild(textH1);
  texto.appendChild(textP);

  var footer = document.createElement("footer");
  footer.setAttribute("id","final");

  body.appendChild(footer);

for(var i=0;i<2;i++){
  var footer=document.getElementById("final");
  var span = document.createElement("span");
  span.setAttribute("class","icon");
  footer.appendChild(span);
  if (i==0) {
    span.classList.add("icon-heart");
  } else if (i==1) {
      span.classList.add("icon-bubble2");
    }

}


      var divF = document.createElement("div");
      divF.setAttribute("class","iconFinal");
      footer.appendChild(divF);
      for(var a=0;a<3;a++){
        var span = document.createElement("span");
        span.setAttribute("class","iconFinales");
        span.classList.add("red");
        divF.appendChild(span);
        if (a==0) {
        span.classList.add("icon-twitter");
      }else if (a==1) {
            span.classList.add("icon-facebook");
          }else if (a==2) {
              span.classList.add("icon-bookmark");
        }
      }
      var divRaya = document.createElement("div");
      var divTexFin = document.createElement("div");
      divRaya .setAttribute("class","raya");
      divTexFin.setAttribute("class","texFinal");
      footer.appendChild(divRaya);
      footer.appendChild(divTexFin);

      for (var i = 0; i < 2; i++) {
        var spanTex = document.createElement("span");
        divTexFin.appendChild(spanTex );

        if (i==0) {
              spanTex.setAttribute("class","green");
              spanTex.innerText="Next story";
            }else {
              spanTex.setAttribute("class","textFinal");
              spanTex.innerText="Describiendo el flujo de trabajo";
            }
      }
