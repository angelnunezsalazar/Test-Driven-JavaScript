/*global GameController:false*/
describe("Features", function() {
	var wordInput;
	var wordForm;
	var wordOutput;
	var buttonList;
	var failedAttemptsOutput;
	var gameController;

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
	});

	function playWith (word) {
		wordInput.val(word);
		wordForm.submit();
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
});