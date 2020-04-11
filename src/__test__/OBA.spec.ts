import { OBA } from '../index';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const OrderBookBTC = require('./fixtures/orderBook.json');

describe('Orderbook Analysis', () => {
  const USDTBTC = new OBA(OrderBookBTC);

  it('should able to add new Methods', () => {
    USDTBTC.addMethod('medianByAllPrice');

    expect(USDTBTC.methodList).toHaveLength(1);
  });

  it('should calculate result of all Methods', () => {
    const result = USDTBTC.result();

    expect(result).toStrictEqual({ medianByAllPrice: 7203.155000000001 });
  });
});
