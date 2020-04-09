import { OBA } from '../index';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const OrderBookBTC = require('./fixtures/orderBook.json');

describe('Univariate Technical Analysis', () => {
  const USDTBTC = new OBA(OrderBookBTC);
  // Median
  it('should return medianByAllPrice', () => {
    expect(USDTBTC.calc('medianByAllPrice')).toBe(7203.155000000001);
  });

  it('should return medianByAskPrice', () => {
    expect(USDTBTC.calc('medianByAsksPrice')).toBe(7411.735000000001);
  });

  it('should return medianByBidPrice', () => {
    expect(USDTBTC.calc('medianByBidsPrice')).toBe(7014.29);
  });

  it('should return medianByAskTotal', () => {
    expect(USDTBTC.calc('medianByAsksTotal')).toBe(107.31941484);
  });

  it('should return medianByBidTotal', () => {
    expect(USDTBTC.calc('medianByBidsTotal')).toBe(60.74571736);
  });

  it('should return medianByAllTotal', () => {
    expect(USDTBTC.calc('medianByAllTotal')).toBe(76.486110025);
  });

  // Quartiles
  it('should return quartilesByAllPrice', () => {
    expect(USDTBTC.calc('quartilesByAllPrice')).toStrictEqual({
      '0': 6807.69,
      '100': 7710.2,
      '25': 7014.29,
      '50': 7203.155000000001,
      '75': 7411.735000000001,
      IQR: 397.4450000000006,
    });
  });

  it('should return quartilesByAskPrice', () => {
    expect(USDTBTC.calc('quartilesByAsksPrice')).toStrictEqual({
      '0': 7203.31,
      '100': 7710.2,
      '25': 7281.1,
      '50': 7411.735000000001,
      '75': 7548.25,
      IQR: 267.14999999999964,
    });
  });

  it('should return quartilesByBidPrice', () => {
    expect(USDTBTC.calc('quartilesByBidsPrice')).toStrictEqual({
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
    expect(USDTBTC.calc('varianceByAllPrice')).toStrictEqual(61365.43820134707);
  });

  it('should return varianceByAskPrice', () => {
    expect(USDTBTC.calc('varianceByAsksPrice')).toStrictEqual(23794.659828371266);
  });

  it('should return varianceByBidPrice', () => {
    expect(USDTBTC.calc('varianceByBidsPrice')).toStrictEqual(12126.619128206035);
  });

  // linearRegression

  it('should return varianceByAllPrice', () => {
    expect(USDTBTC.calc('linearRegressionByAll')).toStrictEqual({ b: -27811.634920008288, m: 4.5473802073740215 });
  });

  it('should return varianceByAskPrice', () => {
    expect(USDTBTC.calc('linearRegressionByAsks')).toStrictEqual({ b: -28763.269142992303, m: 4.709076546000948 });
  });

  it('should return varianceByBidPrice', () => {
    expect(USDTBTC.calc('linearRegressionByBids')).toStrictEqual({ b: 34196.327334551366, m: -4.334038241023364 });
  });

  // Skewness

  it('should return skewnessByAsksTotal', () => {
    expect(USDTBTC.calc('skewnessByAsksTotal')).toStrictEqual(26.12399254999822);
  });

  it('should return skewnessByBidsTotal', () => {
    expect(USDTBTC.calc('skewnessByBidsTotal')).toStrictEqual(21.004313353686026);
  });

  it('should return skewnessByAllTotal', () => {
    expect(USDTBTC.calc('skewnessByAllTotal')).toStrictEqual(27.093035482154132);
  });

  // Kurtosis

  it('should return kurtosisByAsksTotal', () => {
    expect(USDTBTC.calc('kurtosisByAsksTotal')).toStrictEqual(798.9976193118874);
  });

  it('should return kurtosisByBidsTotal', () => {
    expect(USDTBTC.calc('kurtosisByBidsTotal')).toStrictEqual(520.6362152098471);
  });

  it('should return kurtosisByAllTotal', () => {
    expect(USDTBTC.calc('kurtosisByAllTotal')).toStrictEqual(919.4277566726009);
  });
});
