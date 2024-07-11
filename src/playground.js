class Dog {
    static #allDogs = [];

    constructor(name, favoriteToy, favoriteFood) {
        this.dogName = name,
            this.favToy = favoriteToy,
            this.favFood = favoriteFood

        Dog.#allDogs.push(this)
    }

    callDog() {
        return `${this.dogName}! Come!`
    }

    getFavToy() {
        return favToy
    }

    getFavFood() {
        return this.favFood
    }

    changeFavFood(newFood) {
        this.favFood = newFood;
        return `${this.dogName} now eats ${newFood}!`
    }

    static getAllDogs() {
        return [...Dog.#allDogs]
    }
}

class Beagle extends Dog {

    constructor(name, favoriteToy, favoriteFood) {
        super(name, favoriteToy, favoriteFood);
        this.breed = "Beagle"
    }

    flop() {
        return `${this.dogName} has flopped over!`
    }
}

const Boris = new Beagle('Boris', 'a sock', 'bean toast');

console.log(Boris.getFavFood())
console.log(Boris.changeFavFood('sausage'))
console.log(Boris.getFavFood())
console.log(Boris.flop())


