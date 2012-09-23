describe("features", function() {
	
	var controller;
	var secretWordTag;
	var messageTag;
	var lettersButtons;

	var fixturesBody = function(){
        return $('#' + fixtures.containerId).contents().find('body');
    };

	beforeEach(function() {
		Controller.prototype.getRandomWord=function() {
			return "cocodrillo";
		};

		var html='<div id="secret-word" ></div>'+
				 '<div id="letters" ></div>'+
				 '<div id="message" ></div>';
		fixtures.set(html);

		secretWordTag=$('#secret-word',fixturesBody());
		lettersButtons=$('#letters',fixturesBody()),
		messageTag=$('#message',fixturesBody());
		controller=new Controller({
			secretWordTag:secretWordTag,
			lettersButtons:lettersButtons,
			messageTag:messageTag
		});

		controller.start();
	});

	afterEach(function() {
		fixtures.cleanUp();
		messageTag.dialog('close');
	});

	it("should show the initial secret word", function() {
		secretWordTag.html().should.equal("__________");
	});

	it("should be able to play", function() {
		$('#O',fixturesBody()).click();
		$('#D',fixturesBody()).click();

		secretWordTag.html().should.equal("_o_od____o");
	});

	it("should show when someone wins",function() {
		$('#C',fixturesBody()).click();
		$('#O',fixturesBody()).click();
		$('#D',fixturesBody()).click();
		$('#R',fixturesBody()).click();
		$('#I',fixturesBody()).click();
		$('#L',fixturesBody()).click();

		messageTag.dialog("option","title").should.include("Win");
	});

	it("should show when someone loses",function() {
		$('#A',fixturesBody()).click();
		$('#B',fixturesBody()).click();
		$('#F',fixturesBody()).click();
		$('#G',fixturesBody()).click();
		$('#H',fixturesBody()).click();
		$('#K',fixturesBody()).click();

		messageTag.dialog("option","title").should.include("Lose");
	});
});