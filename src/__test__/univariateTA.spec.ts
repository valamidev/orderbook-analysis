import { UnivariateTA } from '../index';
import { OrderBookBTC } from './fixtures/orderBook';

describe('Univariate Technical Analysis', () => {
  const USDTBTC = new UnivariateTA(OrderBookBTC);

  it('should return medianByAllPrice', () => {
    expect(USDTBTC.medianByAllPrice()).toBe(6749.795);
  });

  it('should return medianByAllLiquidity', () => {
    expect(USDTBTC.medianByAllLiquidity()).toBe(100.17469016999999);
  });
});
