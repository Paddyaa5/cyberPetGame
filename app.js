class Animal{
    constructor(name){
        this._name = name;
        this._hunger = 25;
        this._thirst = 25;
        this._happiness = 25;
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

let Cooper = new Animal ("Cooper")

Cooper.play();

console.log(Cooper)