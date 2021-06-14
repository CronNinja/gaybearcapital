import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class OrderItems {
  readonly id: string;
  readonly status?: string;
  readonly price?: number;
  readonly quantity?: number;
  readonly OrderItemsOrders?: (OrderItemsOrder | null)[];
  readonly OrderItemsStoreItems?: (OrderItemsStoreItems | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OrderItems>);
  static copyOf(source: OrderItems, mutator: (draft: MutableModel<OrderItems>) => MutableModel<OrderItems> | void): OrderItems;
}

export declare class OrderItemsOrder {
  readonly id: string;
  readonly order: Order;
  readonly orderitems: OrderItems;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OrderItemsOrder>);
  static copyOf(source: OrderItemsOrder, mutator: (draft: MutableModel<OrderItemsOrder>) => MutableModel<OrderItemsOrder> | void): OrderItemsOrder;
}

export declare class Order {
  readonly id: string;
  readonly username?: string;
  readonly status: string;
  readonly orderItemsO?: (OrderItemsOrder | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

export declare class OrderItemsStoreItems {
  readonly id: string;
  readonly storeitems: StoreItems;
  readonly orderitems: OrderItems;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OrderItemsStoreItems>);
  static copyOf(source: OrderItemsStoreItems, mutator: (draft: MutableModel<OrderItemsStoreItems>) => MutableModel<OrderItemsStoreItems> | void): OrderItemsStoreItems;
}

export declare class StoreItems {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly price?: number;
  readonly quantity?: number;
  readonly type?: string;
  readonly size?: string;
  readonly orderItemsS?: (OrderItemsStoreItems | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<StoreItems>);
  static copyOf(source: StoreItems, mutator: (draft: MutableModel<StoreItems>) => MutableModel<StoreItems> | void): StoreItems;
}