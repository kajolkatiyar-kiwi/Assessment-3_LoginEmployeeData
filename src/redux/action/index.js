export const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item
      };
}

export const deleteItem = (itemId) => {
    return {
        type: "DELETE_ITEM",
        payload: itemId
      };
}

