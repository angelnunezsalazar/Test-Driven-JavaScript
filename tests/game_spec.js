/*global Game:false*/
describe("Game", function() {
	var initialSequence;
	var buttonList;
	var game;
	var server;
	beforeEach(function() {
		server = sinon.fakeServer.create();
		initialSequence = $('<div>');
		buttonList = $('<div>');
		game = new Game({
			initialSequence: initialSequence,
			buttonList: buttonList
		});
	});

	describe("get initial sequence", function() {
		it("should return a sequence with one character", function() {
			var sequence = game.getInitialSequence('a');

			sequence.should.equal('_');
		});
		it("should return a sequence with multiple characters", function() {
			var sequence = game.getInitialSequence('ab');

			sequence.should.equal('__');
		});
	});

	it("should show the initial sequence after load from service", function() {
		server.respondWith('/secretword', '{"word":"a"}');

		server.respond();

		initialSequence.html().should.equal('_');
	});

	it("should show the buttons after load from service", function() {
		var createButtons=sinon.stub(game,'createButtons');
		server.respondWith('/secretword', '{"word":"a"}');

		server.respond();

		createButtons.called.should.equal(true);
	});

	describe("create buttons", function() {
		it("should show the first letter in the alphabet", function() {
			game.createButtons();

			$('button:contains("a")', buttonList).should.length(1);
		});
		it("should show the last letter in the alphabet", function() {
			game.createButtons();

			$('button:contains("z")', buttonList).should.length(1);
		});
		it("should show all letters in the alphabet", function() {
			game.createButtons();

			$('button', buttonList).should.length(26);
		});
	});

	function playWith(word) {
		server.respondWith('/secretword', '{"word":"' + word + '"}');
		server.respond();
	}

	describe("try letter", function() {
		it("should show the letter when match", function() {
			playWith('a');

			game.tryLetter('a');

			initialSequence.html().should.equal('a');
		});
		it("should show underline when does not match", function() {
			playWith('a');

			game.tryLetter('b');

			initialSequence.html().should.equal('_');
		});
		it("should show only the letters that match", function() {
			playWith('ab');

			game.tryLetter('a');

			initialSequence.html().should.equal('a_');
		});
		it("should show only the letters that match in different positions", function() {
			playWith('ab');

			game.tryLetter('b');

			initialSequence.html().should.equal('_b');
		});
		it("should show the letters that match of consecutive attempts", function(){
			playWith('abc');

			game.tryLetter('a');
			game.tryLetter('b');

			initialSequence.html().should.equal('ab_');
		});
		it("should show repetitive letters that match", function(){
			playWith('abb');

			game.tryLetter('b');

			initialSequence.html().should.equal('_bb');
		});
	});
	
	it("should try a letter when click a letter button", function(){
/*		var called=false;
		var letterParam;
		game.tryLetter=function(letter) {
			letterParam=letter;
			called=true;
		};*/
		// var tryLetter=sinon.stub(game,'tryLetter');
		var mock=sinon.mock(game);
		mock.expects('tryLetter').withArgs('a');
		game.createButtons();

		$('button:contains("a")', buttonList).click();

		//ASSERT: el método tryLetter debe haberse ejecutado
/*	called.should.equal(true);
		letterParam.should.equal('a');*/
		mock.verify();
	});

});