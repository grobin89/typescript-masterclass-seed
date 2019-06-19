function reverse(str: string): string; //overloads, it won't compile but it helps typescript
function reverse<T>(arr: T[]): T[]; //overloads
function reverse<T>(something: string | T[]): string | T[] { //implementation
    if (typeof something === 'string') {
        return something
            .split('')
            .reverse()
            .join('');
    }
    return something
        .slice()
        .reverse();
}

reverse('Pepperoni');
reverse(['bacon','pepperoni','chicken','chili']);