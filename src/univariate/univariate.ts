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

  public medianByAskLiquidity(): number {
    return median([...this.Orderbook.asks.map((order: Order) => order.amount)]);
  }

  public medianByBidLiquidity(): number {
    return median([...this.Orderbook.bids.map((order: Order) => order.amount)]);
  }

  public medianByAllLiquidity(): number {
    return median([...this.Orderbook.all.map((order: Order) => order.amount)]);
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

  private _linearRegressionByPriceAndLiquidity(data: number[][]): linearRegressionResult {
    return linearRegression(data);
  }

  public linearRegressionByAll(): linearRegressionResult {
    return this._linearRegressionByPriceAndLiquidity([
      ...this.Orderbook.all.map((order: Order) => [order.price, order.amount]),
    ]);
  }

  public linearRegressionByAsk(): linearRegressionResult {
    return this._linearRegressionByPriceAndLiquidity([
      ...this.Orderbook.asks.map((order: Order) => [order.price, order.amount]),
    ]);
  }

  public linearRegressionByBid(): linearRegressionResult {
    return this._linearRegressionByPriceAndLiquidity([
      ...this.Orderbook.bids.map((order: Order) => [order.price, order.amount]),
    ]);
  }

  // Wall(s), prices where liquidity is higher than every liquid below

  // Support, higher Wall from Wall(s)
}
