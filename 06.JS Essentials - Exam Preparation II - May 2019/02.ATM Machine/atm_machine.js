function atmMachine(commmands) {
    let totalCashInAtm = [];

    for (let commandArray of commmands) {
        if (commandArray.length > 2) {
            insert(commandArray);
        }
        else if (commandArray.length === 2) {
            let [balance, moneyToWithdraw] = commandArray;

            if (balance < moneyToWithdraw) {
                console.log(`Not enough money in your balance. Account balance: ${balance}$.`);
            }
            else {
                withDraw(balance, moneyToWithdraw);
            }
        }
        else if (commandArray.length === 1) {
            report(commandArray[0]);
        }

    }

    function getSum(banknotes) {
        return banknotes.reduce((a, b) => a + b, 0);
    }

    function insert(banknotes) {
        totalCashInAtm.push(...banknotes);
        console.log(`Service Report: ${getSum(banknotes)}$ inserted. Current Balance: ${getSum(totalCashInAtm)}$.`);
    }

    function withDraw(balance, moneyToWithdraw) {
        if (getSum(totalCashInAtm) < moneyToWithdraw) {
            console.log(`ATM machine is out of order!`);
        }
        else {
            totalCashInAtm = totalCashInAtm.sort((a, b) => b - a);
            let sum = 0;

            for (let i = 0; i < totalCashInAtm.length; i++) {
                if (sum === moneyToWithdraw) {
                    break;
                }
                if (sum + totalCashInAtm[i] <= moneyToWithdraw) {
                    sum += totalCashInAtm.splice(i, 1);
                    i--;
                }
            }
            console.log(`You get ${sum}$.Account balance ${balance - sum}$.Thank you!`);
        }
    }
    function report(banknote) {
        let banknotesCount = totalCashInAtm.filter(x => x === banknote).length;
        console.log(`Service Report: Banknotes from ${banknote}$: ${banknotesCount}. `);
    }
}

atmMachine([
    [20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500]
])