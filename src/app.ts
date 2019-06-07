interface Person {
    name: string;
    age: number;
}

const person: Required<Person> = {
    name: 'Greg',
    age: 30
}