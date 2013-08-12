if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}

var guitar = {
  name: "Fender Esquire",
  setName: function(name){
    this.name = name;
  },
  numberOfStrings: 6,
  volume: 5,
  breakString: function(){
    if (this.numberOfStrings > 0) {
      this.numberOfStrings--;
    }
    if (this.numberOfStrings === 0) {
      this.volume = 0;
    }
  },
  restring: function() {
    this.numberOfStrings = 6;
    this.volume = 5;
  },
  playRock: function() {
    if (this.numberOfStrings > 0) {
      this.volume = 11;
    }
  },
  playBasicRhythm: function() {
    return "jug jigga jug jigga jug"
  },
  playHighStrings: function() {
    return "meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley MEEEEEEEEEEEEEEEE. \'And the dragon comes in the NIIIiiiiIIIiiiiIIIIIIIIiiiiiiiiiiiIIIIIIIIiiiIIGGHH\'";
  }
};