import { OrderBookExtended, OrderBookSchema, MethodName } from './types';
import { extendOrderBook } from './utils';
import { Technical } from './technical/technical';
import { Univariate } from './univariate/univariate';

// Exported
export { batchOrderBook } from './utils';

export class OBA {
  methodList: any[];
  Orderbook: OrderBookExtended;

  constructor(Orderbook: OrderBookSchema) {
    this.Orderbook = extendOrderBook(Orderbook);
    this.methodList = [];
  }

  public addMethod(methodName: MethodName, ...args: any): void {
    this.methodList.push([methodName, [...args]]);
  }

  public update(Orderbook: OrderBookSchema): void {
    this.Orderbook = extendOrderBook(Orderbook);
  }

  public result(): Record<string, any> {
    const result: Record<string, any> = {};

    this.methodList.forEach((elem) => {
      const methodName = elem[0];
      const methodResult = this.calc(elem[0], elem[1]);

      result[methodName] = methodResult;
    });

    return result;
  }

  public calc(methodName: MethodName, ...args: any): unknown | Error {
    const analyticFunction: Function | undefined =
      (Technical as any)[methodName] || (Univariate as any)[methodName] || undefined;

    if (!analyticFunction) {
      throw new Error('Method not exist in Orderbook Analysis library');
    }

    return analyticFunction(this.Orderbook, ...args);
  }
}
