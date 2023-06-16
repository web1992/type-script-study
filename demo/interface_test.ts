interface Person {
    name: string;
    age?: number;
    [propName: string]: string |number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

console.log(tom);


interface User{
    id:number;
    name:string;
    age?:number;
}

let _user: User ={
    id:1,
    name:'Tom',
    age:1
};

console.log(_user);