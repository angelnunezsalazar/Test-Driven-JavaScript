/*global GameController:false, sinon:false*/
describe("GameController", function() {

	var wordOutput;
	var buttonList;
	var gameController;
	var failedAttemptsOutput;
	var server;

	function loadFixture(){
		fixtures.path='fixtures';
		fixtures.load("game.html");
		return $('#' + fixtures.containerId).contents().find('body');
	}

	function playWith(secretWord) {
		server.respondWith('{"secretword":"'+secretWord+'"}');
		
		gameController.start();
		server.respond();
	}

	beforeEach(function() {
		var fixture=loadFixture();

		wordOutput = $('#wordDisplayed',fixture);
		buttonList = $('#letters',fixture);
		failedAttemptsOutput = $('#failedAttempts',fixture);
		gameController = new GameController({
			wordOutput: wordOutput,
			buttonList: buttonList,
			failedAttemptsOutput:failedAttemptsOutput
		});

		server=sinon.fakeServer.create();
	});

	afterEach(function(){
		fixtures.cleanUp();
	});

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

	it("should block the button after a try", function(){
		sinon.stub(gameController.game);
		gameController.createButtons();
		var button=$('button:contains("a")', buttonList);

		button.click();

		button.is(':visible').should.equal(false);
	});
});