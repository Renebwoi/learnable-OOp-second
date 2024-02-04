// name is the amimal's name, 
//whatBlooded can be either cold or warm
//habitat can be either air, land, water or "water and land"


class Animalia {
    constructor(names,whatBlooded,habitat){
        this._name = names;
        this.whatBlooded = whatBlooded;
        this.habitat = habitat;
    }

    get name() {
        return this._name;
    }

    set name(x) {
        this._name = x;
    }

    movement() {
        throw console.error("not accesible here")
    }

}

class Arthropoda extends Animalia{
    constructor(name,whatBlooded,habitat) {
        super(name,whatBlooded,habitat);
        this.legs = 6||8;
        this.hasBackbone = false
        this.bloodTemperature = "Cold"
        
    }

    movement(){
        return `A ${this.name}'s  Flight and walking`
    }
}

class Fish extends Animalia{
    constructor(name,whatBlooded,habitat) {
        super(name,whatBlooded,habitat);
        this.legs = 0; 
        this.hasBackbone = true
        this.bloodTemperature = "Cold"
    }

    movement(){
        return `A ${this.name}'s main movement is Swimming`
    }

}

class Amphibia extends Animalia{
        constructor(name,whatBlooded,habitat) {
        super(name,whatBlooded,habitat);
        this.legs = 4;
        this.hasBackbone = true
        this.bloodTemperature = "Cold"
    }

    movement(){
        return `A ${this.name}'s main movement is Walking and Swimming`
    }
}

class Reptiles extends Animalia{
    constructor(name,whatBlooded,habitat) {
        super(name,whatBlooded,habitat);
        this.hasBackbone = true
        this.legs = 4||0;
        this.bloodTemperature = "Cold"
    }

    movement(){
        return `A ${this.name}'s main movement is Slithering or Crawling`
    }
}

class Aves extends Animalia{
    constructor(name,whatBlooded,habitat) {
        super(name,whatBlooded,habitat);
        this.hasBackbone = true
        this.legs = 4;
        this.bloodTemperature = "Warm"
    }

    movement(){
        return `A ${this.name}'s main movement is Flight`
    }
}

class Mammals extends Animalia{
    constructor(name,whatBlooded,habitat) {
        super(name,whatBlooded,habitat);
        this.hasBackbone = true
        this.legs = 2;
        this.bloodTemperature = "Warm"
    }

    movement(){
        return `A ${this.name}'s main movement is Walking`
    }
}

const butterfly = new Arthropoda("butterfly", "cold","air")
const sardine = new Fish("Sardine","cold","water")
const Frog = new Amphibia("Frog","cold","water and land")
const Snake = new Reptiles("Snake","cold","land")
const Eagle = new Aves("Eagle","warm","air")

const Cat = new Mammals("cat","warm","land")
console.log(Cat.movement())