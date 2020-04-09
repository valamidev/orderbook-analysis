import { OrderBookExtended, OrderBookSchema } from './types';
import { extendOrderBook } from './utils';
import { Technical } from './technical/technical';
import { Univariate } from './univariate/univariate';

// Exported
export { batchOrderBook } from './utils';

export class OBA {
  Orderbook: OrderBookExtended;
  constructor(Orderbook: OrderBookSchema) {
    this.Orderbook = extendOrderBook(Orderbook);
  }

  public calc(Name: string): unknown | Error {
    const analyticFunction: Function | undefined = (Technical as any)[Name] || (Univariate as any)[Name] || undefined;

    if (!analyticFunction) {
      throw new Error('Method not exist in Orderbook Analysis library');
    }

    return analyticFunction(this.Orderbook);
  }
}
