/*global Game:false*/
// show the initial sequence
// be able to play
// should show the number of failed attempts
// prevent to play the same letter twice
// show when someone wins
// show when someone loses

describe("Features", function(){
	var server;
	var initialSequence;
	var buttonList;
	var game;

	beforeEach(function(){
		server=sinon.fakeServer.create();
		initialSequence=$('<div>');
		buttonList=$('<div>');
		game=new Game({
			initialSequence:initialSequence,
			buttonList:buttonList
		});
	});

	function playWith (secretWord) {
		server.respondWith('/secretword','{"word":"'+secretWord+'"}');
		server.respond();
	}

	it("should show the initial sequence", function(){
		playWith('cocodrillo');

		initialSequence.html().should.equal('__________');
	});

	it("should be able to play", function(){
		playWith('cocodrillo');

		$('button:contains("o")',buttonList).click();
		$('button:contains("i")',buttonList).click();

		initialSequence.html().should.equal('_o_o__i___');
	});
});