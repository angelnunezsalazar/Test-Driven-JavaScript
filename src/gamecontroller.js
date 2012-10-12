/*global Game:false*/
function GameController(attributes) {
	this.init(attributes);
}

GameController.prototype = {
	init: function(attributes) {
		this.wordInput = attributes.wordInput;
		this.wordForm = attributes.wordForm;
		this.wordOutput = attributes.wordOutput;
		this.buttonList = attributes.buttonList;
		this.wordForm.submit($.proxy(this.onFormSubmit, this));
	},
	onFormSubmit: function(e) {
		e.preventDefault();
		this.game=new Game(this.wordInput.val());
		this.wordOutput.html(this.game.formatedSecretWord);
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
		this.game.tryLetter( letter);
		this.wordOutput.html(this.game.formatedSecretWord);
	}
};