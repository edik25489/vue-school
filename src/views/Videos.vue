<script setup lang="ts">
import {useVideosStore} from "../store/videos.ts";
import {useCategoriesStore} from "../store/categories.ts";
import {computed, ref} from "vue";

const videos = useVideosStore().getVideos
const categories = useCategoriesStore()
const setCategories = ref<Object[]>([]);
const setVideos = computed(()=>{
      return videos.filter(function (elem){
            if(setCategories.value.length > 0){
                return setCategories.value.indexOf(elem.category.id) > -1
            }
            else return true
          })
})
</script>

<template>
  <div class="mx-auto md:container w-max-[1200px] mt-1 mr-4 sm:mx-auto flex flex-col justify-center md:flex-row md:justify-around">
    <div class="container flex basis-2/5">
      <ul>
        <div v-for="(ctg, ind) in categories.getCategories" :key="ind"
              class="bg-white rounded-md flex flex-row items-center justify-start gap-4 mx-4 mt-5 p-2 border-b-2 border-r-2">
          <input type="checkbox" :value=ctg.id v-model="setCategories" :id=ctg.name>
          <li>
            <label :for=ctg.name>{{ctg.name}}</label>
          </li>
        </div>
      </ul>
    </div>

    <div class="container flex basis-3/5 mx-5">
      <ul>
        <li v-for="(video, index) in setVideos" :key="index"
            class="bg-white flex flex-col md:flex-row sm:w-max-[500px] md:w-max-[1000px] p-4 m-5 shadow-sm border rounded-md duration-300 hover:shadow-lg">
          <a :href=video.src>
            <img :src=video.img alt="описание" class="flex-none w-[300px] h-36 rounded-md object-cover"/>
          </a>
          <div class="flex flex-col pt-3 sm:pl-4 pb-3">
            <h3 class="text-xl text-gray-900">
              {{ video.name }}
            </h3>
            <p class="text-gray-400 text-sm mt-1">{{ video.category.name }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>