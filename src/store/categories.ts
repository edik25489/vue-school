import {defineStore} from "pinia"
import {computed} from "vue"
export const useCategoriesStore = defineStore('categories', () => {
    const categoryId = 0
    const category = [
        {
            id:1,
            name:'МДК 05.03 Тестирование ИС',
        },
        {
            id:2,
            name:'МДК 05.02 Разработка кода ИС',
        },
        {
            id:3,
            name:'МДК 05.01 Проектирование и дизайн ИС',
        },
        {
            id:4,
            name:'МДК 03.01 Моделирование и анализ программного обеспечения',
        },
        {
            id:5,
            name:'МДК 03.02 Управление проектами',
        },
        {
            id:6,
            name:'МДК. 06.02 Инженерно-техническая поддержка сопровождения ИС',
        },
        {
            id:7,
            name:'МДК. 06.03 Устройство и функционирование ИС',
        },
    ]
    const getCategories = computed(() => category)

    return { category, categoryId, getCategories }
})