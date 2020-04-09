import { batchOrderBook } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const OrderBookBTC = require('./fixtures/orderBook.json');

describe('BatchOrderbook', () => {
  it('should batch Orderbook', () => {
    const batchedOrderbook = batchOrderBook(OrderBookBTC, 0);

    expect(batchedOrderbook.asks[0]).toStrictEqual([7203, 6.612137]);
    expect(batchedOrderbook.asks[1]).toStrictEqual([7204, 0.513764]);
    expect(batchedOrderbook.bids[0]).toStrictEqual([7203, 8.372371000000001]);
    expect(batchedOrderbook.bids[1]).toStrictEqual([7201, 1.720609]);
  });
});
