function Game(attributes) {
	this.initialSequence = attributes.initialSequence;
	this.buttonList = attributes.buttonList;
	this.loadSecretWord();
}

Game.prototype = {
	loadSecretWord: function() {
		var self = this;
		$.getJSON('/secretword', function(data) {
			self.secretWord = data.word;
			self.currentSequence = self.getInitialSequence(data.word);
			self.showSequence();
			self.createButtons();
		});
	},
	getInitialSequence: function(secretWord) {
		var sequence = '';
		for(var i = 0; i < secretWord.length; i++) {
			sequence += '_';
		}
		return sequence;
	},
	createButtons: function() {
		for(var i = 97; i <= 122; i++) {
			var button = '<button>' + String.fromCharCode(i) + '</button>';
			this.buttonList.append(button);
		}
		var self = this;
		$('button',this.buttonList).click(function(e) {
			self.tryLetter($(e.target).html());
		});
	},
	tryLetter: function(letter) {
		for(var index = 0; index < this.secretWord.length; index++) {
			if(letter === this.secretWord[index]) {
				this.updateCurrentSequence(index, letter);
				this.showSequence();
			}
		}
	},
	updateCurrentSequence: function(index, letter) {
		this.currentSequence = this.currentSequence.substr(0, index) + letter + this.currentSequence.substr(index + 1);
	},
	showSequence: function() {
		this.initialSequence.html(this.currentSequence);
	}
};