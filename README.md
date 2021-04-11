# orderbook-analysis
 Technical / Univariate analysis for Market Depth Order Books

#### Getting started:

```
npm install orderbook-analysis
```

#### Example:
```
import { OBA } from 'orderbook-analysis';

const OrderBookBTC = {
  "lastUpdateId": 3150560149,
  "bids": [
    ["7203.00000000", "6.62726500"],
    ["7202.98000000", "1.74510600"],
    ["7201.01000000", "0.25000000"]
    ],
  "asks": [
    ["7203.31000000", "0.72261700"],
    ["7203.32000000", "5.88952000"],
    ["7203.80000000", "0.08302900"]
    ]
}
const decimals = 2;

const orderBook = new OBA(OrderBookBTC, decimals);

// Syntax for call methods
console.log(orderBook.calc('spread')); // 0.31
console.log(orderBook.calc('wallsByAsks')); // [{ amount: 5.88952, price: 7203.32, total: 42424.0972064 }]
console.log(orderBook.calc('wallsByBids')); // [{ amount: 11.533638, price: 7200, total: 83042.1936 }]

// Syntax for call methods with arguments
console.log(orderBook.calc('peaksByAsks',10)); 
console.log(orderBook.calc('peaksByBids',10)); 
```

#### Available methods and optional arguments:
```
'spread'
'depthByPercent' // range: number(float) between 0 - 1.00
'wallsByAsks'
'wallsByBids'
'peaksByAsks' // radius: number(integer)
'peaksByBids' // radius: number(integer)
'medianByAllPrice'
'medianByAsksPrice'
'medianByBidsPrice'
'medianByAsksTotal'
'medianByAllTotal'
'medianByBidsTotal'
'quartilesByAllPrice'
'quartilesByAsksPrice'
'quartilesByBidsPrice'
'varianceByAllPrice'
'varianceByAsksPrice'
'varianceByBidsPrice'
'linearRegressionByAll'
'linearRegressionByAsks'
'linearRegressionByBids'
'skewnessByAsksPrice'
'skewnessByBidsPrice'
'skewnessByAllPrice'
'kurtosisByAsksPrice'
'kurtosisByBidsPrice'
'kurtosisByAllPrice';
```