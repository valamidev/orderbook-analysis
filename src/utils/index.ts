import { OrderBookSchema, Order, OrderBookExtended } from '../types';

const _batchOrders = (Orders: any[], decimals: number): any[] => {
  const batchedOrders: any[] = [];

  let sumAmount = 0;
  let newPrice = null;

  for (const order of Orders) {
    const price = Number(Number.parseFloat(order[0]).toFixed(decimals));
    const amount = Number(order[1]);

    if (!newPrice || newPrice !== price) {
      if (sumAmount !== 0) {
        batchedOrders.push([newPrice, sumAmount]);
      }

      newPrice = price;
      sumAmount = amount;
    } else {
      sumAmount += amount;
    }
  }

  batchedOrders.push([newPrice, sumAmount]);

  return batchedOrders;
};

export const extendOrderBook = (OrderBook: OrderBookSchema): OrderBookExtended => {
  const asks = OrderBook.asks.map(
    (order: any): Order => ({
      price: Number(order[0]),
      amount: Number(order[1]),
      total: Number(order[0] * order[1]),
    }),
  );
  const bids = OrderBook.bids.map(
    (order: any): Order => ({
      price: Number(order[0]),
      amount: Number(order[1]),
      total: Number(order[0] * order[1]),
    }),
  );

  return { asks, bids, all: [...asks, ...bids].sort((a, b) => a.price - b.price) };
};

export const batchOrderBook = (OrderBook: OrderBookSchema, decimals: number): OrderBookSchema => {
  return {
    asks: _batchOrders(OrderBook.asks, decimals),
    bids: _batchOrders(OrderBook.bids, decimals),
  };
};
