
abstract class Animal {
    static population: number = 0;
    constructor() {
        Animal.population++;
    }
    public abstract sound(): void;
}

class Dog extends Animal {
    color: string;

    constructor(color:string){
        super();
        this.color = color;
    }

    public sound(){
        return "WOW";
    }

    public iamadog() {
        console.log('yes, this is a dog');
    }
}

class Cat extends Animal {
    gender: string;
    
    constructor(gender:string){
        super();
        this.gender = gender;
    }

    public sound(){
        return "MEOW";
    }

    public iamacat() {
        console.log('yes, this is a cat');
    }
}

let animals: Animal[] = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));

for(let animal of animals){
    
    if(animal instanceof Cat){
        console.log(animal.sound());
        animal.iamacat();
    }
    else if(animal instanceof Dog){
        console.log(animal.sound());
        animal.iamadog();
    }

}
/**  loop prints these lines
MEOW
yes, this is a cat
WOW
yes, this is a dog
MEOW
yes, this is a cat
WOW
yes, this is a dog
*/

console.log(Animal.population); //4