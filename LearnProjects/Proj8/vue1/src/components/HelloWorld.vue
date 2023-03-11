<template>
  <div class="container">
    <div class="heading">Vue Counter</div>
    <div class="mainBox">
        <div class="count">{{count}}</div>
        <button class="btn_inc btn_main" @click="inc">+</button>
        <button class="btn_dec btn_main" @click="dec">-</button>
        <button class="btn_reset btn_main" @click="reset">Reset</button>
    </div>
  </div>
</template>



<script>
  export default {
    name : 'HelloWorld',
    data(){
      return{
        count : 0
      }
    },
    methods : {
      inc(){
        if(this.count>19) return
        this.count++;
      },
      dec(){
        if(this.count < 1) return
        this.count--;
      },
      reset(){
        this.count = 0;
      }
    }
  }
</script>


<style>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .heading{
    background: #9dff00;
    display: flex;
    justify-content: center;
    padding: 30px;
    color: rgb(47, 47, 47);
    font-size: 4rem;
    width: 100%;
  }

  .mainBox{
    background: rgba(120, 120, 120, 0.21);
    width: 80%;
    height: 600px;
    margin-top: 3rem;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  .btn_main{
    background: rgba(29, 182, 80, 0.756);
    box-shadow: 0px 0px 10px rgba(0, 174, 55, 0.493);
    font-size: 1.5rem;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    border-radius: 30px;
    margin-top: 1rem;
  }

  .btn_main:hover{
    background: rgba(24, 134, 61, 0.756);
  }

  .count{
    color: white;
    font-size: 2rem;
    background: transparent;
  }


</style>