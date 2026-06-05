const products = [
    { name: "Television", category: "electronics", price: 500, inventory: 12 },
    { name: "Jeans", category: "apparel", price: 30, inventory: 47 },
    { name: "Bread", category: "groceries", price: 3, inventory: 33 },
    { name: "Trash Bag", category: "household", price: 10, inventory: 42 },
    { name: "Pencil Case", category: "school", price: 8, inventory: 16 }
];

for (const product of products) {
    let discount = 0;

    switch (product.category) {
        case "electronics":
            discount = 0.20;
            break;
        case "apparel":
            discount = 0.15;
            break;
        case "groceries":
        case "household":
            discount = 0.10;
            break;
        default:
            discount = 0
            break;
    }

    product.discount = discount;
    product.discountedPrice = product.price - product.price * discount;
}

console.log("Products with category discounts:");
console.log(products);

function getCustomerDiscount(customerType) {
    if (customerType === "student") {
        return 0.05;
    } else if (customerType === "senior") {
        return 0.07;
    } else {
        return 0;
    }
}

const customers = [
    {
        type: "regular",
        cart: [
            { productName: "Television", quantity: 1 },
            { productName: "Jeans", quantity: 2 }
        ]
    },
    {
        type: "student",
        cart: [
            { productName: "Bread", quantity: 2 },
            { productName: "Pencil Case", quantity: 1 }
        ]
    },
    {
        type: "senior",
        cart: [
            { productName: "Trash Bag", quantity: 3 },
            { productName: "Bread", quantity: 1 }
        ]
    }

];

for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    let total = 0;

    for (const cartItem of customer.cart) {
        const product = products.find(item => item.name === cartItem.productName);

        if (product && product.inventory >= cartItem.quantity) {
            total += product.discountedPrice * cartItem.quantity;
            product.inventory -= cartItem.quantity;
        } else {
            console.log(`${cartItem.productName} is out of stock or does not exist.`);
        }
    }

 const extraDiscount = getCustomerDiscount(customer.type);
    total = total - total * extraDiscount;

    console.log(`Customer ${i + 1} (${customer.type}) total cost: $${total.toFixed(2)}`);
}

console.log("Single product details using for...in:");

for (const key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
}

console.log("All products after inventory update:");
