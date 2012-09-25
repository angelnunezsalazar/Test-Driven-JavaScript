var Controller = function(attributes) {
   this.init(attributes);
};

Controller.prototype = {
   init: function(attributes) {
      this.secretWordTag=attributes.secretWordTag;
      this.lettersButtons=attributes.lettersButtons;
      this.messageTag=attributes.messageTag;
      this.failedTag=attributes.failedTag;
      this.createButtons();
      $('.letter',this.lettersButtons).click($.proxy(this.onButtonClick, this));

      var secretWord = this.getRandomWord();
      this.game = new Game(secretWord);
      this.canvas = new Canvas();
   },

   getRandomWord: function() {
      var palabras = ['ahorcado', 'lavadora', 'invierno', 'plastico', 'ordenador', 'colador', 'guantera', 'alimentador', 'calculos'];
      var aleat = Math.random() * palabras.length;
      var index = Math.floor(aleat);
      return palabras[index];
   },

   createButtons: function() {
      var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      for (var i = 0; i < letters.length; i++) {
         var button = $('<button id="'+letters[i]+'" class="letter">' + letters[i] + '</button>');
         this.lettersButtons.append(button);
      }
   },

   onButtonClick : function(event) {
      var button = event.target;
      var letter = $(button).text().toLowerCase();
      this.playLetter(letter);
      $(button).attr('disabled', 'disabled');
      $(button).off('click');
   },

   playLetter : function(letter) {
      this.game.play(letter);
      if (this.game.hit()) {
         this.showSecretWord();
         if (this.game.hasWinner()) {
            this.showMessage('You Win!!', 'Felicidades! has adivinado la palabra!!');
         }
      } else {
         this.failedTag.html(this.game.getNumFallos());
         this.canvas.dibujaAhorado(this.game.getNumFallos());
         if (this.game.hasLosser()) {
            this.showMessage('You Lose!!', 'Lo lamento!! la palabra era: ' + this.game.getSecretWord() + '</div>');
         }
      }
   },

   showSecretWord : function() {
      var texto = this.game.getFormatedSecretWord();
      this.secretWordTag.html(texto);
   },

   showMessage : function(title, message) {
      this.messageTag.html(message);
      this.messageTag.dialog({
         modal: true,
         title:title
      });
   },

   start : function() {
      this.canvas.dibujaAhorado(0);
      this.showSecretWord();
   }
};