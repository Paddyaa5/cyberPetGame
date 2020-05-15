class Animal{
    constructor(name, type){
        this._type = type;
        this._name = name;
        this._hunger = 25;
        this._thirst = 25;
        this._happiness = 25;
    }
    get type () {
        return this._type;
    }
    get name(){
        return this._name;
    }
    get hunger(){
        return this._hunger;
    }
    get thirst(){
        return this._thirst;
    }
    get happiness(){
        return this._happiness
    }
    eat(){
        this._hunger+=20;
        this._thirst-=10;
        this._happiness-=5;
    }
    drink(){
        this._hunger-=5;
        this._thirst+=20;
        this._happiness-=10;
    }
    play(){
        this._hunger-=10;
        this._thirst-=5;
        this._happiness+=10;
    }
    decease(){
        this._hunger-=5;
        this._thirst-=5;
        this._happiness-=5;
    }
}
let Cooper = new Animal ("Cooper", "dog");

Cooper.eat();

console.log(Cooper);

let petname = null;
let type = null;

const selectionDog = () => {
    document.getElementById('cyberpet').src = "img/dog.png";
    document.getElementById('dog').style.display = 'none';
    document.getElementById('cat').style.display = 'none';
    nameSelection();
    return type = "dog";
}
const selectionCat = () => {
    document.getElementById('cyberpet').src = "img/cat4.png";
    document.getElementById('dog').style.display = 'none';
    document.getElementById('cat').style.display = 'none';
    nameSelection();
    return type = "cat";
}
const nameSelection = () => {
    petname = prompt("Please enter pet name", "name");
    if (petname != null) {
        document.getElementById("petName").innerHTML = petname
    }
    document.getElementById('startGame').innerHTML = '<button id="st" onclick="start()"> Start Game </button>'
}

const start = () => {
    pet1 = new Animal(petname, type);
    document.getElementById("petHealth").innerHTML = "Pet Health";
    document.getElementById("instructions").innerHTML = "";
    document.getElementById("happyTotal").innerHTML = "<h5> Happiness </h5>";
    document.getElementById("happyTotal1").innerHTML = pet1.happiness;
    document.getElementById("hungerTotal").innerHTML = "<h5> Hunger </h5>";
    document.getElementById("hungerTotal1").innerHTML = pet1.hunger;
    document.getElementById("thirstTotal").innerHTML = "<h5> Thirst </h5>";
    document.getElementById("thirstTotal1").innerHTML = pet1.thirst;
    document.getElementById('startGame').innerHTML = "";
    timer();
}
const timer = () => {
    setTimeout( () =>{
        pet1.decease();
        document.getElementById("happyTotal1").innerHTML = pet1.happiness;
        document.getElementById("hungerTotal1").innerHTML = pet1.hunger;
        document.getElementById("thirstTotal1").innerHTML = pet1.thirst;
        timer();
    }, 5000)
}

const giveFood = () => {
    
}