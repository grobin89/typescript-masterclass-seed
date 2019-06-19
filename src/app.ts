class Pizza {
    constructor(public name: string, public price: number) {}
}

class List<I> {
    private list: I[];

    addItem(item: I): void {
        this.list.push(item);
    }

    getList(): I[] {
        return this.list;
    }
}

const list = new List<Pizza>();

list.addItem(new Pizza('Pepperoni',15));

const pizzas: Pizza[] = list.getList();

class Coupon {
    constructor(private name: string) {}
}

const list2 = new List<Coupon>();

list2.addItem(new Coupon('Pizza25'));