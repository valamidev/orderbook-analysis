export interface Order {
  price: number;
  amount: number;
  total: number;
}

export interface OrderBookSchema {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  asks: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bids: any[];
}

export interface OrderBookExtended extends OrderBookSchema {
  asks: Order[];
  bids: Order[];
  all: Order[];
}

// Univariate types

export type linearRegressionResult = {
  m: number;
  b: number;
};

export type MethodName =
  | 'spread'
  | 'depthByPercent'
  | 'wallsByAsks'
  | 'wallsByBids'
  | 'peaksByAsks'
  | 'peaksByBids'
  | 'medianByAllPrice'
  | 'medianByAsksPrice'
  | 'medianByBidsPrice'
  | 'medianByAsksTotal'
  | 'medianByAllTotal'
  | 'medianByBidsTotal'
  | 'quartilesByAllPrice'
  | 'quartilesByAsksPrice'
  | 'quartilesByBidsPrice'
  | 'varianceByAllPrice'
  | 'varianceByAsksPrice'
  | 'varianceByBidsPrice'
  | 'linearRegressionByAll'
  | 'linearRegressionByAsks'
  | 'linearRegressionByBids'
  | 'skewnessByAsksPrice'
  | 'skewnessByBidsPrice'
  | 'skewnessByAllPrice'
  | 'kurtosisByAsksPrice'
  | 'kurtosisByBidsPrice'
  | 'kurtosisByAllPrice';
