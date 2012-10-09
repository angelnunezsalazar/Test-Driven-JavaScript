function Game(attributes) {
	this.init(attributes);
}

Game.prototype = {
	init: function(attributes) {
		this.wordInput = attributes.wordInput;
		this.wordForm = attributes.wordForm;
		this.wordOutput = attributes.wordOutput;
		this.buttonList = attributes.buttonList;
		this.wordForm.submit($.proxy(this.onFormSubmit, this));
	},
	formatSecretWord: function(secretWord) {
		var word = '';
		for(var i = 0; i < secretWord.length; i++) {
			word += '_';
		}
		return word;
	},
	onFormSubmit: function(e) {
		e.preventDefault();
		this.secretWord = this.wordInput.val();
		this.formatedSecretWord = this.formatSecretWord(this.secretWord);
		this.wordOutput.html(this.formatedSecretWord);
		this.createButtons();
	},
	createButtons: function() {
		for(var i = 97; i <= 122; i++) {
			var button = $('<button>' + String.fromCharCode(i) + '</button>');
			button.click($.proxy(this.onButtonClick,this));
			this.buttonList.append(button);
		}
	},
	onButtonClick:function(e) {
		var letter=$(e.target).html();
		this.tryLetter(letter);
	},
	tryLetter: function(letter) {
		for(var index = 0; index < this.secretWord.length; index++) {
			if(letter == this.secretWord[index]) {
				this.formatedSecretWord = this.formatedSecretWord.substr(0, index) +
													letter +
													this.formatedSecretWord.substr(index + 1);
				this.wordOutput.html(this.formatedSecretWord);
			}
		}
	}
};