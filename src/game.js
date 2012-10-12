function Game (secretWord) {
	this.secretWord=secretWord;
	this.formatedSecretWord = this.formatSecretWord(this.secretWord);
}

Game.prototype={
	formatSecretWord: function(secretWord) {
		var word = '';
		for(var i = 0; i < secretWord.length; i++) {
			word += '_';
		}
		return word;
	},
	tryLetter: function(letter) {
		for(var index = 0; index < this.secretWord.length; index++) {
			if(letter === this.secretWord[index]) {
				this.formatedSecretWord = this.formatedSecretWord.substr(0, index) +
																	letter +
																	this.formatedSecretWord.substr(index + 1);
			}
		}
	}
};