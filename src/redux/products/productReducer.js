import {ADD_PRODUCT } from './productActionsType';

const initialState = {
    numOfProducts: 10,
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT: return {
            ...state,
        }

        default: return;
    }
}

export default productReducer;