var Game = function(secret_word) {

   var aciertos = [],
      numFallos = 0,
      hitPreviousPlay = false,

      esta = function(caracter, miarray) {
         for (var i = 0; i < miarray.length; i++) {
            if (caracter == miarray[i]) {
               return true;
            }
         }
         return false;
      };

   this.getNumFallos = function() {
      return numFallos;
   };

   this.getSecretWord=function() {
      return secret_word;
   }

   this.getFormatedSecretWord = function() {
      var texto = '';
      for (var i = 0; i < secret_word.length; i++) {
         var cActual = secret_word.charAt(i);
         if (esta(cActual, aciertos)) {
            texto += cActual;
         } else {
            texto += '_';
         }
      }
      return texto;
   };

   this.hasWinner = function() {
      for (var i = 0; i < secret_word.length; i++) {
         if (!esta(secret_word.charAt(i), aciertos)) return false;
      }
      return true;
   };

   this.hasLosser = function() {
      return numFallos == 6;
   };

   this.play = function(miletra) {
      if (secret_word.indexOf(miletra) != -1) {
         aciertos.push(miletra);
         hitPreviousPlay = true;
      } else {
         numFallos++;
         hitPreviousPlay = false;
      }
   };

   this.hit = function() {
      return hitPreviousPlay;
   };
};