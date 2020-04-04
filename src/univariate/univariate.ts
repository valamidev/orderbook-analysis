/* eslint-disable lines-between-class-members */
// Univariate Analysis
import { median } from 'simple-statistics';
import { OrderBookSchema, OrderBookExtended, OrderExtended } from '../types';
import { extendOrderBook } from '../utils';

export class UnivariateTA {
  Orderbook: OrderBookExtended;

  constructor(Orderbook: OrderBookSchema) {
    this.Orderbook = extendOrderBook(Orderbook) as OrderBookExtended;
  }

  public medianByAllPrice(): number {
    return median([...this.Orderbook.all.map((order: OrderExtended) => order.price)]);
  }

  public medianByAllLiquidity(): number {
    return median([...this.Orderbook.all.map((order: OrderExtended) => order.liquidity)]);
  }
}
