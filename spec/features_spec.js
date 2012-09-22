describe("features", function() {
	it("should show the initial secret word", function() {
		Controller.prototype.getRandomWord=function() {
			return "GATO";
		};

		var secretWordTag=$('<div id="secret-word" />');
		var controller=new Controller({
			secretWordTag:secretWordTag
		});

		controller.start();

		secretWordTag.html().should.equal("____");
	});
});