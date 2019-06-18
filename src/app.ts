interface Order {
    id: string,
    amount: number,
    currency: string
}

interface Stripe {
    card: string,
    cvc: string,
}

interface PayPal {
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
    card: '2000 3446 3234 4321',
    cvc: '123'
};