/*global Game:false*/
function GameController(attributes) {
	this.init(attributes);
}

GameController.prototype = {
	init: function(attributes) {
		this.game=new Game();
		this.wordOutput = attributes.wordOutput;
		this.buttonList = attributes.buttonList;
		this.failedAttemptsOutput= attributes.failedAttemptsOutput;
	},
	start:function() {
		var self=this;
		$.getJSON('http://localhost:8010/secretword', function(data) {
			self.game.start(data.secretword);
			self.wordOutput.html(self.game.formatedSecretWord);
			self.createButtons();
			self.failedAttemptsOutput.html(self.game.failedAttempts);
		});
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
		$(e.target).remove();
	},
	tryLetter: function(letter) {
		this.game.tryLetter(letter);
		this.wordOutput.html(this.game.formatedSecretWord);
		this.failedAttemptsOutput.html(this.game.getFailedAttempts());
	}
};