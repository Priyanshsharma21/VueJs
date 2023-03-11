<template>
    <div class="movieContainer">
        <div class="heading mmc">VueBi</div>
        <div class="box_mubi">
            <div class="uploadMovieBox">
                <div class="inputz mmt">
                    <form class="form_data mmt" @submit.prevent="handleSubmit">
                        <div class="name mmt">
                            <label for="name" class="nn mmt">Movie Name : </label>
                            <input v-model="formData.movieName" id="name" class="mmt inpu" type="text" placeholder="Enter Name of movie">
                        </div>
                        <div class="name mmt">
                            <label for="img" class="nn mmt">Movie Image : </label>
                            <input v-model="formData.imgUrl" id="img" class="mmt inpu" type="text" placeholder="Enter image Url of movie">
                        </div>
                        <div class="link_of_mubi mmt">
                            <label for="url" class="nn mmt">Movie Link : </label>
                            <input v-model="formData.movieUrl" id="url" class="mmt inp_link inpu" type="text" placeholder="Enter Name of movie">
                        </div>
                        <div class="submit mmt">
                            <button type="submit" class="sub">Add Movie</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <MovieCard :movies="movieDB"  />
    </div>
</template>


<script>
import MovieCard from './MovieCard.vue'
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'


export default {
    name : 'Movie',
    components : {
        MovieCard,
    },
    data(){
        return{
            movieDB : JSON.parse(localStorage.getItem("movieDB")) || [],
            formData : {
                movieName : '',
                movieUrl : '',
                imgUrl : '',
                id : uuidv4(),
                date : moment(new Date()).startOf('hour').fromNow(),
            },
        }
    },
    methods : {
    handleSubmit(){
        if(this.formData.movieName==='') return;
        this.movieDB.push(this.formData)
        localStorage.setItem("movieDB", JSON.stringify(this.movieDB))
        this.resetForm()
    },

    resetForm(){
        this.formData = {
            movieName: '',
            movieUrl: '',
            imgUrl : '',
        }
    },
  }
}
</script>



<style>
    .movieContainer{
        widows: 100%;
        height: 200vh;
        overflow: scroll;
    }

    .movieContainer{
        margin: 2rem;
    }

    .mubiBox{
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }

    .name,.link_of_mubi{
        display: flex;
        align-items: center;
        margin-top: 1rem;
    }

    .sub{
        color: yellow;
        background: rgba(30, 30, 30, 0.427);
        border-radius: 2rem;
        padding: 0.3rem 1rem 0.3rem 1rem;
    }

    .submit{
        display: flex;
        justify-content: flex-end;
        margin-top: 1rem;
    }

    .sub:hover{
        background: rgba(0, 0, 0, 0.427);
    }

    .inpu{
        border-radius: 1rem;
        width: 300px;
        height: 40px;
        border: 1px solid rgb(0, 255, 174);
        padding: 1rem;
        margin-left: 1rem;
    }

    input:focus-visible {
        background-color: rgb(0, 255, 213);
        color: black;
        border: none;
    }

    .inputz{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .mmt{
        background: transparent;
    }

    .nn{
        font-size: 1rem;

    }


    .uploadMovieBox{
        width: 85%;
        height: 35vh;
        background: rgba(0, 208, 255, 0.39);
        border-radius: 3rem;
        box-shadow: 0px 0px 5px rgb(0, 157, 255);
        margin-top: 2rem;
    }

    .box_mubi{
        display: flex;
        justify-content: center;
    }

    .mmc{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .heading{
        font-size: 3rem;
        font-weight: 300;
        padding: 2rem;
        background: rgba(251, 255, 0, 0.961);
        color: black;
    }

    .movieBox{
        background: rgba(0, 0, 0, 0.338);
        border-radius: 2.5rem;
        width: 85%;
        height: max-content;
        padding: 2rem;
    }




</style>