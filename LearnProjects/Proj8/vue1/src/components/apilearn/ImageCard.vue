<template>
    <div class="masonry-grid mt-5">
        <div v-for="image in images" :key="image.id" class="masonry-grid_item" :style="{ boxShadow: boxShadow(image.colors) }">
                <img :src="image.thumbs.large" alt="image" class="img_me" @click="download(image)" />
        </div>
    </div>
</template>


<script>
import VLazyImage from 'v-lazy-image'
import axios from 'axios';

export default {
    name : 'ImageCard',
    props : ['images'],
    components : {
        VLazyImage,
    },
    mounted() {
        // console.log(this.images)
    },
    methods: {
        download(image) {
            console.log(image)
            axios({
                url: '/download',
                method: 'GET',
                responseType: 'blob',
                params: {imageUrl: image.thumbs.large}
            }).then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${image.id}.jpg`);
                document.body.appendChild(link);
                link.click();
            }).catch(error => {
                console.log(error);
            });
        },
        boxShadow(colors) {
            let shadow = '';
            colors.forEach((color, index) => {
                shadow += `0px 0px 15px ${color},`
            });
            return shadow.slice(0, -1)
        }
    },
}
</script>
<style>
.masonry-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
}


@media (max-width: 1200px) {
    .masonry-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 900px) {
    .masonry-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .masonry-grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
    
</style>