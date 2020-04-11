// Technical Analysis
import { OrderBookExtended, Order } from '../types';

export const Technical = {
  // Spread
  spread: (Orderbook: OrderBookExtended): number => {
    return Orderbook.asks[0].price - Orderbook.bids[0].price;
  },

  // Walls(s), prices where Total is higher than sum of the Totals below

  wallsByAsks: (Orderbook: OrderBookExtended): Order[] => {
    return Technical._wallsBy([...Orderbook.asks]);
  },

  wallsByBids: (Orderbook: OrderBookExtended): Order[] => {
    return Technical._wallsBy([...Orderbook.bids]);
  },

  _wallsBy: (Orders: Order[]): Order[] => {
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

  // Peaks where Total is higher than anywhere in the radius

  peaksByAsks: (Orderbook: OrderBookExtended, radius = 10): Order[] => {
    return Technical._peaksBy([...Orderbook.asks], radius);
  },

  peaksByBids: (Orderbook: OrderBookExtended, radius = 10): Order[] => {
    return Technical._peaksBy([...Orderbook.bids], radius);
  },

  _peaksBy: (Orders: Order[], radius = 10): Order[] => {
    const peaks: Order[] = [];

    Orders.forEach((order, i) => {
      if (!Orders[i + radius] || !Orders[i - radius]) {
        return;
      }

      let condition = 0;
      for (let k = 0; k <= radius; k++) {
        condition += order.total > Orders[i + k].total && order.total > Orders[i - k].total ? 1 : 0;
        if (condition === radius) {
          peaks.push(order);
        }
      }
    });

    return peaks;
  },
};
