export interface Order {
  price: number;
  size: number;
  liquidity?: number;
}

export interface OrderExtended {
  price: number;
  size: number;
  liquidity: number;
}

export interface OrderBookSchema {
  ask: Order[];
  bid: Order[];
  best_ask: Order;
  best_bid: Order;
}

export interface OrderBookExtended extends OrderBookSchema {
  ask: OrderExtended[];
  bid: OrderExtended[];
  all: OrderExtended[];
}
