const initialState = {
    employees: [],
  };
  
  export const addEmployees = (state = initialState, action) => {
    return [...state, action.payload];
  };
  
  export const removeEmployees = (state = initialState, action) => {
      return [...state, action.payload];
  };