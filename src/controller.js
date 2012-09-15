var Controller = function() {

   var game = null;
   var canvas = null;

   var init = function() {
      var hiddenWord = getRandomWord();
      game = new Game(hiddenWord);
      canvas = new Canvas();

      createButtons();
      $('.botonletra').click(onButtonClick);
   };

   var getRandomWord=function() {
      var palabras = ['ahorcado', 'lavadora', 'invierno', 'plastico', 'ordenador', 'colador', 'guantera', 'alimentador', 'calculos'];
      var aleat = Math.random() * palabras.length;
      var index = Math.floor(aleat);
      return palabras[index];
   };

   var createButtons = function() {
      var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      for (i = 0; i < letters.length; i++) {
         var button= $('<button class="botonletra">' + letters[i] +'</button>')
         $("#botonesletras").append(button);
      }
   };

   var onButtonClick=function(event) {
      var button= event.target;
      var letter = $(button).text().toLowerCase();
      playLetter(letter);
      $(button).attr('disabled','disabled');
   };

   var playLetter = function(letter) {
      game.play(letter);
      if (game.hit()) {
         showHiddenWord();
         if (game.hasWinner()) {
            showDialog('Has Ganado!!', 'Felicidades! has adivinado la palabra!!');
         }
      } else {
         canvas.dibujaAhorado(game.getNumFallos());
         if (game.hasLosser()) {
            showDialog('Has Perdido!!', 'Lo lamento!! la palabra era: ' + game.getSecretWord() + '</div>');
         }
      }
   };

   var showHiddenWord = function() {
      var texto = game.getFormatedSecretWord();
      $("#letras").html(texto);
   };

   var showDialog = function(title, message) {
      var caja = $('<div class="dialogletra" title="' + title + '">' + message + '</div>');
      caja.dialog({
         modal: true,
         width: 600,
         buttons: {
            "Ok": function() {
               $(this).dialog("close");
            }
         }
      });
   };

   this.start = function() {
      canvas.dibujaAhorado(0);
      showHiddenWord();
   };

   init();
};