function Game(attributes) {
	this.init(attributes);
}

Game.prototype = {
	init: function(attributes) {
		this.wordInput = attributes.wordInput;
		this.acceptButton = attributes.acceptButton;
		this.wordOutput = attributes.wordOutput;
		this.acceptButton.click($.proxy(this.onAcceptButtonClick, this));
	},
	formatSecretWord: function(secretWord) {
		var word = '';
		for(var i = 0; i < secretWord.length; i++) {
			word += '_';
		}
		return word;
	},
	onAcceptButtonClick: function() {
		var secretWord = this.wordInput.val();
		var formatedSecretWord = this.formatSecretWord(secretWord);
		this.wordOutput.html(formatedSecretWord);
	}
};