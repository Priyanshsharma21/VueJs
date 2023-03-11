<template>
    <div class="home">
        <h1 class="product_title">Product Cart</h1>
        <Loader 
        v-if="loading"
        />
        <div class="product_items" v-else>
            <ul>
                <li
                v-for="product in products"
                :key="product.id"
                class="list_items"
                >
                <span class="itemName">{{ product.title }}</span>
                <span class="itemPrice">${{ product.price }} - {{product.inventory}}</span>

                <div class="btns">
                    <button :disabled="!productInStokes(product)" class="addtocart cart_btns" @click="addProductToCart(product)">
                        +
                    </button>
                </div>
                </li>
            </ul>
        </div>

        <div class="shopCart">
            <ShoppingCart />
        </div>
    </div>
</template>



<script>
// import store from '../store/index.js'
//when we pass store in main.js as middleware then we can use it by -> this.$store
import Loader from '../components/Loader.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name : 'Home',
    // data(){ ----------> Now we don't need this data
    //     return{
    //         products : [],
    //     }
    // },
    components : {
        Loader,
        ShoppingCart,
    },

    data(){
        return{
            loading : false,
        }
    },

    methods : {
        ...mapActions({
            fetchProducts : 'products/fetchProducts',
            addProductToCart : 'cart/addProductToCart',
        }),

        // addProduct(product){
        //     this.$store.dispatch('addProductToCart', product)
        // }
    },

    // computed : mapState(['products']) // use same name or for using different name have a object

    computed : {
        ...mapState('products',{
            // products : 'products', // same name as state in store or have function instead
            products : state=>state.products, // same name as state in store
        }),

        ...mapGetters('products', {
            productInStokes : 'productInStokes',
        }),

        // products(){
        //     // return this.$store.getters.availableProduct; // instead this we can use to disable btn if no stiokes
        //     return this.$store.state.products;
        // },

        // productInStokes(){
        //     return this.$store.getters.productInStokes
        // }
    },

    created(){
        //run after instance created
        // we should never update the state directly, because we have mutation in store
        // shop.getProducts(products=>{
        //     store.commit('setProducts', products)
        // })
        //------------------------------> this is replaced by actions


        this.loading = true;
    this.fetchProducts()
    .then(()=>this.loading=false)
    }
}
</script>



<style>
    .home{
        widows: 100%;
        height: 100vh;
        color: rgb(255, 232, 232);
    }

    .btns{
        display: flex;
        margin-left: 4rem;
    }

    .cart_btns:hover{
        background: rgb(69, 69, 69);
    }

    .product_title{
        font-size: 3rem;
        font-family: "Helvetica";
        font-weight: 800;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }

    .addtocart,.removefromcart{
        background: rgba(30, 30, 30, 0.434);
        color: white;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        margin: 0.3rem;
        cursor: pointer;
    }

    .product_items{
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 2rem;
        flex-direction: column;
    }

    .list_items{
        list-style: none;
        font-size: 1.8rem;
        font-family: "Helvetica";
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        background: rgba(19, 19, 19, 0.178);
        padding: 2rem;
        border-radius: 2rem;
    }

    .itemName{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 300px;
    }
    .itemPrice{
        background: rgba(75, 75, 75, 0.388);
        color: rgb(238, 206, 254);
        margin-left: 2rem;
        padding: 0.5rem;
        border-radius: 2rem;
        border: none;
        width: max-content;
        height: max-content;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>