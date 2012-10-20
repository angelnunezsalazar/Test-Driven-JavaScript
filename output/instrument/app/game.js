if (typeof __$coverObject === "undefined"){
	if (typeof window !== "undefined") window.__$coverObject = {};
	else if (typeof global !== "undefined") global.__$coverObject = {};
	else throw new Error("cannot find the global scope");
}
__$coverObject["public\\app\\game.js"] = {};
__$coverObject["public\\app\\game.js"].__code = "function Game () {\r\n\r\n}\r\n\r\nGame.prototype={\r\n\tstart:function(secretWord) {\r\n\t\tthis.secretWord=secretWord;\r\n\t\tthis.formatedSecretWord = this.formatSecretWord(this.secretWord);\r\n\t\tthis.failedAttempts=0;\r\n\t},\r\n\ttryLetter: function(letter) {\r\n\t\tthis.updateFormatedSecretWord(letter);\r\n\t\tif (!this.letterMatches(letter)) {\r\n\t\t\tthis.failedAttempts=this.failedAttempts+1;\r\n\t\t}\r\n\t},\r\n\tgetFailedAttempts:function() {\r\n\t\treturn this.failedAttempts;\r\n\t},\r\n\tformatSecretWord: function(secretWord) {\r\n\t\tvar word = '';\r\n\t\tfor(var i = 0; i < secretWord.length; i++) {\r\n\t\t\tword += '_';\r\n\t\t}\r\n\t\treturn word;\r\n\t},\r\n\tupdateFormatedSecretWord:function(letter) {\r\n\t\tfor(var index = 0; index < this.secretWord.length; index++) {\r\n\t\t\tif(letter === this.secretWord[index]) {\r\n\t\t\t\tthis.formatedSecretWord = this.formatedSecretWord.substr(0, index) +\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tletter +\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tthis.formatedSecretWord.substr(index + 1);\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\tletterMatches:function(letter) {\r\n\t\treturn this.secretWord.indexOf(letter)!=-1;\r\n\t}\r\n};";
__$coverObject["public\\app\\game.js"]["0:22"] = 0;
__$coverObject["public\\app\\game.js"]["27:1017"] = 0;
__$coverObject["public\\app\\game.js"]["78:104"] = 0;
__$coverObject["public\\app\\game.js"]["109:173"] = 0;
__$coverObject["public\\app\\game.js"]["178:199"] = 0;
__$coverObject["public\\app\\game.js"]["241:278"] = 0;
__$coverObject["public\\app\\game.js"]["283:368"] = 0;
__$coverObject["public\\app\\game.js"]["322:363"] = 0;
__$coverObject["public\\app\\game.js"]["411:437"] = 0;
__$coverObject["public\\app\\game.js"]["490:503"] = 0;
__$coverObject["public\\app\\game.js"]["508:573"] = 0;
__$coverObject["public\\app\\game.js"]["578:589"] = 0;
__$coverObject["public\\app\\game.js"]["557:568"] = 0;
__$coverObject["public\\app\\game.js"]["645:922"] = 0;
__$coverObject["public\\app\\game.js"]["711:917"] = 0;
__$coverObject["public\\app\\game.js"]["756:911"] = 0;
__$coverObject["public\\app\\game.js"]["967:1009"] = 0;
__$coverObject['public\\app\\game.js']['0:22']++;
function Game() {
}
__$coverObject['public\\app\\game.js']['27:1017']++;
Game.prototype = {
    start: function (secretWord) {
        __$coverObject['public\\app\\game.js']['78:104']++;
        this.secretWord = secretWord;
        __$coverObject['public\\app\\game.js']['109:173']++;
        this.formatedSecretWord = this.formatSecretWord(this.secretWord);
        __$coverObject['public\\app\\game.js']['178:199']++;
        this.failedAttempts = 0;
    },
    tryLetter: function (letter) {
        __$coverObject['public\\app\\game.js']['241:278']++;
        this.updateFormatedSecretWord(letter);
        __$coverObject['public\\app\\game.js']['283:368']++;
        if (!this.letterMatches(letter)) {
            __$coverObject['public\\app\\game.js']['322:363']++;
            this.failedAttempts = this.failedAttempts + 1;
        }
    },
    getFailedAttempts: function () {
        __$coverObject['public\\app\\game.js']['411:437']++;
        return this.failedAttempts;
    },
    formatSecretWord: function (secretWord) {
        __$coverObject['public\\app\\game.js']['490:503']++;
        var word = '';
        __$coverObject['public\\app\\game.js']['508:573']++;
        for (var i = 0; i < secretWord.length; i++) {
            __$coverObject['public\\app\\game.js']['557:568']++;
            word += '_';
        }
        __$coverObject['public\\app\\game.js']['578:589']++;
        return word;
    },
    updateFormatedSecretWord: function (letter) {
        __$coverObject['public\\app\\game.js']['645:922']++;
        for (var index = 0; index < this.secretWord.length; index++) {
            __$coverObject['public\\app\\game.js']['711:917']++;
            if (letter === this.secretWord[index]) {
                __$coverObject['public\\app\\game.js']['756:911']++;
                this.formatedSecretWord = this.formatedSecretWord.substr(0, index) + letter + this.formatedSecretWord.substr(index + 1);
            }
        }
    },
    letterMatches: function (letter) {
        __$coverObject['public\\app\\game.js']['967:1009']++;
        return this.secretWord.indexOf(letter) != -1;
    }
};