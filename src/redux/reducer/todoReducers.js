import data from '../../records.json'

const initialState = {
    data: data
};

function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case "DELETE_ITEM":
            const updatedData = state.data.filter(item => item.id !== action.payload)
            return {
                ...state,
                data: updatedData
            };

        default: return state;
    }
}

export default itemsReducer