//1
class Animal {
	say () {
		if(this.constructor.name == "Dog"){
			console.log("woof, woof");
		}else if(this.constructor.name == "Cat"){
			console.log("meow, meow");
		}else{
			console.log("rrr, I'm an animal");
		}
	}
}

class Dog extends Animal {
}

class Cat extends Animal {
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

dog.say();
cat.say();
animal.say();

class Restorant{
	constructor(name, isOpen, menu, location){
		this.name = name;
		this.isOpen = isOpen;
		this.menu = menu;
		this.location = location;
		this._workers = ["Anna", "Armine", "Karen", "Serob"];
	}
	#cardPassword = "res2575";
	#sayData(){
		console.log(this._workers);
	}
}
console.log(new Restorant());