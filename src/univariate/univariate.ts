/* eslint-disable lines-between-class-members */
// Univariate Analysis
import { median, quantileSorted, variance, sampleVariance, linearRegression } from 'simple-statistics';
import { OrderBookSchema, OrderBookExtended, Order, linearRegressionResult } from '../types';
import { extendOrderBook } from '../utils';

export class UnivariateTA {
  Orderbook: OrderBookExtended;

  constructor(Orderbook: OrderBookSchema) {
    this.Orderbook = extendOrderBook(Orderbook) as OrderBookExtended;
  }

  public medianByAskPrice(): number {
    return median([...this.Orderbook.asks.map((order: Order) => order.price)]);
  }

  public medianByBidPrice(): number {
    return median([...this.Orderbook.bids.map((order: Order) => order.price)]);
  }

  public medianByAllPrice(): number {
    return median([...this.Orderbook.all.map((order: Order) => order.price)]);
  }

  public medianByAskTotal(): number {
    return median([...this.Orderbook.asks.map((order: Order) => order.total)]);
  }

  public medianByBidTotal(): number {
    return median([...this.Orderbook.bids.map((order: Order) => order.total)]);
  }

  public medianByAllTotal(): number {
    return median([...this.Orderbook.all.map((order: Order) => order.total)]);
  }

  private _quartilesBy(values: number[]): any {
    // min, 25%, 50%, 75%, max
    return {
      0: values[0],
      25: quantileSorted(values, 0.25),
      50: quantileSorted(values, 0.5),
      75: quantileSorted(values, 0.75),
      100: values[values.length - 1],
      IQR: quantileSorted(values, 0.75) - quantileSorted(values, 0.25),
    };
  }

  public quartilesByAllPrice(): number[] {
    return this._quartilesBy([...this.Orderbook.all.map((order: Order) => order.price)]);
  }

  public quartilesByAskPrice(): number[] {
    return this._quartilesBy([...this.Orderbook.asks.map((order: Order) => order.price)]);
  }

  public quartilesByBidPrice(): number[] {
    return this._quartilesBy([...this.Orderbook.bids.map((order: Order) => order.price)]);
  }

  private _varianceBy(values: number[]): number {
    if (values.length > 2) {
      return sampleVariance(values);
    }

    return variance(values);
  }

  public varianceByAllPrice(): number {
    return this._varianceBy([...this.Orderbook.all.map((order: Order) => order.price)]);
  }

  public varianceByAskPrice(): number {
    return this._varianceBy([...this.Orderbook.asks.map((order: Order) => order.price)]);
  }

  public varianceByBidPrice(): number {
    return this._varianceBy([...this.Orderbook.bids.map((order: Order) => order.price)]);
  }

  private _linearRegressionByPriceAndTotal(data: number[][]): linearRegressionResult {
    return linearRegression(data);
  }

  public linearRegressionByAll(): linearRegressionResult {
    return this._linearRegressionByPriceAndTotal([
      ...this.Orderbook.all.map((order: Order) => [order.price, order.total]),
    ]);
  }

  public linearRegressionByAsk(): linearRegressionResult {
    return this._linearRegressionByPriceAndTotal([
      ...this.Orderbook.asks.map((order: Order) => [order.price, order.total]),
    ]);
  }

  public linearRegressionByBid(): linearRegressionResult {
    return this._linearRegressionByPriceAndTotal([
      ...this.Orderbook.bids.map((order: Order) => [order.price, order.total]),
    ]);
  }

  // Wall(s), prices where Total is higher than every liquid below

  // Support, higher Wall from Wall(s)
}
