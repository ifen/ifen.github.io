window.onload = hacking;
function hacking(){
  var c = document.getElementById("locoalien");
  c.height = window.innerHeight;  
  c.width = window.innerWidth;    

  
  var letraTam=12; //Tamaño de la letras por pixel
  var columnas=c.width/letraTam; //El ancho dividido por el tamano que tendra las letras
  

  var Texto="0"; //El testo que aparecera en pantalla
  Texto=Texto.split("");//La función split() permite dividir una cadena de caracteres (string) en varios bloques y crear un array con estos
  var Texto2="1";
  Texto2=Texto2.split("");

  var letras=[];
  for(var i=0; i<columnas;i++){
    letras[i]=1;
  }
  contexto= c.getContext('2d');

  function dibujar(){
    contexto.fillStyle="rgba(0,0,0,0.05)";
    contexto.fillRect(0,0,c.width,c.height);

    contexto.fillStyle= "#0f0";
    contexto.font= letraTam+"px arial";

    for(var i=0;i<letras.length;i++){
      text=Texto; 
      text2=Texto2;
      if(i%2==1){contexto.fillText(text,i*letraTam, letras[i]*letraTam);
      }else{
        contexto.fillText(text2,i*letraTam, letras[i]*letraTam);
      }

      if(letras[i]*letraTam > c.height && Math.random()>0.975){
        letras[i]=0;
      }
      letras[i]++;

    }

  }
  setInterval(dibujar,120);

}