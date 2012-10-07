describe("game", function() {
	var wordInput;
	var acceptButton;
	var wordOutput;
	var game;

	beforeEach(function() {
		wordInput = $('<input>');
		acceptButton = $('<button>');
		wordOutput = $('<div>');
		game = new Game({
			wordInput: wordInput,
			acceptButton: acceptButton,
			wordOutput: wordOutput
		});
	});

	it("should format the secret word with dashes", function() {
		var word = game.formatSecretWord('gato');

		word.should.equal('____');
	});

	it("should show the secret word", function() {
		wordInput.val('a');
		acceptButton.click();

		wordOutput.html().should.equal('_');
	});
});