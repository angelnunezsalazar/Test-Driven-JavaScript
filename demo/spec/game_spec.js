describe("game", function() {
	var wordInput;
	var wordForm;
	var wordOutput;
	var buttonList;
	var game;

	beforeEach(function() {
		wordInput = $('<input>');
		wordForm = $('<form>');
		wordOutput = $('<div>');
		buttonList = $('<div>');
		game = new Game({
			wordInput: wordInput,
			wordForm: wordForm,
			wordOutput: wordOutput,
			buttonList: buttonList
		});
	});

	function playWith(secretWord) {
		wordInput.val(secretWord);
		wordForm.submit();
	}

	it("should format the secret word with dashes", function() {
		var word = game.formatSecretWord('gato');

		word.should.equal('____');
	});

	it("should show the secret word", function() {
		wordInput.val('a');
		wordForm.submit();

		wordOutput.html().should.equal('_');
	});

	describe("create letter buttons", function() {
		beforeEach(function() {
			playWith('gato');
		});
		it("should show the letter a", function() {
			$('button:contains("a")', buttonList).should.have.length(1);
		});

		it("should show the letter z", function() {
			$('button:contains("z")', buttonList).should.have.length(1);
		});

		it("should show the letter b", function() {
			$('button:contains("b")', buttonList).should.have.length(1);
		});
	});


	describe("try letters", function() {
		it("should show the letter when the letter match", function() {
			playWith("g");

			game.tryLetter("g");
			wordOutput.html().should.equal('g');
		});
		it("should show underscore when the letter does not match", function() {
			playWith("g");

			game.tryLetter("e");
			wordOutput.html().should.equal('_');
		});
		it("should show only the letters that match", function() {
			playWith("ga");

			game.tryLetter("g");
			wordOutput.html().should.equal('g_');
		});
		it("should show the letter that match in different positions", function() {
			playWith("ga");
			
			game.tryLetter("a");
			wordOutput.html().should.equal('_a');
		});
		it("should show many letters that match", function() {
			playWith("gato");

			game.tryLetter("g");
			game.tryLetter("a");
			wordOutput.html().should.equal('ga__');
		});
		it("should show many repetitive letters when the letters match", function() {
			playWith("gatito");

			game.tryLetter("t");
			wordOutput.html().should.equal('__t_t_');
		});
	});

	it("should show the result after try a letter", function(){
		playWith("a");

		$('button:contains("a")', buttonList).click();

		wordOutput.html().should.equal('a');
	});
});