var should = require('chai').should();
var TRUE = function() { /*dummy*/
	};

describe("Talk", function() {
	it("no trata únicamente sobre TDD", TRUE);
	it("trata sobre JS Agile Development", TRUE);
	it("se centra sobre JS en el BROWSER - IMPORTANTE", TRUE); //AFTER 'Talk Spec: ejecuta los tests sobre NodeJS' . Talvez seguido del punto anterior.

	describe("Talk Spec", function() {
		it("explica los conceptos de la charla", TRUE);
		it("utiliza Mocha", TRUE); //AFTER 'Mocha: funciona en el cliente y el servidor'
		it("ejecuta los tests sobre NodeJS", TRUE); //Comenzamos a ejecutar los tests, Pensar si justo en este momento agregarmos los paquetes
	});

	describe("Demo", function() {
		it("aplica los conceptos de la charla", TRUE);
		it("implementa la funcionalidad del AHORCADO", TRUE); //Mostrar ejemplos de pantallas
		it("utiliza Mocha y Chai como testing frameworks", TRUE); //AFTER 'Mocha: Permite utilizar cualquier librería de asertos'
		it("implementa el 1er Feature Test (high lvl test) ", TRUE);
		it("implementa Unit Test hasta hacer pasar el Feature Test",TRUE);
	});
	//Comencemos!!!!!!!!
});

describe("JS Testing", function() {
	it("tiene muchas herramientas: QUnit, JSTestDriver, Mocha ...", TRUE);

	describe("JSTestDriver", function() {
		it("usa un servidor remoto que toma el control de un navegador", TRUE);
		it("utiliza la consola para enviar los tests hasta el servidor remoto", TRUE);
		it("ejecuta los tests en el servidor remoto ", TRUE);
		it("devuelve los resultados al cliente", TRUE);
	});

	describe("Mocha", function() {
		it("usa una sintaxis 'BDD' (similar a RSpec)", TRUE);
		//Estamos utilizando Mocha en estos momentos
		it("no incluye un API de asertos", TRUE);
		it("permite utilizar cualquier librería de asertos: Chai, Should ...", function() {
			'Esto es un aserto utilizando Chai'.should.be.a('string');
		});
		it("necesita un archivo HTML para ejecutar los tests en el Browser", TRUE); //Generar un archivo HTML y explicarlo
	});
});