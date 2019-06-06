function coffeeMachine(array) {
    let totalMoney = 0;

    for (let data of array) {
        let [money, drink, type, milk, sugar] = data.split(', ');
        let price = 0.80;
        let priceMilk = 0.1;

        if(data.includes('decaf')) {
            price += 0.10;
        }
         if(data.includes('milk')) {
            price += priceMilk;
        }
        if(Number(data.split(', ').pop()) > 0) {
            price += 0.10;
        }
        let change = Math.abs(price - Number(money));

        if(Number(money) >= price) {
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
            totalMoney += price
        }
        else {
            console.log(`Not enough money for ${drink}.Need ${change.toFixed(2)}$ more.`);
        }
    }
    console.log(`Income Report: ${totalMoney.toFixed(2)}$`);
}

coffeeMachine(['1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0'])