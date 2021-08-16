// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { StoreItems, Order, OrderItem } = initSchema(schema);

export {
  StoreItems,
  Order,
  OrderItem
};