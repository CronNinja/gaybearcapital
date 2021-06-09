/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInventory = /* GraphQL */ `
  query GetInventory($id: ID!) {
    getInventory(id: $id) {
      id
      name
      description
      size
      price
      type
      createdAt
      updatedAt
    }
  }
`;
export const listInventorys = /* GraphQL */ `
  query ListInventorys(
    $filter: ModelinventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        size
        price
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
