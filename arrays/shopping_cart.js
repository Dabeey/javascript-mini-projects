const cart = [];

function addItem(item) {
    cart.push(item);
}

function removeItem(id) {
    cart.splice(id,1);
}

function totalPrice(cart) {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return {total};
}

function discount(cart) {
    const discountedCart = cart.map(item => ({
        ...item,
        price: item.price * 0.9 //10% off
    }));
}

function expensiveItems(cart) {
    return cart.filter(item => item.price > 500);
}

function viewCart(cart) {
    return cart.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity
    }));
}



addItem({ name: "Laptop", price: 1000, quantity: 1 });
addItem({ name: "Mouse", price: 25, quantity: 2 });

console.log("Cart:", viewCart(cart));
console.log("Total Price:", totalPrice(cart));
console.log("Discounted Cart:", discount(cart));
console.log("Expensive Items:", expensiveItems(cart));