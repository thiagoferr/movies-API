"use strict";
// import { uuid } from "uuidv4"; //GERADOR DE ID UNIVERSAL E UNICO
;
class Dog {
    makeSounding(status) {
        return status;
    }
    eat(status) {
        return status;
    }
    sleep(status) {
        return status;
    }
}
;
let animal = new Dog();
console.log(animal.makeSounding("AU AU AU AU"));
console.log(animal.eat("CHONCK CHOCK"));
console.log(animal.sleep(true));
