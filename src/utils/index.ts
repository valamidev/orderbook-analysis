import { OrderBookSchema, Order, OrderBookExtended } from '../types';

export const extendOrderBook = (OrderBook: OrderBookSchema): OrderBookExtended => {
  const asks = OrderBook.asks.map(
    (order: any): Order => ({
      price: Number(order[0]),
      size: Number(order[1]),
      amount: Number(order[0] * order[1]),
    }),
  );
  const bids = OrderBook.bids.map(
    (order: any): Order => ({
      price: Number(order[0]),
      size: Number(order[1]),
      amount: Number(order[0] * order[1]),
    }),
  );

  return { asks, bids, all: [...asks, ...bids].sort((a, b) => a.price - b.price) };
};
