// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { OrderItems, OrderItemsOrder, Order, OrderItemsStoreItems, StoreItems } = initSchema(schema);

export {
  OrderItems,
  OrderItemsOrder,
  Order,
  OrderItemsStoreItems,
  StoreItems
};