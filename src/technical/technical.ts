// Technical Analysis
// eslint-disable-next-line import/named
import { OrderBookExtended, Order } from '../types';

export const Technical = {
  // Supports(s), prices where Total is higher than sum of Total below

  supportsByAsks: (Orderbook: OrderBookExtended): Order[] => {
    return Technical._supportsBy([...Orderbook.asks]);
  },

  supportsByBids: (Orderbook: OrderBookExtended): Order[] => {
    return Technical._supportsBy([...Orderbook.bids]);
  },

  _supportsBy: (Orders: Order[]): Order[] => {
    const walls: Order[] = [];
    let sumTotal = 0;
    for (const order of Orders) {
      if (sumTotal < order.total && sumTotal !== 0) {
        walls.push(order);
        sumTotal = 0;
      }
      sumTotal += order.total;
    }
    return walls;
  },

  // Peaks where Total before and after lower than on the current price

  peaksByAsks: (Orderbook: OrderBookExtended): Order[] => {
    return Technical._peaksBy([...Orderbook.asks]);
  },

  peaksByBids: (Orderbook: OrderBookExtended): Order[] => {
    return Technical._peaksBy([...Orderbook.bids]);
  },

  _peaksBy: (Orders: Order[]): Order[] => {
    const peaks: Order[] = [];

    Orders.forEach((order, i) => {
      if (!Orders[i + 1] || !Orders[i - 1]) {
        return;
      }

      if (order.total > Orders[i + 1].total && order.total > Orders[i - 1].total) {
        peaks.push(order);
      }
    });

    return peaks;
  },
};
