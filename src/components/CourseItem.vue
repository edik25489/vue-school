<script setup lang="ts">
defineProps({
  course: Object
})
import {onMounted} from "vue"
import {initFlowbite} from "flowbite"
onMounted(() => {
  initFlowbite()
})

</script>

<template>
  <div class="container flex mt-1 md:flex-row flex-col items-center justify-around bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="m-2 object-cover w-full rounded-t-lg h-40 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" :src=course.img alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{course.name}}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{course.desc}}
      </p>
    </div>
  </div>

  <section class='py-14'>
    <div class="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
      <div class='flex-1 md:mt-0'>
        <ul class='space-y-4 divide-y'>
          <li class="bg-white p-5 rounded-md border border-t-gray-400" v-for="(item, index) in course.about" :key="index">
            <summary class="flex items-center justify-between font-semibold text-gray-700">
              {{ item.name }}
            </summary>
            <p class='mt-3 text-gray-600 leading-relaxed' v-html="item.desc"></p>
          </li>
        </ul>
        <ul class='space-y-4 divide-y mt-3'>
          <li class="bg-white p-5 rounded-md border border-t-gray-400" v-for="(item, index) in course.teacher" :key="index">
            <summary class="flex items-center justify-between text-xl font-bold text-gray-700">
              Наши преподаватели: {{ item.name }}
            </summary>
            <p class='mt-3 text-gray-600 leading-relaxed' v-html="item.desc"></p>
          </li>
        </ul>
      </div>
      <div class='flex-1'>
        <div class="max-w-lg">
            <div class="max-w-screen-xl mx-auto text-gray-600">
              <div class="bg-white flex flex-col items-stretch rounded-xl border-2">
                  <ul v-for="(plan, index) in course.program" :key="index" class='p-8 space-y-3'>
                    <li class="pb-2 text-gray-800 font-medium">
                      {{plan.name}}
                    </li>
                    <li v-for="(feature, featureIndex) in plan.list" :key="featureIndex"
                        class='flex items-center gap-5'>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5 13l4 4L19 7" />
                      </svg>
                      {{ feature.name }}
                    </li>
                  </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
<div class="flex justify-center items-center">
  <a :href="course.src" target="_blank" class="block py-2 px-6 border hover:border-teal-500 hover:text-teal-500 rounded-2xl bg-teal-500 hover:bg-white text-white transform duration-200 ease-linear">Перейти на курс</a>
</div>
</template>

<style scoped>

</style>