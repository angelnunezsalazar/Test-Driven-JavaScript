describe("Features", function() {
	it("should let enter the secret word", function() {
		var wordInput = $('<input>');
		var acceptButton = $('<button>');
		var wordOutput = $('<div>');
		var game = new Game({
			wordInput: wordInput,
			acceptButton: acceptButton,
			wordOutput: wordOutput
		});

		wordInput.val('cocodrillo');
		acceptButton.click();
		wordOutput.html().should.equal('__________');
	});
});