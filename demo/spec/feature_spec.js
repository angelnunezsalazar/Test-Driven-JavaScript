describe("Features", function() {
	var wordInput;
	var wordForm;
	var wordOutput;
	var buttonList;
	var game;

	beforeEach(function() {
		wordInput = $('<input>');
		wordForm = $('<form>');
		wordOutput = $('<div>');
		buttonList=$('<div>');
		game = new Game({
			wordInput: wordInput,
			wordForm: wordForm,
			wordOutput: wordOutput,
			buttonList: buttonList
		});
	});

	it("should let enter the secret word", function() {
		wordInput.val('cocodrillo');
		wordForm.submit();

		wordOutput.html().should.equal('__________');
	});

	it("should be able to play", function() {
		wordInput.val('cocodrillo');
		wordForm.submit();

		$('button:contains("o")', buttonList).click();
		$('button:contains("d")', buttonList).click();

		wordOutput.html().should.equal('_o_od____o');
	});
});