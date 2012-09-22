var Controller = function() {
   this.init();
};

Controller.prototype = {
   init: function() {
      var hiddenWord = this.getRandomWord();
      this.game = new Game(hiddenWord);
      this.canvas = new Canvas();

      this.createButtons();
      $('.letter').click($.proxy(this.onButtonClick, this));
   },

   getRandomWord: function() {
      var palabras = ['ahorcado', 'lavadora', 'invierno', 'plastico', 'ordenador', 'colador', 'guantera', 'alimentador', 'calculos'];
      var aleat = Math.random() * palabras.length;
      var index = Math.floor(aleat);
      return palabras[index];
   },

   createButtons: function() {
      var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      for (i = 0; i < letters.length; i++) {
         var button = $('<button class="letter">' + letters[i] + '</button>');
         $("#letters").append(button);
      }
   },

   onButtonClick : function(event) {
      var button = event.target;
      var letter = $(button).text().toLowerCase();
      this.playLetter(letter);
      $(button).attr('disabled', 'disabled');
   },

   playLetter : function(letter) {
      this.game.play(letter);
      if (this.game.hit()) {
         this.showSecretWord();
         if (this.game.hasWinner()) {
            this.showDialog('Has Ganado!!', 'Felicidades! has adivinado la palabra!!');
         }
      } else {
         this.canvas.dibujaAhorado(this.game.getNumFallos());
         if (this.game.hasLosser()) {
            this.showDialog('Has Perdido!!', 'Lo lamento!! la palabra era: ' + this.game.getSecretWord() + '</div>');
         }
      }
   },

   showSecretWord : function() {
      var texto = this.game.getFormatedSecretWord();
      $("#secret-word").html(texto);
   },

   showDialog : function(title, message) {
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
   },

   start : function() {
      this.canvas.dibujaAhorado(0);
      this.showSecretWord();
   }
};