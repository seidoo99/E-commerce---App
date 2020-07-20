function cartReducer(state = { cartItems: [], showSuccessMessage: false, showDeleteMessage: false }, action) {
    switch (action.type) {
        case "CART_ADD_ITEM":
            const item = action.payload;
            const product = state.cartItems.find(x => x.product == item.product);
            if (product) {
                return {
                    cartItems:
                        state.cartItems.map(x => x.product == product.product ? item : x), showSuccessMessage: true
                };
            }
            return { cartItems: [...state.cartItems, item], showSuccessMessage: true };
        case "CART_REMOVE_ITEM":
            return { cartItems: state.cartItems.filter(x => x.product !== action.payload) , showDeleteMessage:true}

        case "ON_SUCCESS_BUY":
            return { cartItems: [], showSuccessMessage: true }
        case "REMOVE_SUCCESS_MESSAGE":
            return { cartItems:[...state.cartItems], showSuccessMessage:false }

        default:
            return state
    }
}
export { cartReducer }







