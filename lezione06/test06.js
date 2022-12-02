var i = 0;
const BINARIO = document.getElementById('binario');
const IMG = document.getElementById('img');
setInterval(prova(), 10000);
    
    
function prova() {
    i += 5;
   IMG.style.left = i + 'px';
   console.log(IMG.style.left);

   if (IMG.style.left == '600px') {
    
   }
   //console.log('prova' + i++)
}
