/*global Game:false*/

describe("Game", function(){
  var game;

  beforeEach(function(){
		game=new Game("");
  });

	it("should format the secret word with dashes", function() {
		var word = game.formatSecretWord('gato');

		word.should.equal('____');
	});
});
