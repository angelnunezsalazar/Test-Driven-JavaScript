/*global GameController:false, sinon:false*/

// prevent to play the same letter twice
// show when someone wins
// show when someone loses
describe("Features", function() {
	var wordInput;
	var wordForm;
	var wordOutput;
	var buttonList;
	var failedAttemptsOutput;
	var gameController;

	var server;

	beforeEach(function() {
		wordInput = $('<input>');
		wordForm = $('<form>');
		wordOutput = $('<div>');
		buttonList=$('<div>');
		failedAttemptsOutput=$('<span>');
		gameController = new GameController({
			wordInput: wordInput,
			wordForm: wordForm,
			wordOutput: wordOutput,
			buttonList: buttonList,
			failedAttemptsOutput:failedAttemptsOutput
		});
		server = sinon.fakeServer.create();
	});

	function playWith (secretWord) {
		server.respondWith('{"secretword":"'+secretWord+'"}');
		
		gameController.start();
		server.respond();
	}

	function tryLetter (letter) {
		$('button:contains("'+letter+'")', buttonList).click();
	}

	it("should let enter the secret word", function() {
		playWith('cocodrillo');

		wordOutput.html().should.equal('__________');
	});

	it("should be able to play", function() {
		playWith('cocodrillo');

		tryLetter('o');
		tryLetter('d');

		wordOutput.html().should.equal('_o_od____o');
	});

	it("should show the number of failed attempts",function() {
		playWith('cocodrillo');

		tryLetter('a');
		tryLetter('b');

		failedAttemptsOutput.html().should.equal('2');
	});

	it("should prevent to play the same letter twice", function(){
		playWith("cocodrillo");

		tryLetter("a");
		tryLetter("a");

		failedAttemptsOutput.html().should.equal('1');
	});
});