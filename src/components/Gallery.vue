<template>
    <section id="gallery" class="flex flex-col justify-center items-center">
        <h1 class="font-bold text-5xl text-gray-800">{{ name }}</h1>
        <hr class="mx-auto bg-orange-500 my-5">
        <carousel-3d>
            <slide v-for="img in imgs" :key="img.id" :index="img.id">
                <img :src="img.url" :alt="img.caption" >
            </slide>
            <!-- <slide  :index="0">
                <img class="modal" v-on:click='showModal()' src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="">
            </slide> -->
            <!-- <slide  :index="1">
                <img v-on:click='showModal()' src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="">
            </slide>
            <slide  :index="2">
                <img v-on:click='showModal()' src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="">
            </slide>
            <slide class="slide bg-green" :index="3">
                <img v-on:click='showModal()' src="https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="">
            </slide>
            <slide  :index="4">
                <img v-on:click='showModal()' src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="">
            </slide> -->
        </carousel-3d>
    </section>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

    export default {
        components : {
            Carousel3d,
            Slide
        },
        data(){
            return{
                name : "Gallery",
                imgs : [
                    {
                        id : 0,
                        url : 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                        caption : 'caption for image 0'                    
                    },
                    {
                        id : 1,
                        url : 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                        caption : 'caption for image 1'                    },
                    {
                        id : 2,
                        url : 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
                    },
                    {
                        id : 3,
                        url : 'https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                        caption : 'caption for image 0'                    },
                    {
                        id : 4,
                        url : 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                        caption : 'caption for image 0'                    
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
hr{
    margin-bottom: 50px;
    margin-top: 50px;
}
section{

}
.slide{
    background: green;
    position: relative;
    
}
img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .modal{
        position: fixed;
        transform: translate(-50%,-50%);
        left: 50%;
        right: 50%;
        width: 500px;
        height: 500px;
        background: red;
    }
</style>