const person = {
    name: "Greg",
    age: 30
};

type Person = typeof person;
/**
 * typeof is a type query and handles the inferred types of person
 */

 const nextPerson: Person = {
     name: 'Bob',
     age: 43
 }