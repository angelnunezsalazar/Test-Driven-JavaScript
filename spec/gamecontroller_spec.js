/*global GameController:false, sinon:false*/
describe("GameController", function() {
	var wordInput;
	var wordForm;
	var wordOutput;
	var buttonList;
	var gameController;
	var failedAttemptsOutput;
	var server;

	beforeEach(function() {
		wordInput = $('<input>');
		wordForm = $('<form>');
		wordOutput = $('<div>');
		buttonList = $('<ditv>');
		failedAttemptsOutput = $('<span>');
		gameController = new GameController({
			wordInput: wordInput,
			wordForm: wordForm,
			wordOutput: wordOutput,
			buttonList: buttonList,
			failedAttemptsOutput:failedAttemptsOutput
		});

		server=sinon.fakeServer.create();
	});

	function playWith(secretWord) {
/*		wordInput.val(secretWord);
		wordForm.submit();*/
		server.respondWith('{"secretword":"'+secretWord+'"}');
		
		gameController.start();
		server.respond();
	}

	it("should show the secret word", function() {
		server.respondWith('{"secretword":"gato"}');

		gameController.start();
		server.respond();

		wordOutput.html().should.equal('____');
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

			gameController.tryLetter("g");
			wordOutput.html().should.equal('g');
		});
		it("should show underscore when the letter does not match", function() {
			playWith("g");

			gameController.tryLetter("e");
			wordOutput.html().should.equal('_');
		});
		it("should show only the letters that match", function() {
			playWith("ga");

			gameController.tryLetter("g");
			wordOutput.html().should.equal('g_');
		});
		it("should show the letter that match in different positions", function() {
			playWith("ga");
			
			gameController.tryLetter("a");
			wordOutput.html().should.equal('_a');
		});
		it("should show many letters that match", function() {
			playWith("gato");

			gameController.tryLetter("g");
			gameController.tryLetter("a");
			wordOutput.html().should.equal('ga__');
		});
		it("should show many repetitive letters when the letters match", function() {
			playWith("gatito");

			gameController.tryLetter("t");
			wordOutput.html().should.equal('__t_t_');
		});
	});

	it("should show the result after try a letter", function(){
		playWith("a");

		$('button:contains("a")', buttonList).click();

		wordOutput.html().should.equal('a');
	});

	it("should show the failed attemps", function(){
		var game=sinon.stub(gameController.game);
		game.getFailedAttempts.returns(2);

		gameController.tryLetter("any_letter");

		failedAttemptsOutput.html().should.equal('2');
	});
});