/*global Game:false*/

describe("Game", function() {
	var game;

	beforeEach(function() {
		game = new Game();
	});

	it("should format the secret word with dashes", function() {
		var word = game.formatSecretWord('gato');

		word.should.equal('____');
	});

	describe("Failed Attemps", function() {
		it("should return 1 failed attempt when try 1 incorrect letter", function() {
			game.start('gato');

			game.tryLetter('e');

			game.getFailedAttempts().should.be.equal(1);
		});

		it("should return 2 failed attempt when try 2 incorrect letters", function() {
			game.start('gato');

			game.tryLetter('e');
			game.tryLetter('i');

			game.getFailedAttempts().should.be.equal(2);
		});

		it("should return 2 failed attempt when try 2 incorrect and 1 correct letter", function() {
			game.start('gato');

			game.tryLetter('a');
			game.tryLetter('e');
			game.tryLetter('i');

			game.getFailedAttempts().should.be.equal(2);
		});
	});
});