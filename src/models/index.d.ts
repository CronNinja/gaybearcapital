import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class StoreItems {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly price?: number;
  readonly quantity?: number;
  readonly type?: string;
  readonly size?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<StoreItems>);
  static copyOf(source: StoreItems, mutator: (draft: MutableModel<StoreItems>) => MutableModel<StoreItems> | void): StoreItems;
}

export declare class Order {
  readonly id: string;
  readonly username: string;
  readonly status: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

export declare class OrderItem {
  readonly id: string;
  readonly status?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OrderItem>);
  static copyOf(source: OrderItem, mutator: (draft: MutableModel<OrderItem>) => MutableModel<OrderItem> | void): OrderItem;
}