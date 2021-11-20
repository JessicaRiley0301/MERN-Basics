class Ninja {
    constructor(name, health = 10, speed = 3, strength = 3){
        this.name = name; 
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name);

    }
    showStats(){
        console.log("Name: " + this.name, "Strength: " + this.strength, " Speed: " + this.speed, " Health: " + this.health)
    }
    drinkSake(){
        this.health += 10;
        console.log(this.health);
    }
}