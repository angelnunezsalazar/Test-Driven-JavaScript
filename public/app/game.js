function Game () {

}

Game.prototype={
	start:function(secretWord) {
		this.secretWord=secretWord;
		this.formatedSecretWord = this.formatSecretWord(this.secretWord);
		this.failedAttempts=0;
	},
	tryLetter: function(letter) {
		this.updateFormatedSecretWord(letter);
		if (!this.letterMatches(letter)) {
			this.failedAttempts=this.failedAttempts+1;
		}
	},
	getFailedAttempts:function() {
		return this.failedAttempts;
	},
	formatSecretWord: function(word) {
		var formatedWord = '';
		for(var i = 0; i < word.length; i++) {
			formatedWord += '_';
		}
		return formatedWord;
	},
	updateFormatedSecretWord:function(letter) {
		for(var index = 0; index < this.secretWord.length; index++) {
			if(letter === this.secretWord[index]) {
				this.formatedSecretWord = this.formatedSecretWord.substr(0, index) +
																	letter +
																	this.formatedSecretWord.substr(index + 1);
			}
		}
	},
	letterMatches:function(letter) {
		return this.secretWord.indexOf(letter)!=-1;
	}
};