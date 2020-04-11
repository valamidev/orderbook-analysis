import { OBA } from '../index';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const OrderBookBTC = require('./fixtures/orderBook.json');

describe('Technical Analysis', () => {
  const USDTBTC = new OBA(OrderBookBTC);

  // Spread
  it('should return the spread', () => {
    expect(USDTBTC.calc('spread')).toStrictEqual(0.3100000000004002);
  });

  // Walls

  it('should return wallsByAsks', () => {
    expect(USDTBTC.calc('wallsByAsks')).toStrictEqual([{ amount: 5.88952, price: 7203.32, total: 42424.0972064 }]);
  });

  it('should return wallsByBids', () => {
    expect(USDTBTC.calc('wallsByBids')).toStrictEqual([{ amount: 11.533638, price: 7200, total: 83042.1936 }]);
  });

  // Peaks

  it('should return peaksByAsks', () => {
    expect(USDTBTC.calc('peaksByAsks', 50)).toHaveLength(50);
  });

  it('should return peaksByBids', () => {
    expect(USDTBTC.calc('peaksByBids', 50)).toHaveLength(54);
  });
});
