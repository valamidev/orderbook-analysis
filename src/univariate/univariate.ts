/* eslint-disable lines-between-class-members */
// Univariate Analysis
import { median, quantileSorted } from 'simple-statistics';
import { OrderBookSchema, OrderBookExtended, OrderExtended } from '../types';
import { extendOrderBook } from '../utils';

export class UnivariateTA {
  Orderbook: OrderBookExtended;

  constructor(Orderbook: OrderBookSchema) {
    this.Orderbook = extendOrderBook(Orderbook) as OrderBookExtended;
  }

  public medianByAskPrice(): number {
    return median([...this.Orderbook.ask.map((order: OrderExtended) => order.price)]);
  }

  public medianByBidPrice(): number {
    return median([...this.Orderbook.bid.map((order: OrderExtended) => order.price)]);
  }

  public medianByAllPrice(): number {
    return median([...this.Orderbook.all.map((order: OrderExtended) => order.price)]);
  }

  public medianByAskLiquidity(): number {
    return median([...this.Orderbook.ask.map((order: OrderExtended) => order.liquidity)]);
  }

  public medianByBidLiquidity(): number {
    return median([...this.Orderbook.bid.map((order: OrderExtended) => order.liquidity)]);
  }

  public medianByAllLiquidity(): number {
    return median([...this.Orderbook.all.map((order: OrderExtended) => order.liquidity)]);
  }

  private _quartilesBy(prices: number[]): number[] {
    // min, 25%, 50%, 75%, max
    return [
      prices[0],
      quantileSorted(prices, 0.25),
      quantileSorted(prices, 0.5),
      quantileSorted(prices, 0.75),
      prices[prices.length - 1],
    ];
  }

  public quartilesByAllPrice(): number[] {
    return this._quartilesBy([...this.Orderbook.all.map((order: OrderExtended) => order.price)]);
  }

  public quartilesByAskPrice(): number[] {
    return this._quartilesBy([...this.Orderbook.ask.map((order: OrderExtended) => order.price)]);
  }

  public quartilesByBidPrice(): number[] {
    return this._quartilesBy([...this.Orderbook.bid.map((order: OrderExtended) => order.price)]);
  }

  // Wall(s), prices where liquidity is higher than every liquid below

  // Support, higher Wall from Wall(s)
}
