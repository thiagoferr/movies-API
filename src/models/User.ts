// import { uuid } from "uuidv4"; //GERADOR DE ID UNIVERSAL E UNICO

// export class User{
//     public readonly id: string; //readonly -> uma vez setado não pode mais ser alterado
//     public name: string;
//     public email: string;
//     public password: string;


//     //FORMA TRADICIONAL DE DECLARAR UM CONSTRUCTOR

//     constructor(id: string, name: string, email: string, password: string) {
//         this.id = id,
//         this.name = name,
//         this.email = email,
//         this.password = password
//     } 

//     // //FORMA CURTA DE DECLARAR UM CONSTRUCTOR

//     // constructor(props: Omit<User, 'id'>, id?: string){ 
//     //     //RECEBE TODAS AS PROPRIEDADES DA CLASSE USER COM EXCEÇÃO O ID
//     //     //O SERGUNDO ARGUMENTO SERVE PARA BUSCAR UM USUARIO NO BD E CONVERTENDO EM USER
//     //     Object.assign(this, props);
//     //     // this.name = props.name;
//     //     // this.email = props.email;
//     //     // this.password = props.password;

//         // if(!id){
//         //     this.id = uuid();
//         // }
        
//     };


interface Animal{

    makeSounding(status: string): string;
    eat(status: string): string;
    sleep(status: boolean): boolean;

}; 

class Dog implements Animal {
   

    public makeSounding(status: string): string {
        return status
    }
    public eat(status: string): string {
        return status
    }
    public sleep(status: boolean): boolean {
        return status
    }

   
};

let animal: Animal = new Dog();
console.log(animal.makeSounding("AU AU AU AU"));
console.log(animal.eat("CHONCK CHOCK"));
console.log(animal.sleep(true));