var TRUE = function() {};

describe("This Talk", function() {
	//Usualmente suelo hablar demasiado (y muy fuerte)
	//esta vez quiero realizar otro enfoque .... más radical
	it("no trata únicamente sobre TDD", TRUE);
	it("trata sobre JS Agile Development", TRUE);
	it("utiliza esta SPEC para explicar ciertos conceptos",TRUE);
	it("utiliza una APP DEMO para aplicar los conceptos",TRUE);
	//Comencemos!!!!!!!!
});

describe("JS Testing", function() {
	it("tiene muchas herramientas: QUnit, JSTestDriver, Mocha ...", TRUE);

	describe("Mocha", function() {
		it("usa una sintaxis 'BDD' (similar a RSpec)", function() {
			mocha.should.exist;//Estamos usando Mocha en estos momentos
		});
		it("funciona en el cliente(Browser) y el servidor(Node.js)", TRUE);
		it("necesita un archivo HTML para ejecutar los tests en el Browser",TRUE);//Generar un archivo HTML y explicarlo
		it("no incluye un API de asertos",TRUE);
		it("permite utilizar cualquier librería de asertos: Chai, Should ...",function() {
			'Esto es Chai'.should.be.a('string');
		});
	});
});