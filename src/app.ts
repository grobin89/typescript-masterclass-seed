interface Person {
    name: string;
    age: number;
}

/**
 * a clone of Partial<> type
 */
type MyPartial<T> = {
    [P in keyof T]?: T[P]
}

function updatePerson(person: Person, prop: Partial<Person>) {
    return { ...person, ...prop };
}

const person: Person = {
    name: 'Greg',
    age: 30
}

updatePerson(person, {name: 'Fred'});