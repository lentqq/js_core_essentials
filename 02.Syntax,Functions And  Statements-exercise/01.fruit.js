function fruit(fruit, weight, price) {
    let kgWeight = weight / 1000;
    let totalPrice = kgWeight * price;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kgWeight.toFixed(2)} kilograms ${fruit}`);
}

fruit('orange', 2500, 1.80)