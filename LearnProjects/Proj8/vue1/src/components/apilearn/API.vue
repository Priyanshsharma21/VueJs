<template>
    <div class="api">
        <nav class="navbar sticky-top">
            <form @submit.prevent="handleSearch" class="searchBar w-100">
                <div class="row main_row mmt">
                    <div class="col mmt col-10">
                        <input placeholder="What are you looking for ?"  v-model="formData.searchQuery" type="text" class="search" />
                    </div>
                    <div class="col mmt col-2">
                        <button class="btn_search" type="submit">Search</button>
                    </div>
                </div>
            </form>
        </nav>


        <main class="imageComponent">
            <template
            v-if="searchWallpaper.length !==0"
            >
                <div>
                    <ImageCard :images="searchWallpaper"/>
                </div>
            </template>

            <template
            v-else-if="wallpapers.length !==0"
            >
                <div>
                    <ImageCard :images="wallpapers" />
                </div>
            </template>

            <template
            v-else
            >
                <div class="load">
                    Loading....
                </div>
            </template>

        </main>

        <div class="e8plus mmt">
            <button @click="handleEtn" class="ep">18+</button>
        </div>
    </div>
</template>





<script>
import ImageCard from './ImageCard.vue'
import api from './apicaller/api.js'
import InfiniteLoading from 'vue-infinite-scroll'

export default {
    name : 'API',
    components : {
        ImageCard,
    },
    data(){
        return{
            wallpapers : [],
            searchWallpaper : [],
            is18 : true,
            formData : {
                searchQuery : '',
            }
        }
    },
    methods : {
        handleSearch(){
            if(this.formData.searchQuery==='') return;
            api.get(`/api/v1/search?q=${this.formData.searchQuery}&purity=${this.is18 ? '111' : '100'}&page=1&per_page=200&apikey=DbFPvAgfg1sWvcoU9n6H3mL6aWmg5xom`)
            .then(response => {
                this.searchWallpaper = response.data.data;
            })
            this.resetForm()
        },

    resetForm(){
        this.formData = {
            searchQuery : '',
        }
    },

    handleEtn(){
        this.is18 = !this.is18
        // api.get(`/api/v1/search?q=${this.formData.searchQuery}&purity=${this.is18 ? '111' : '100'}&page=1&per_page=200&apikey=DbFPvAgfg1sWvcoU9n6H3mL6aWmg5xom`)
        // .then(response => {
        //     this.searchWallpaper = response.data.data;
        // });
    }
  },
  watch:{
    is18(){
        api.get(`/api/v1/search?sorting=random&per_page=100&purity=${this.is18 ? '111' : '100'}&apikey=DbFPvAgfg1sWvcoU9n6H3mL6aWmg5xom`)
        .then(response => {
            this.wallpapers = response.data.data;
        })
    }
},

mounted(){
    this.handleEtn()
},
}

// search -  https://wallhaven.cc/api/v1/search?q=anime&purity=100&apikey=DbFPvAgfg1sWvcoU9n6H3mL6aWmg5xom
// Random -  https://wallhaven.cc/api/v1/search?sorting=random&apikey=DbFPvAgfg1sWvcoU9n6H3mL6aWmg5xom
</script>




<style>
    .api{
        width: 100%;
        height: 200vh;
    }

    .e8plus{
        position: fixed;
        bottom: 3rem;
        right: 3rem;
    }

    @media (max-width: 600px) {
        .e8plus{
            position: fixed;
            bottom: 1rem;
            right: 1rem;
        }
    }

    .ep{
        border-radius: 100%;
        width: 60px;
        height: 60px;
        font-size: 1rem;
        color: white;
        background:rgb(173, 0, 0);
        border: 1px solid white;
        font-weight: 800;
        transition: all 0.2s ease-in-out;
    }

    .ep:active{
        transform: scale(0.8);
    }

    .main_row{
        width: 100%;
        height: 100%;
    }

    .load{
        width: 100%;
        height: 90vh;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .mmt{
        background: transparent;
    }

    .navbar {
        height: 80px;
        width: 100%;
        background: rgba(255, 255, 255, 0.331);
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    
    .searchBar {
        height: 100%;
        background: transparent;
        display: flex;
        align-items: center;
    }    

    .search{
        width: 100%;
        margin-left: 0.5rem;
        height: 100%;
        background: rgba(255, 255, 255, 0.493);
        font-size: 1.8rem;
        padding-left: 1rem;
    }

    .search:focus-visible{
        background: rgba(59, 59, 59, 0.301);
        color: white;
    }

    .btn_search{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        font-size: 1.8rem;
        background: rgba(0, 162, 255, 0.699);
        color: rgb(220, 220, 220);
        transition: all 0.2s ease-in-out;
    }

    .btn_search:active{
        transform: scale(0.9);
    }
    
</style>