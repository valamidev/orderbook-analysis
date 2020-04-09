// Univariate Analysis
import {
  median,
  quantileSorted,
  variance,
  sampleVariance,
  linearRegression,
  sampleSkewness,
  sampleKurtosis,
} from 'simple-statistics';
import { OrderBookExtended, Order, linearRegressionResult } from '../types';

export const Univariate = {
  medianByAsksPrice: (Orderbook: OrderBookExtended): number => {
    return median([...Orderbook.asks.map((order: Order) => order.price)]);
  },

  medianByBidsPrice: (Orderbook: OrderBookExtended): number => {
    return median([...Orderbook.bids.map((order: Order) => order.price)]);
  },

  medianByAllPrice: (Orderbook: OrderBookExtended): number => {
    return median([...Orderbook.all.map((order: Order) => order.price)]);
  },

  medianByAsksTotal: (Orderbook: OrderBookExtended): number => {
    return median([...Orderbook.asks.map((order: Order) => order.total)]);
  },

  medianByBidsTotal: (Orderbook: OrderBookExtended): number => {
    return median([...Orderbook.bids.map((order: Order) => order.total)]);
  },

  medianByAllTotal: (Orderbook: OrderBookExtended): number => {
    return median([...Orderbook.all.map((order: Order) => order.total)]);
  },

  _quartilesBy: (values: number[]): any => {
    // min, 25%, 50%, 75%, max
    return {
      0: values[0],
      25: quantileSorted(values, 0.25),
      50: quantileSorted(values, 0.5),
      75: quantileSorted(values, 0.75),
      100: values[values.length - 1],
      IQR: quantileSorted(values, 0.75) - quantileSorted(values, 0.25),
    };
  },

  quartilesByAsksPrice: (Orderbook: OrderBookExtended): number[] => {
    return Univariate._quartilesBy([...Orderbook.asks.map((order: Order) => order.price)]);
  },

  quartilesByBidsPrice: (Orderbook: OrderBookExtended): number[] => {
    return Univariate._quartilesBy([...Orderbook.bids.map((order: Order) => order.price)]);
  },
  quartilesByAllPrice: (Orderbook: OrderBookExtended): number[] => {
    return Univariate._quartilesBy([...Orderbook.all.map((order: Order) => order.price)]);
  },

  _varianceBy(values: number[]): number {
    if (values.length > 2) {
      return sampleVariance(values);
    }

    return variance(values);
  },

  varianceByAllPrice: (Orderbook: OrderBookExtended): number => {
    return Univariate._varianceBy([...Orderbook.all.map((order: Order) => order.price)]);
  },

  varianceByAsksPrice: (Orderbook: OrderBookExtended): number => {
    return Univariate._varianceBy([...Orderbook.asks.map((order: Order) => order.price)]);
  },

  varianceByBidsPrice: (Orderbook: OrderBookExtended): number => {
    return Univariate._varianceBy([...Orderbook.bids.map((order: Order) => order.price)]);
  },

  _linearRegressionByPriceAndTotal: (data: number[][]): linearRegressionResult => {
    return linearRegression(data);
  },

  linearRegressionByAll: (Orderbook: OrderBookExtended): linearRegressionResult => {
    return Univariate._linearRegressionByPriceAndTotal([
      ...Orderbook.all.map((order: Order) => [order.price, order.total]),
    ]);
  },

  linearRegressionByAsks: (Orderbook: OrderBookExtended): linearRegressionResult => {
    return Univariate._linearRegressionByPriceAndTotal([
      ...Orderbook.asks.map((order: Order) => [order.price, order.total]),
    ]);
  },

  linearRegressionByBids: (Orderbook: OrderBookExtended): linearRegressionResult => {
    return Univariate._linearRegressionByPriceAndTotal([
      ...Orderbook.bids.map((order: Order) => [order.price, order.total]),
    ]);
  },

  skewnessByAsksTotal: (Orderbook: OrderBookExtended): number => {
    return sampleSkewness([...Orderbook.asks.map((order: Order) => order.total)]);
  },

  skewnessByBidsTotal: (Orderbook: OrderBookExtended): number => {
    return sampleSkewness([...Orderbook.bids.map((order: Order) => order.total)]);
  },

  skewnessByAllTotal: (Orderbook: OrderBookExtended): number => {
    return sampleSkewness([...Orderbook.all.map((order: Order) => order.total)]);
  },

  kurtosisByAsksTotal: (Orderbook: OrderBookExtended): number => {
    return sampleKurtosis([...Orderbook.asks.map((order: Order) => order.total)]);
  },

  kurtosisByBidsTotal: (Orderbook: OrderBookExtended): number => {
    return sampleKurtosis([...Orderbook.bids.map((order: Order) => order.total)]);
  },

  kurtosisByAllTotal: (Orderbook: OrderBookExtended): number => {
    return sampleKurtosis([...Orderbook.all.map((order: Order) => order.total)]);
  },
};
