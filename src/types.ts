export interface Order {
  price: number;
  size: number;
  amount: number;
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
