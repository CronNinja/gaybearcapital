import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type StoreItemsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

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
  constructor(init: ModelInit<StoreItems, StoreItemsMetaData>);
  static copyOf(source: StoreItems, mutator: (draft: MutableModel<StoreItems, StoreItemsMetaData>) => MutableModel<StoreItems, StoreItemsMetaData> | void): StoreItems;
}

export declare class Order {
  readonly id: string;
  readonly username: string;
  readonly status: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class OrderItem {
  readonly id: string;
  readonly status?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OrderItem, OrderItemMetaData>);
  static copyOf(source: OrderItem, mutator: (draft: MutableModel<OrderItem, OrderItemMetaData>) => MutableModel<OrderItem, OrderItemMetaData> | void): OrderItem;
}