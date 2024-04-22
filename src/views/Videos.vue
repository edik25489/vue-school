<script setup lang="ts">
import {useVideosStore} from "../store/videos.ts";
import {useCategoriesStore} from "../store/categories.ts";

const videos = useVideosStore()
const categories = useCategoriesStore()
</script>

<template>

  <div class="sm:container mt-12 max-w-md mx-auto flex flex-row justify-between">
    <div class="flex basis-1/5">
      <ul>
        <li v-for="(ctg, ind) in categories.getCategories" :key="ind">
          <p>{{ctg.name}}</p>
        </li>
      </ul>
    </div>
    <div class="flex basis-4/5">
      <ul class="flex flex-wrap">
        <li v-for="(video, index) in videos.getVideos" :key="index"
            class="flex flex-row max-w-md m-4 shadow-sm border rounded-md duration-300 hover:shadow-lg">
          <a :href=video.src>
            <img :src=video.img alt="описание" class="flex-none h-32 w-60 rounded-t-md object-cover"/>
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