<template>
    <main 
    class="d-flex flex-column justify-content-center align-items-center bg-dark">
    <div class="container">
      <div class="row justify-content-center mt-3">
        <div class="col col-6">
          <div class="text-center">
            <div v-if="!winMessage">
              <h1 class="text-info" v-show="isCross">
                Cross Turn
              </h1>
              <h1 class="text-info" v-show="!isCross">
                Circle Turn
              </h1>
            </div>
            <div v-else>
              <h1 class="text-warning">
                {{winMessage.toUpperCase()}}
              </h1>
            </div> 
          </div>
          <div class="grid">
            <div 
            v-for="(item, i) in itemArray"
            :key="i"
            @click="handleClick(i)"
            class="card card-body box justify-content-center align-items-center bg-light">
                <Icon :iconName="item" />
            </div>
          </div>
        </div>
      </div>
      <div class="text center mt-3">
            <button 
                @click="reloadGame"
                class="btn btn-danger btn-block pl-5 pr-5">
                    Reset the game
            </button>
      </div>
    </div>
    </main>
</template>
<script>
import Icon from '../components/Icon.vue'
import Swal from 'sweetalert2/dist/sweetalert2.js'


export default {
    name : 'TikTakTow',
    components : {
        Icon,
    },
    data(){
        return{
            winMessage : "",
            isCross : true,
            itemArray : new Array(9).fill("empty"),
        }
    },
    watch : {
        winMessage : (message)=>{
            if(message){
                this.showDialog();
            }
        }
    },
    methods:{
        showDialog() {
            Swal.fire({
                icon : 'info',
                title : "Game Over",
                text : `${this.winMessage}`
            })
        },

        handleClick(itemNumber){
            //if winner already declear then show dialog
            if (this.winMessage) {
                return this.showDialog()
            }

            //if winner not declear then check if it is empty
            if(this.itemArray[itemNumber]==='empty'){
                this.itemArray[itemNumber] = this.isCross ? "cross" : 'circle'
                this.isCross = !this.isCross
            }else{
                return Swal.fire("Already filled");
            }

            this.checkIsWinner();
        },

        checkIsWinner(){
            // checking the winner
                    if (
                    this.itemArray[0] === this.itemArray[1] &&
                    this.itemArray[0] === this.itemArray[2] &&
                    this.itemArray[0] !== "empty"
                ) {
                    this.winMessage = `${this.itemArray[0]} won`;
                } else if (
                    this.itemArray[3] !== "empty" &&
                    this.itemArray[3] === this.itemArray[4] &&
                    this.itemArray[4] === this.itemArray[5]
                ) {
                    this.winMessage = `${this.itemArray[3]} won`;
                } else if (
                    this.itemArray[6] !== "empty" &&
                    this.itemArray[6] === this.itemArray[7] &&
                    this.itemArray[7] === this.itemArray[8]
                ) {
                    this.winMessage = `${this.itemArray[6]} won`;
                } else if (
                    this.itemArray[0] !== "empty" &&
                    this.itemArray[0] === this.itemArray[3] &&
                    this.itemArray[3] === this.itemArray[6]
                ) {
                    this.winMessage = `${this.itemArray[0]} won`;
                } else if (
                    this.itemArray[1] !== "empty" &&
                    this.itemArray[1] === this.itemArray[4] &&
                    this.itemArray[4] === this.itemArray[7]
                ) {
                    this.winMessage = `${this.itemArray[1]} won`;
                } else if (
                    this.itemArray[2] !== "empty" &&
                    this.itemArray[2] === this.itemArray[5] &&
                    this.itemArray[5] === this.itemArray[8]
                ) {
                    this.winMessage = `${this.itemArray[2]} won`;
                } else if (
                    this.itemArray[0] !== "empty" &&
                    this.itemArray[0] === this.itemArray[4] &&
                    this.itemArray[4] === this.itemArray[8]
                ) {
                    this.winMessage = `${this.itemArray[0]} won`;
                } else if (
                    this.itemArray[2] !== "empty" &&
                    this.itemArray[2] === this.itemArray[4] &&
                    this.itemArray[4] === this.itemArray[6]
                ) {
                    this.winMessage = `${this.itemArray[2]} won`;
                }
        },

        reloadGame(){
            this.winMessage = "",
            this.isCross = true,
            this.itemArray = new Array(9).fill("empty")
        }

    }
}
</script>
<style>
main {
  height: 100vh;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
}

.box {
  height: 150px;
}
</style>