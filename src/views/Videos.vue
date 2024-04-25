<script setup lang="ts">
import {useVideosStore} from "../store/videos.ts";
import {useCategoriesStore} from "../store/categories.ts";
import {computed, ref} from "vue";

const videos = useVideosStore().getVideos
const categories = useCategoriesStore()
const setCategories = ref([]);
const setVideos = computed({
  get(){
    return videos
  },
  set(){
    if (setCategories){
    }
  }
})
</script>

<template>
  <div class="sm:container mt-12 w-screen mx-auto flex flex-row justify-between">
    <div class="container flex basis-2/5">
      <ul>
        <div v-for="(ctg, ind) in categories.getCategories" :key="ind"
              class="flex flex-row items-center justify-start gap-4 mt-4 p-2 border-b-2 border-r-2">
          <input type="checkbox" :value=ctg.id v-model="setCategories" :id=ctg.name>
          <li>
            <label :for=ctg.name>{{ctg.name}}</label>
          </li>
        </div>
      </ul>
    </div>

    <div class="container flex basis-3/5">
      <ul>
        <li v-for="(video, index) in setVideos" :key="index"
            class="container flex flex-row sm:w-max-[500px] md:w-max-[1000px] p-4 m-4 shadow-sm border rounded-md duration-300 hover:shadow-lg">
          <a :href=video.src>
            <img :src=video.img alt="описание" class="flex-none h-32 w-60 rounded-md object-cover"/>
          </a>
          <div class="flex flex-col pt-3 pl-4 pr-2 pb-3">
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