
class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
        return this;
    }
    showStats(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
        return this;
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Sensei {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        const drink = super.drinkSake();
        drink;
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        return this 
    }
    showStats(){
        const stats = super.showStats();
        stats;
        console.log("Name: " + super(name) + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"