function Game(){}function GameController(e){this.init(e)}function Game(){}function GameController(e){this.init(e)}function Game(){}function GameController(e){this.init(e)}function Game(){}function GameController(e){this.init(e)}function Game(){}function GameController(e){this.init(e)}function Game(){}function GameController(e){this.init(e)}Game.prototype={start:function(e){this.secretWord=e,this.formatedSecretWord=this.formatSecretWord(this.secretWord),this.failedAttempts=0},tryLetter:function(e){this.updateFormatedSecretWord(e),this.letterMatches(e)||(this.failedAttempts=this.failedAttempts+1)},getFailedAttempts:function(){return this.failedAttempts},formatSecretWord:function(e){var t="";for(var n=0;n<e.length;n++)t+="_";return t},updateFormatedSecretWord:function(e){for(var t=0;t<this.secretWord.length;t++)e===this.secretWord[t]&&(this.formatedSecretWord=this.formatedSecretWord.substr(0,t)+e+this.formatedSecretWord.substr(t+1))},letterMatches:function(e){return this.secretWord.indexOf(e)!=-1}},GameController.prototype={init:function(e){this.game=new Game,this.wordOutput=e.wordOutput,this.buttonList=e.buttonList,this.failedAttemptsOutput=e.failedAttemptsOutput},start:function(){var e=this;$.getJSON("/secretword",function(t){e.game.start(t.secretword),e.wordOutput.html(e.game.formatedSecretWord),e.createButtons(),e.failedAttemptsOutput.html(e.game.failedAttempts)})},createButtons:function(){for(var e=97;e<=122;e++){var t=$("<button>"+String.fromCharCode(e)+"</button>");t.click($.proxy(this.onButtonClick,this)),this.buttonList.append(t)}},onButtonClick:function(e){var t=$(e.target).html();this.tryLetter(t),$(e.target).remove()},tryLetter:function(e){this.game.tryLetter(e),this.wordOutput.html(this.game.formatedSecretWord),this.failedAttemptsOutput.html(this.game.getFailedAttempts())}},Game.prototype={start:function(e){this.secretWord=e,this.formatedSecretWord=this.formatSecretWord(this.secretWord),this.failedAttempts=0},tryLetter:function(e){this.updateFormatedSecretWord(e),this.letterMatches(e)||(this.failedAttempts=this.failedAttempts+1)},getFailedAttempts:function(){return this.failedAttempts},formatSecretWord:function(e){var t="";for(var n=0;n<e.length;n++)t+="_";return t},updateFormatedSecretWord:function(e){for(var t=0;t<this.secretWord.length;t++)e===this.secretWord[t]&&(this.formatedSecretWord=this.formatedSecretWord.substr(0,t)+e+this.formatedSecretWord.substr(t+1))},letterMatches:function(e){return this.secretWord.indexOf(e)!=-1}},GameController.prototype={init:function(e){this.game=new Game,this.wordOutput=e.wordOutput,this.buttonList=e.buttonList,this.failedAttemptsOutput=e.failedAttemptsOutput},start:function(){var e=this;$.getJSON("/secretword",function(t){e.game.start(t.secretword),e.wordOutput.html(e.game.formatedSecretWord),e.createButtons(),e.failedAttemptsOutput.html(e.game.failedAttempts)})},createButtons:function(){for(var e=97;e<=122;e++){var t=$("<button>"+String.fromCharCode(e)+"</button>");t.click($.proxy(this.onButtonClick,this)),this.buttonList.append(t)}},onButtonClick:function(e){var t=$(e.target).html();this.tryLetter(t),$(e.target).remove()},tryLetter:function(e){this.game.tryLetter(e),this.wordOutput.html(this.game.formatedSecretWord),this.failedAttemptsOutput.html(this.game.getFailedAttempts())}},Game.prototype={start:function(e){this.secretWord=e,this.formatedSecretWord=this.formatSecretWord(this.secretWord),this.failedAttempts=0},tryLetter:function(e){this.updateFormatedSecretWord(e),this.letterMatches(e)||(this.failedAttempts=this.failedAttempts+1)},getFailedAttempts:function(){return this.failedAttempts},formatSecretWord:function(e){var t="";for(var n=0;n<e.length;n++)t+="_";return t},updateFormatedSecretWord:function(e){for(var t=0;t<this.secretWord.length;t++)e===this.secretWord[t]&&(this.formatedSecretWord=this.formatedSecretWord.substr(0,t)+e+this.formatedSecretWord.substr(t+1))},letterMatches:function(e){return this.secretWord.indexOf(e)!=-1}},GameController.prototype={init:function(e){this.game=new Game,this.wordOutput=e.wordOutput,this.buttonList=e.buttonList,this.failedAttemptsOutput=e.failedAttemptsOutput},start:function(){var e=this;$.getJSON("/secretword",function(t){e.game.start(t.secretword),e.wordOutput.html(e.game.formatedSecretWord),e.createButtons(),e.failedAttemptsOutput.html(e.game.failedAttempts)})},createButtons:function(){for(var e=97;e<=122;e++){var t=$("<button>"+String.fromCharCode(e)+"</button>");t.click($.proxy(this.onButtonClick,this)),this.buttonList.append(t)}},onButtonClick:function(e){var t=$(e.target).html();this.tryLetter(t),$(e.target).remove()},tryLetter:function(e){this.game.tryLetter(e),this.wordOutput.html(this.game.formatedSecretWord),this.failedAttemptsOutput.html(this.game.getFailedAttempts())}},Game.prototype={start:function(e){this.secretWord=e,this.formatedSecretWord=this.formatSecretWord(this.secretWord),this.failedAttempts=0},tryLetter:function(e){this.updateFormatedSecretWord(e),this.letterMatches(e)||(this.failedAttempts=this.failedAttempts+1)},getFailedAttempts:function(){return this.failedAttempts},formatSecretWord:function(e){var t="";for(var n=0;n<e.length;n++)t+="_";return t},updateFormatedSecretWord:function(e){for(var t=0;t<this.secretWord.length;t++)e===this.secretWord[t]&&(this.formatedSecretWord=this.formatedSecretWord.substr(0,t)+e+this.formatedSecretWord.substr(t+1))},letterMatches:function(e){return this.secretWord.indexOf(e)!=-1}},GameController.prototype={init:function(e){this.game=new Game,this.wordOutput=e.wordOutput,this.buttonList=e.buttonList,this.failedAttemptsOutput=e.failedAttemptsOutput},start:function(){var e=this;$.getJSON("/secretword",function(t){e.game.start(t.secretword),e.wordOutput.html(e.game.formatedSecretWord),e.createButtons(),e.failedAttemptsOutput.html(e.game.failedAttempts)})},createButtons:function(){for(var e=97;e<=122;e++){var t=$("<button>"+String.fromCharCode(e)+"</button>");t.click($.proxy(this.onButtonClick,this)),this.buttonList.append(t)}},onButtonClick:function(e){var t=$(e.target).html();this.tryLetter(t),$(e.target).remove()},tryLetter:function(e){this.game.tryLetter(e),this.wordOutput.html(this.game.formatedSecretWord),this.failedAttemptsOutput.html(this.game.getFailedAttempts())}},Game.prototype={start:function(e){this.secretWord=e,this.formatedSecretWord=this.formatSecretWord(this.secretWord),this.failedAttempts=0},tryLetter:function(e){this.updateFormatedSecretWord(e),this.letterMatches(e)||(this.failedAttempts=this.failedAttempts+1)},getFailedAttempts:function(){return this.failedAttempts},formatSecretWord:function(e){var t="";for(var n=0;n<e.length;n++)t+="_";return t},updateFormatedSecretWord:function(e){for(var t=0;t<this.secretWord.length;t++)e===this.secretWord[t]&&(this.formatedSecretWord=this.formatedSecretWord.substr(0,t)+e+this.formatedSecretWord.substr(t+1))},letterMatches:function(e){return this.secretWord.indexOf(e)!=-1}},GameController.prototype={init:function(e){this.game=new Game,this.wordOutput=e.wordOutput,this.buttonList=e.buttonList,this.failedAttemptsOutput=e.failedAttemptsOutput},start:function(){var e=this;$.getJSON("/secretword",function(t){e.game.start(t.secretword),e.wordOutput.html(e.game.formatedSecretWord),e.createButtons(),e.failedAttemptsOutput.html(e.game.failedAttempts)})},createButtons:function(){for(var e=97;e<=122;e++){var t=$("<button>"+String.fromCharCode(e)+"</button>");t.click($.proxy(this.onButtonClick,this)),this.buttonList.append(t)}},onButtonClick:function(e){var t=$(e.target).html();this.tryLetter(t),$(e.target).remove()},tryLetter:function(e){this.game.tryLetter(e),this.wordOutput.html(this.game.formatedSecretWord),this.failedAttemptsOutput.html(this.game.getFailedAttempts())}},Game.prototype={start:function(e){this.secretWord=e,this.formatedSecretWord=this.formatSecretWord(this.secretWord),this.failedAttempts=0},tryLetter:function(e){this.updateFormatedSecretWord(e),this.letterMatches(e)||(this.failedAttempts=this.failedAttempts+1)},getFailedAttempts:function(){return this.failedAttempts},formatSecretWord:function(e){var t="";for(var n=0;n<e.length;n++)t+="_";return t},updateFormatedSecretWord:function(e){for(var t=0;t<this.secretWord.length;t++)e===this.secretWord[t]&&(this.formatedSecretWord=this.formatedSecretWord.substr(0,t)+e+this.formatedSecretWord.substr(t+1))},letterMatches:function(e){return this.secretWord.indexOf(e)!=-1}},GameController.prototype={init:function(e){this.game=new Game,this.wordOutput=e.wordOutput,this.buttonList=e.buttonList,this.failedAttemptsOutput=e.failedAttemptsOutput},start:function(){var e=this;$.getJSON("/secretword",function(t){e.game.start(t.secretword),e.wordOutput.html(e.game.formatedSecretWord),e.createButtons(),e.failedAttemptsOutput.html(e.game.failedAttempts)})},createButtons:function(){for(var e=97;e<=122;e++){var t=$("<button>"+String.fromCharCode(e)+"</button>");t.click($.proxy(this.onButtonClick,this)),this.buttonList.append(t)}},onButtonClick:function(e){var t=$(e.target).html();this.tryLetter(t),$(e.target).remove()},tryLetter:function(e){this.game.tryLetter(e),this.wordOutput.html(this.game.formatedSecretWord),this.failedAttemptsOutput.html(this.game.getFailedAttempts())}};
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
		$.getJSON('/secretword', function(data) {
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