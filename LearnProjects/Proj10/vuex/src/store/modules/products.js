import shop from '../../api/shop.js'



export default {
    namespaced : true,

    state: {
        products: [],
    },

    mutations: {
        setProducts(state, payload) {
            state.products = payload;
        },

        decrementProductInventory(state, product) {
            product.inventory--
        },
    },

    getters: {
        availableProduct(state, getters) {
            return state.products.filter(product => product.inventory > 0)
            // product whose price is greater than 0
        },



        productInStokes() {
            return (product) => {
                return product.inventory > 0;
            }
        }
    },

    actions: {
        //api calls 
        fetchProducts({
            commit
        }) {
            return new Promise((resolve, reject) => {
                shop.getProducts(products => {
                    commit('setProducts', products)
                    resolve()
                })
            })
        },

        // we will dispatch action of some type with type and payload and then action will mutate the state
        //action is responsible for when mutation to happen while mutation is responsible for updating the state
        // addToCart(context, product){
        //   if(product.inventory > 0){
        //     context.commit('pushProductToCart', product)
        //   }
        // },
    },

}