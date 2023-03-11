<template>
  <div class="wordG">
    <div class="heading mmc">Vue Word Generator</div>

    <div class="wordBox mmc">
        <form @submit.prevent="handleSubmit" class="my_form ranger">
            <p id="rangeValue" class="ranger mmc">{{ formData.dataRange }}</p>
            <input v-model="formData.dataRange" type="range" class="ranger rrr" />
            <button type="submit" class="btn_submit">Generate</button>
        </form>
    </div>
    <div class="showResult mmc">
        <template v-if="resultString===''">
            Please select the range you want to see...
        </template>
        <template v-else>
            {{ resultString }}
        </template>
    </div>
  </div>
</template>

<script>
import { motiMsg } from '../const/const.js'


export default {
  name: "WordGenerate",
  data(){
    return{
        formData : {
            dataRange : 0
        },
        resultString : '',
    }
  },
  methods : {
    handleSubmit(){
        this.resultString = motiMsg.slice(0, this.formData.dataRange)
    },
  }
};
</script>




<style>
.ranger{
    background: transparent;
}

.rrr{
    -webkit-appearance: none;
    background: green;
}

#rangeValue{
    margin-bottom: 0.5rem;
    font-size: 2rem;
}

.showResult{
    padding: 1rem;
    color: black;
    background: rgba(190, 190, 190, 0.628);
    width: 80%;
    height: 30px;
    border-radius: 20px;
}

input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: yellow;
    cursor: pointer;
}

input[type='range']::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: yellow;
    cursor: pointer;
}

input[type='range']::-ms-thumb {
    width: 20px;
    height: 20px;
    background: yellow;
    cursor: pointer;
}


.wordG {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.heading {
  background: rgb(13, 255, 0);
  color: rgb(56, 56, 56);
  padding: 2rem;
}

.my_form{
    display: flex;
    flex-direction: column;
}

.btn_submit{
    padding: 1rem;
    background: yellow;
    border: 1px solid #262626;
    border-radius: 20px;
    color: black;
    margin-top: 1rem;
}

.mmc {
  display: flex;
  align-items: center;
  justify-content: center;
}

.wordBox {
  width: 80%;
  height: 600px;
  background: rgba(89, 89, 89, 0.6);
  color: white;
  border-radius: 40px;
  box-shadow: 0px 0px 5px rgba(92, 92, 92, 0.443);
  margin-top: 2rem;
}
</style>
