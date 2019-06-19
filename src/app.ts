const enum Sizes { // adding const makes enum inline, meaning when compiled, it remove the generated array and then inserts the values where enum is called.
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

let selected: Sizes = Sizes.Small;

function updateSize(size: Sizes): void {
    selected = size;
}

updateSize(Sizes.Large);

console.log(Sizes.Large);