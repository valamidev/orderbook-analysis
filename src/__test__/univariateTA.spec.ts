import { UnivariateTA } from '../index';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const OrderBookBTC = require('./fixtures/orderBook.json');

describe('Univariate Technical Analysis', () => {
  const USDTBTC = new UnivariateTA(OrderBookBTC);

  // Median
  it('should return medianByAllPrice', () => {
    expect(USDTBTC.medianByAllPrice()).toBe(7203.155000000001);
  });

  it('should return medianByAskPrice', () => {
    expect(USDTBTC.medianByAskPrice()).toBe(7411.735000000001);
  });

  it('should return medianByBidPrice', () => {
    expect(USDTBTC.medianByBidPrice()).toBe(7014.29);
  });

  it('should return medianByAskLiquidity', () => {
    expect(USDTBTC.medianByAskLiquidity()).toBe(107.31941484);
  });

  it('should return medianByBidLiquidity', () => {
    expect(USDTBTC.medianByBidLiquidity()).toBe(60.74571736);
  });

  it('should return medianByAllLiquidity', () => {
    expect(USDTBTC.medianByAllLiquidity()).toBe(76.486110025);
  });

  // Quartiles
  it('should return quartilesByAllPrice', () => {
    expect(USDTBTC.quartilesByAllPrice()).toStrictEqual({
      '0': 6807.69,
      '100': 7710.2,
      '25': 7014.29,
      '50': 7203.155000000001,
      '75': 7411.735000000001,
      IQR: 397.4450000000006,
    });
  });

  it('should return quartilesByAskPrice', () => {
    expect(USDTBTC.quartilesByAskPrice()).toStrictEqual({
      '0': 7203.31,
      '100': 7710.2,
      '25': 7281.1,
      '50': 7411.735000000001,
      '75': 7548.25,
      IQR: 267.14999999999964,
    });
  });

  it('should return quartilesByBidPrice', () => {
    expect(USDTBTC.quartilesByBidPrice()).toStrictEqual({
      '0': 7203,
      '100': 6807.69,
      '25': 7106.925,
      '50': 7014.29,
      '75': 6915.835,
      IQR: -191.09000000000015,
    });
  });

  // linearRegression

  it('should return varianceByAllPrice', () => {
    expect(USDTBTC.varianceByAllPrice()).toStrictEqual(61365.43820134707);
  });

  it('should return varianceByAskPrice', () => {
    expect(USDTBTC.varianceByAskPrice()).toStrictEqual(23794.659828371266);
  });

  it('should return varianceByBidPrice', () => {
    expect(USDTBTC.varianceByBidPrice()).toStrictEqual(12126.619128206035);
  });

  // linearRegression

  it('should return varianceByAllPrice', () => {
    expect(USDTBTC.linearRegressionByAll()).toStrictEqual({ b: -27811.634920008288, m: 4.5473802073740215 });
  });

  it('should return varianceByAskPrice', () => {
    expect(USDTBTC.linearRegressionByAsk()).toStrictEqual({ b: -28763.269142992303, m: 4.709076546000948 });
  });

  it('should return varianceByBidPrice', () => {
    expect(USDTBTC.linearRegressionByBid()).toStrictEqual({ b: 34196.327334551366, m: -4.334038241023364 });
  });
});
