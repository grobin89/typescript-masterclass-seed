interface Order {
    id: string,
    amount: number,
    currency: string
}

interface Stripe {
    type: 'stripe',
    card: string,
    cvc: string,
}

interface PayPal {
    type: 'paypal'
    email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPayPak = Order & PayPal;

const order: Order = {
    id: 'vxd32sd',
    amount: 100,
    currency: 'USD'
};

const orderCard: CheckoutCard = {
    ...order,
    type: 'stripe',
    card: '2000 3446 3234 4321',
    cvc: '123'
};

const orderPayPal: CheckoutPayPak = {
    ...order,
    type: 'paypal',
    email: 'abc@def.ghi'
}

type Payload = CheckoutCard | CheckoutPayPak;

function checkout(payload: Payload) {
    if (payload.type === 'stripe') {
        console.log(payload.card, payload.cvc);
    } else {
        console.log(payload.email);
    }
}

checkout(orderCard);
checkout(orderPayPal);