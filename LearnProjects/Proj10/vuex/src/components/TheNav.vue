<template>
        <nav class="navbar">
            <div class="main_route mmt">
                <router-link to="/" class="logo mmt">FindGit</router-link>
                <div class="routing mmt">
                    <router-link 
                        v-for="nav in navData" 
                        :key="nav.id"
                        :to="nav.path"
                        class="main_nav"
                        >
                            {{ nav.name }}
                    </router-link>
                </div>
                <div class="login mmt">
                    Login
                </div>
        </div>
        </nav>
</template>


<script>
import {navItems} from '../constant/const.js'



export default {
    name : 'TheNav',
    data(){
        return{
            navData : navItems,
        }
    }
}
</script>


<style>
.mmt{
    background: transparent;
}

.login{
    color: white;
    font-family: "Helvetica";
    font-size: 1rem;
    cursor: pointer;
}

.routing{
    display: flex;
}

.logo{
    color: rgba(255, 0, 0, 0.532);
    font-size: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    text-decoration: none;
    
}
    .navbar{
        width: 100%;
        height: 70px;
        background: #391c3e97;
        position: sticky;
        top: 0px;
    }

    .main_route{
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: space-evenly;
    }

    .main_nav{
        font-size: 1rem;
        color: white;
        text-decoration: none;
        font-family: "Helvetica";
        display: flex;
        margin-left: 2rem;
    }


    .vac-active-link{
        color: #00ff11;
    }
</style>
