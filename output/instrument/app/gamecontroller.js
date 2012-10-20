if (typeof __$coverObject === "undefined"){
	if (typeof window !== "undefined") window.__$coverObject = {};
	else if (typeof global !== "undefined") global.__$coverObject = {};
	else throw new Error("cannot find the global scope");
}
__$coverObject["public\\app\\gamecontroller.js"] = {};
__$coverObject["public\\app\\gamecontroller.js"].__code = "/*global Game:false*/\r\nfunction GameController(attributes) {\r\n\tthis.init(attributes);\r\n}\r\n\r\nGameController.prototype = {\r\n\tinit: function(attributes) {\r\n\t\tthis.game=new Game();\r\n\t\tthis.wordOutput = attributes.wordOutput;\r\n\t\tthis.buttonList = attributes.buttonList;\r\n\t\tthis.failedAttemptsOutput= attributes.failedAttemptsOutput;\r\n\t},\r\n\tstart:function() {\r\n\t\tvar self=this;\r\n\t\t$.getJSON('http://localhost:8010/secretword', function(data) {\r\n\t\t\tself.game.start(data.secretword);\r\n\t\t\tself.wordOutput.html(self.game.formatedSecretWord);\r\n\t\t\tself.createButtons();\r\n\t\t\tself.failedAttemptsOutput.html(self.game.failedAttempts);\r\n\t\t});\r\n\t},\r\n\tcreateButtons: function() {\r\n\t\tfor(var i = 97; i <= 122; i++) {\r\n\t\t\tvar button = $('<button>' + String.fromCharCode(i) + '</button>');\r\n\t\t\tbutton.click($.proxy(this.onButtonClick,this));\r\n\t\t\tthis.buttonList.append(button);\r\n\t\t}\r\n\t},\r\n\tonButtonClick:function(e) {\r\n\t\tvar letter=$(e.target).html();\r\n\t\tthis.tryLetter(letter);\r\n\t\t$(e.target).remove();\r\n\t},\r\n\ttryLetter: function(letter) {\r\n\t\tthis.game.tryLetter(letter);\r\n\t\tthis.wordOutput.html(this.game.formatedSecretWord);\r\n\t\tthis.failedAttemptsOutput.html(this.game.getFailedAttempts());\r\n\t}\r\n};";
__$coverObject["public\\app\\gamecontroller.js"]["23:87"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["92:1179"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["63:84"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["155:175"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["180:219"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["224:263"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["268:326"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["357:370"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["375:625"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["442:474"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["480:530"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["536:556"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["562:618"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["665:860"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["702:767"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["773:819"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["825:855"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["900:929"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["934:956"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["961:981"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["1023:1050"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["1055:1105"] = 0;
__$coverObject["public\\app\\gamecontroller.js"]["1110:1171"] = 0;
__$coverObject['public\\app\\gamecontroller.js']['23:87']++;
function GameController(attributes) {
    __$coverObject['public\\app\\gamecontroller.js']['63:84']++;
    this.init(attributes);
}
__$coverObject['public\\app\\gamecontroller.js']['92:1179']++;
GameController.prototype = {
    init: function (attributes) {
        __$coverObject['public\\app\\gamecontroller.js']['155:175']++;
        this.game = new Game();
        __$coverObject['public\\app\\gamecontroller.js']['180:219']++;
        this.wordOutput = attributes.wordOutput;
        __$coverObject['public\\app\\gamecontroller.js']['224:263']++;
        this.buttonList = attributes.buttonList;
        __$coverObject['public\\app\\gamecontroller.js']['268:326']++;
        this.failedAttemptsOutput = attributes.failedAttemptsOutput;
    },
    start: function () {
        __$coverObject['public\\app\\gamecontroller.js']['357:370']++;
        var self = this;
        __$coverObject['public\\app\\gamecontroller.js']['375:625']++;
        $.getJSON('http://localhost:8010/secretword', function (data) {
            __$coverObject['public\\app\\gamecontroller.js']['442:474']++;
            self.game.start(data.secretword);
            __$coverObject['public\\app\\gamecontroller.js']['480:530']++;
            self.wordOutput.html(self.game.formatedSecretWord);
            __$coverObject['public\\app\\gamecontroller.js']['536:556']++;
            self.createButtons();
            __$coverObject['public\\app\\gamecontroller.js']['562:618']++;
            self.failedAttemptsOutput.html(self.game.failedAttempts);
        });
    },
    createButtons: function () {
        __$coverObject['public\\app\\gamecontroller.js']['665:860']++;
        for (var i = 97; i <= 122; i++) {
            __$coverObject['public\\app\\gamecontroller.js']['702:767']++;
            var button = $('<button>' + String.fromCharCode(i) + '</button>');
            __$coverObject['public\\app\\gamecontroller.js']['773:819']++;
            button.click($.proxy(this.onButtonClick, this));
            __$coverObject['public\\app\\gamecontroller.js']['825:855']++;
            this.buttonList.append(button);
        }
    },
    onButtonClick: function (e) {
        __$coverObject['public\\app\\gamecontroller.js']['900:929']++;
        var letter = $(e.target).html();
        __$coverObject['public\\app\\gamecontroller.js']['934:956']++;
        this.tryLetter(letter);
        __$coverObject['public\\app\\gamecontroller.js']['961:981']++;
        $(e.target).remove();
    },
    tryLetter: function (letter) {
        __$coverObject['public\\app\\gamecontroller.js']['1023:1050']++;
        this.game.tryLetter(letter);
        __$coverObject['public\\app\\gamecontroller.js']['1055:1105']++;
        this.wordOutput.html(this.game.formatedSecretWord);
        __$coverObject['public\\app\\gamecontroller.js']['1110:1171']++;
        this.failedAttemptsOutput.html(this.game.getFailedAttempts());
    }
};