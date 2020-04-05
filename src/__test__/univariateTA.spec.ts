import { UnivariateTA } from '../index';
import { OrderBookBTC } from './fixtures/orderBook';

describe('Univariate Technical Analysis', () => {
  const USDTBTC = new UnivariateTA(OrderBookBTC);

  // Median
  it('should return medianByAllPrice', () => {
    expect(USDTBTC.medianByAllPrice()).toBe(6749.795);
  });

  it('should return medianByAskPrice', () => {
    expect(USDTBTC.medianByAskPrice()).toBe(6780.995);
  });

  it('should return medianByBidPrice', () => {
    expect(USDTBTC.medianByBidPrice()).toBe(6726.82);
  });

  it('should return medianByAskLiquidity', () => {
    expect(USDTBTC.medianByAskLiquidity()).toBe(97.084163855);
  });

  it('should return medianByBidLiquidity', () => {
    expect(USDTBTC.medianByBidLiquidity()).toBe(130.25073882);
  });

  it('should return medianByAllLiquidity', () => {
    expect(USDTBTC.medianByAllLiquidity()).toBe(100.17469016999999);
  });

  // Quartiles
  it('should return quartilesByAllPrice', () => {
    expect(USDTBTC.quartilesByAllPrice()).toStrictEqual([5595.4, 6726.46, 6749.795, 6780.69, 7095.54]);
  });

  it('should return quartilesByAskPrice', () => {
    expect(USDTBTC.quartilesByAskPrice()).toStrictEqual([6751.64, 6763.54, 6780.995, 6789.58, 7095.54]);
  });

  it('should return quartilesByBidPrice', () => {
    expect(USDTBTC.quartilesByBidPrice()).toStrictEqual([6751.3, 6737.775, 6726.82, 6716.4349999999995, 5595.4]);
  });
});
