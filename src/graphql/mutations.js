/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInventory = /* GraphQL */ `
  mutation CreateInventory(
    $input: CreateInventoryInput!
    $condition: ModelinventoryConditionInput
  ) {
    createInventory(input: $input, condition: $condition) {
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
export const updateInventory = /* GraphQL */ `
  mutation UpdateInventory(
    $input: UpdateInventoryInput!
    $condition: ModelinventoryConditionInput
  ) {
    updateInventory(input: $input, condition: $condition) {
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
export const deleteInventory = /* GraphQL */ `
  mutation DeleteInventory(
    $input: DeleteInventoryInput!
    $condition: ModelinventoryConditionInput
  ) {
    deleteInventory(input: $input, condition: $condition) {
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
