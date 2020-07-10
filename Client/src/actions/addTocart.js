

export const addToCart = (product) => {
    console.log(product.id)
return {
     type: "PRODUCT_SELECTED",
     payload: product
    }
};

