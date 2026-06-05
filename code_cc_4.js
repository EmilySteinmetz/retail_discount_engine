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
