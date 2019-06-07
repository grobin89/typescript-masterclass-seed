const person = {
    name: "Greg",
    age: 30
};

type Person = typeof person; //typeof is a type query and handles the inferred types of person
type PersonKeys = keyof Person; //keyof of a type returns the key names of that type. The type then becomes a union type e.g. 'name' | 'age'
type PersonTypes = Person[PersonKeys]; //This creates a union type of each of the types of keys within person e.g. string | number

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

 const nextPerson: Person = {
     name: 'Bob',
     age: 43
 }

console.log(getProperty(person, 'name'));
console.log(getProperty(nextPerson, 'age'));