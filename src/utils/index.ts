import { OrderBookSchema, Order, OrderBookExtended, OrderExtended } from '../types';

export const extendOrderBook = (OrderBook: OrderBookSchema): OrderBookExtended => {
  const ask = OrderBook.ask.map(
    (order: Order): OrderExtended => ({
      price: order.price,
      size: order.size,
      liquidity: order.price * order.size,
    }),
  );
  const bid = OrderBook.bid.map(
    (order: Order): OrderExtended => ({
      price: order.price,
      size: order.size,
      liquidity: order.price * order.size,
    }),
  );

  return { ...OrderBook, ...{ ask, bid, all: [...ask, ...bid].sort((a, b) => a.price - b.price) } };
};
