import { OBA } from '../index';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const OrderBookBTC = require('./fixtures/orderBook.json');

describe.only('Technical Analysis', () => {
  const USDTBTC = new OBA(OrderBookBTC);

  // Supports

  it('should return supportsByAsks', () => {
    expect(USDTBTC.calc('supportsByAsks')).toStrictEqual([{ amount: 5.88952, price: 7203.32, total: 42424.0972064 }]);
  });

  it('should return supportsByBids', () => {
    expect(USDTBTC.calc('supportsByBids')).toStrictEqual([{ amount: 11.533638, price: 7200, total: 83042.1936 }]);
  });

  // Peaks

  it.skip('should return peaksByAsks', () => {
    expect(USDTBTC.calc('peaksByAsks')).toStrictEqual([{ amount: 5.88952, price: 7203.32, total: 42424.0972064 }]);
  });

  it.skip('should return peaksByBids', () => {
    expect(USDTBTC.calc('peaksByBids')).toStrictEqual([{ amount: 11.533638, price: 7200, total: 83042.1936 }]);
  });
});
