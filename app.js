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
}

let petname = null;
let type = null;

const selectionDog = () => {
    document.getElementById('cyberpet').src = "img/dog.png";
    document.getElementById('dog').style.display = 'none';
    document.getElementById('cat').style.display = 'none';
    nameSelection();
}
const selectionCat = () => {
    document.getElementById('cyberpet').src = "img/cat4.png";
    document.getElementById('dog').style.display = 'none';
    document.getElementById('cat').style.display = 'none';
    nameSelection();
}
const nameSelection = () => {
    petname = prompt("Please enter pet name", "name");
    if (petname != null) {
        document.getElementById("petName").innerHTML = petname
    }
}


// Next step is to use Prompt and onClick to create an object. Like below:
// let Winston = new Animal ("Winston", "Dog")
