<template>
    <div class="mydiv mt-5">
        <div
        v-for="(movie,i) in movies"
        :key="movie.id"
        class="loopy_movi"
        >
            <div class="mvbox">
                <div class="img">
                    <img class="movieImage" :src="movie.imgUrl" :alt="movie.movieName">
                </div>
                <div class="detailBox">
                    <div class="name_of_movie">{{ movie.date }}</div>
                    <div class="name_of_movie">{{ movie.movieName }}</div>
                    <a :href="movie.movieUrl" target="_blank" class="link_to_watch">Visit Movie</a>
                    <div @click="deleteMovie(movie.id)" class="deleteMovie">Delete Movie</div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>


export default {
    name : 'MovieCard',
    props: ['movies'],
    data() {
        return {
            filteredMovies: [],
        }
    },
    mounted() {
        console.log(this.movies)
    },
    watch: {
        filteredMovies: {
            handler(newVal) {
                localStorage.setItem("movieDB", JSON.stringify(newVal))
            },
            deep: true
        }
    },
    methods : {
        deleteMovie(id){
            const index = this.movies.findIndex(movie => movie.id === id);
            this.movies.splice(index, 1);
            localStorage.setItem("movieDB", JSON.stringify(this.movies))
        }
    }
}
</script>



<style>
    .mvbox{
        width: 300px;
        height: 500px;
        border-radius: 2rem;
        margin: 1rem;
    }

    .mydiv{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }


    .deleteMovie{
        text-decoration: none;
        font-size: 1.2rem;
        color: #ffffff;
        background: rgb(255, 21, 0);
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .name_of_movie{
        background: rgb(40, 40, 40);
        color: rgb(0, 206, 252);
        font-size: 1.2rem;
        font-weight: 500;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }


    .link_to_watch{
        text-decoration: none;
        font-size: 1.2rem;
        color: #161616;
        background: yellow;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .detailBox{
        display: flex;
        flex-direction: column;
    }

    .img{
        width: 100%;
        height: 250px;
        background-color: black;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
    }

    .movieImage{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
    }

</style>