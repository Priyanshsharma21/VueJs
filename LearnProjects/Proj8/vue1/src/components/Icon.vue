<template>
    <div class="make_me_parent">
        <div v-if="iconName==='circle'" class="zoomIn text-primary circle"></div>
        <div v-else-if="iconName==='cross'" class="zoomIn text-info cross make_me_parent">X</div>
        <img v-else-if="iconName==='empty'" src="../assets/sun.jpg" alt="sun" class="zoomIn img-fluid" />
    </div>
</template>

<script>
export default {
    name : 'Icon',
    props : {
        iconName : {
            type : String,
            required : true,
        }
    }

}
</script>

<style>
img {
  width: 100%;
  object-fit: cover;
}

.circle{
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background: rgb(255, 0, 0);
}

.cross{
    color: blue;
    font-size: 4.5rem;

}

.make_me_parent{
    background: transparent;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  animation-name: zoomIn;
  animation-duration: 1s;
}
</style>