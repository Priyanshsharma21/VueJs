<template>
  <div class="shoppingCart">
    <h1 class="product_title">Shopping Cart</h1>

    <div class="product_items">
      <ul>
        <li class="list_items" v-for="product in products" :key="product.id">
          <span class="itemName">{{ product.title }}</span>
          <span class="itemPrice"
            >${{ product.price }} - {{ product.quantity }}</span
          >

          <div class="btns">
            <button class="addtocart cart_btns">-</button>
          </div>
        </li>
      </ul>
    </div>

    <div class="checkout" v-if="products.length !== 0">
        <button @click="checkout" class="checkoutBtn">Checkout</button>
    </div>
    
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';


export default {
  name: "ShoppingCart",
  computed : {
    ...mapGetters('cart',{
      products : 'cartProducts',
      total : 'cartTotal',
    }),

    ...mapActions('cart',{
      checkout : 'checkout',
    }),

    
    // products(){
    //     return this.$store.getters.cartProducts
    // },
    // total(){
    //     return this.$store.getters.cartTotal;
    // }
  }
};
</script>

<style>
.shoppingCart{
    widows: 100%;
    height: 100vh;
    color: rgb(255, 232, 232);
    margin-top: 4rem;
}

.checkoutBtn{
    background: yellow;
    color: black;
    padding: 1rem;
    width: max-content;
    height: max-content;
    border-radius: 1rem;
    font-size: 1.2rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    cursor: pointer;
    font-weight: 600;
  
}

.checkout{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
}

.checkoutBtn:hover{
    background: rgba(255, 255, 0, 0.612);
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
