//Construct a simple Portfolio class that has a collection of Stocks and a "Profit" method that receives 2 dates and returns the profit of the Portfolio between those dates. 
//Assume each Stock has a "Price" method that receives a date and returns its price
const yahooFinance = require('yahoo-finance');

class Portfolio {
    constructor() {
        this.stocks = [];
    }
    addStock(stock) {
        this.stocks.push(stock);
    }
    async getProfit(startDate, endDate) {
        let profit = 0;
        for await (let stock of this.stocks) {
            let startPrice = await stock.price(startDate);
            let endPrice = await stock.price(endDate);
            profit += (endPrice - startPrice);
        }

        return profit;
    }
    profit(startDate, endDate) {
        this.getProfit(startDate, endDate).then(value => console.log('Profit= '+value));

    }
}

class Stock {
    constructor(symbol) {
        this.symbol = symbol;
    }

    price(date) {
        let from = new Date(date);
        let to = new Date(from + 6.048e+8); //To es igual a la fecha en la semana siguiente
        to.setDate(to.getDate() + 7);
    
        return new Promise((resolve, reject) => {
            yahooFinance.historical({
                symbol: this.symbol,
                from: from.toISOString().slice(0, 10),
                to: to.toISOString().slice(0, 10) //El api no tiene todos los dias, por eso se busca los precios dentro de la semana siguiente y se selecciona el mas cercano
            }, function (err, quotes) {
                if (err) {
                    reject(err);
                } else {
                    resolve(quotes[quotes.length - 1].close);
                }
            });
        });
    }
}



port= new Portfolio();
port.addStock(new Stock("AAPL"));
port.addStock(new Stock("GOOG"));
port.addStock(new Stock("MSFT"));

port.profit("2021-01-01", "2021-03-07");

