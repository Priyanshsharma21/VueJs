// in order to access the global state, means if cart want to access state of product then we have property rootState
import shop from '../../api/shop.js'



export default {
    namespaced : true,

    state: {
        cart: [],
        checkoutStatus: null,
    },

    mutations: {
        pushProductToCart(state, productId) {
            state.cart.push({
                id: productId,
                quantity: 1,
            })
        },

        incrementItemQuantity(state, cartItem) {
            cartItem.quantity++
        },


        emptyCart(state) {
            state.cart = []
        },

        setCheckoutStatus(state, status) {
            state.checkoutStatus = status
        }
    },

    getters: {
        cartProducts(state, getters, rootState, rootGetters) {
            return state.cart.map(cartItem => {
                const product = rootState.products.products.find(product => product.id === cartItem.id);

                return {
                    title: product.title,
                    price: product.price,
                    quantity: cartItem.quantity,
                }
            })
        },

        cartTotal(state, getters) {
            return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
        },
    },

    actions: {
        addProductToCart({
            state,
            getters,
            commit,
            rootState,
            rootGetters
        }, product) {
            // if(product.inventory>0){
            // or
            if (rootGetters['products/productInStokes'](product)) {
                // if stokes present then only add to cart.
                const cartItem = state.cart.find(item => item.id === product.id)

                if (!cartItem) {
                    //if item not present then add to cart.
                    commit('pushProductToCart', product.id)
                } else {
                    //increment the product count
                    commit('incrementItemQuantity', cartItem)
                }

                //decrement the stokes(inventory of the product)
                commit('products/decrementProductInventory', product, {root : true})

            }
        },

        // removeProductFromCart(context, product){
        //   if(product.inventory>0){
        //     const cartItem = context.state.cart.find(item=> item.id === product.id)

        //   }
        // }

        checkout({
            state,
            commit
        }) {
            shop.buyProducts(
                state.cart,
                () => {
                    commit('emptyCart')
                    commit('setCheckoutStatus', 'Success')
                },

                () => {
                    commit('setCheckoutStatus', 'Fail')
                }
            )
        },
    },

}


