//static class
function pupper(){
	//public variable; can see priv func.
	this.nickname = "Calli";
	
	//private variable; can only use in the pupper function; cannnot see pub fn
	var owner = "Tiffany";
	
	//public function;can see priv func.
	this.bark = function(){alert("BORK");};
	
	//private function;can only use in the pupper function; cannnot see pub fn
	function gimmePaw(){
		alert("PAWPAW");
	
	}

	var wagTail = function (){alert("Wigglewiggle");};
}

alert(pupper.nickname);
pupper.bark();

//non static function; params are private so need getters
function doggo(name, color, weight) {
//public variable
	this.nickname = "Calli";
	this.getName = function (){return name;};
	this.getColor = function (){return color;};
	this.getWeight = function (){return weight;};
	//order of functions important: HOISTING 
	
	//private variable; can only use in the pupper function
	var owner = "Tiffany";
	
	//public function
	this.bark = function(){alert("BORK");};
	
	//private function;can only use in the pupper function
	function gimmePaw(){
		alert("PAWPAW");
	
	}

	var wagTail = function (){alert("Wigglewiggle");};


}
//instance of doggo
var husky = new doggo("Calliope", "brown and white", "60lbs"); 
alert(husky.getName());

//json struct
var dogData = {
	"Name" : "Calli",
	"Breed" : "Husky",
	"Likes" : ["tennis balls", "bones", "kitties", "cuddles"],
//	"Bark" : function (){alert("WOOOOO");},
	"Age" : 8
	
};

//convert dog data to string; serialized
var dogStr = JSON.stringify(dogData);

//convert str back to string
var object = JSON.parse(dogStr);