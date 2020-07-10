export const removeFromCart = (product) => {
    console.log(product)
return {
     type: "REMOVE_SELECTED",
     payload: product
    }
};