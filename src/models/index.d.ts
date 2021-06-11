import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PostStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED"
}



export declare class StoreItems {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly size?: string;
  readonly price?: number;
  readonly type?: string;
  readonly quantity?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<StoreItems>);
  static copyOf(source: StoreItems, mutator: (draft: MutableModel<StoreItems>) => MutableModel<StoreItems> | void): StoreItems;
}