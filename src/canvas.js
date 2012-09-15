var Canvas=function () {

   var ctx = cargaContextoCanvas('canvasahorcado');

   function cargaContextoCanvas(idCanvas) {
      var elemento = document.getElementById(idCanvas);
      if (elemento && elemento.getContext) {
         var contexto = elemento.getContext('2d');
         if (contexto) {
            return contexto;
         }
      }
      return false;
   }

   function borrarCanvas(anchura, altura) {
      ctx.clearRect(0, 0, anchura, anchura);
   }

   function dibujaHorca() {
      ctx.fillStyle = '#462501';
      ctx.fillRect(64, 9, 26, 237);
      ctx.fillRect(175, 193, 26, 53);
      ctx.fillRect(64, 193, 136, 15);
      ctx.fillRect(64, 9, 115, 11);
      ctx.beginPath();
      ctx.moveTo(64, 65);
      ctx.lineTo(64, 80);
      ctx.lineTo(133, 11);
      ctx.lineTo(118, 11);
      ctx.fill();
   }

   function dibujaCabeza() {
      ctx.beginPath();
      ctx.fillStyle = '#f2d666';
      ctx.fillRect(172, 12, 4, 40);
      ctx.fillStyle = '#1f3e18';
      ctx.arc(177, 67, 20, 0, 2 * Math.PI, false);
      ctx.fill();
   }

   function dibujaCuerpo() {
      ctx.beginPath();
      ctx.moveTo(171, 82);
      ctx.lineTo(168, 119);
      ctx.lineTo(162, 147);
      ctx.lineTo(189, 149);
      ctx.lineTo(185, 111);
      ctx.lineTo(183, 83);
      ctx.fill();
   }

   function dibujaBrazoIzq() {
      ctx.beginPath();
      ctx.moveTo(173, 102);
      ctx.lineTo(140, 128);
      ctx.lineTo(155, 133);
      ctx.lineTo(178, 114);
      ctx.fill();
   }

   function dibujaBrazoDer() {
      ctx.beginPath();
      ctx.moveTo(180, 99);
      ctx.lineTo(222, 121);
      ctx.lineTo(209, 133);
      ctx.lineTo(183, 110);
      ctx.fill();
   }

   function dibujaPiernaIzq() {
      ctx.beginPath();
      ctx.moveTo(166, 142);
      ctx.lineTo(139, 175);
      ctx.lineTo(164, 178);
      ctx.lineTo(175, 144);
      ctx.fill();
   }

   function dibujaPiernaDer() {
      ctx.beginPath();
      ctx.moveTo(178, 145);
      ctx.lineTo(193, 178);
      ctx.lineTo(212, 170);
      ctx.lineTo(188, 142);
      ctx.fill();
   }

   this.dibujaAhorado=function (numerrores) {
      if (ctx) {
         dibujaHorca();
         if (numerrores > 0) {
            dibujaCabeza();
         }
         ctx.fillStyle = '#1f3e18';
         if (numerrores > 1) {
            dibujaCuerpo();
         }
         if (numerrores > 2) {
            dibujaBrazoIzq();
         }
         if (numerrores > 3) {
            dibujaBrazoDer();
         }
         if (numerrores > 4) {
            dibujaPiernaIzq();
         }
         if (numerrores > 5) {
            dibujaPiernaDer();
         }

      }
   };
};