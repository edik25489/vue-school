import {defineStore} from "pinia"
import {computed} from "vue"
export const useVideosStore = defineStore('videos', () => {
    const videoId = 0
    const video = [
        {
            id:1,
            name:'Тестирование ПО',
            author:'Алексей Маршал',
            img:'https://i.ytimg.com/vi/MmbVEwYnWTs/hqdefault.jpg',
            category:
                {
                    id:1,
                    name:'МДК 05.03 Тестирование ИС',
                },
            src:'https://www.youtube.com/playlist?list=PLZqgWWF4O-zg03RGSZ2GpHLE3BmO8bjKo'
        },
        {
            id:2,
            name:'Уроки С++ WinForms',
            author: 'Гоша Дударь',
            img:'https://i.ytimg.com/vi/TLqipry1o9s/hqdefault.jpg',
            category:
                {
                    id:2,
                    name:'МДК 05.02 Разработка кода ИС',
                },
            src: 'https://www.youtube.com/playlist?list=PL0lO_mIqDDFU4jqX2KAJkp7dfpc-IuKjB'
        },
        {
            id:3,
            name:'Основы проектирования информационных систем',
            author: 'Антон Крылов',
            img:'https://i.ytimg.com/vi/WxEnwrhRPT8/hqdefault.jpg',
            category:
                {
                    id:3,
                    name:'МДК 05.01 Проектирование и дизайн ИС',
                },
            src: 'https://www.youtube.com/playlist?list=PLHjf_xgnzc29YW7J7bGwik7aFTQ9UIAVq'
        },
        {
            id:4,
            name:'Моделирование и анализ',
            author: 'Computer Science Center',
            img:'https://i.ytimg.com/vi/SBiv10YP9jo/hqdefault.jpg',
            category:
                {
                    id:4,
                    name:'МДК 03.01 Моделирование и анализ программного обеспечения',
                },
            src: 'https://www.youtube.com/watch?v=SBiv10YP9jo'
        },
        {
            id:5,
            name:'Управление IT-проектами и продуктом',
            author: 'VK Team',
            img:'https://i.ytimg.com/vi/bVJSwGJolSs/hqdefault.jpg',
            category:
                {
                    id:5,
                    name:'МДК 03.02 Управление проектами',
                },
            src: 'https://www.youtube.com/playlist?list=PLrCZzMib1e9oUFO9saNfPAqBjpQW8v9I-'
        },
        {
            id:6,
            name:'Курс программирования 1С 8.3: обучение с нуля',
            author: 'Школа 1С - видеоуроки',
            img:'https://i.ytimg.com/vi/gXYUsQcT7JI/hqdefault.jpg',
            category:
                {
                    id:6,
                    name:'МДК. 06.02 Инженерно-техническая поддержка сопровождения ИС',
                },
            src: 'https://www.youtube.com/playlist?list=PL6Nx1KDcurkBdxssD1k56SDnwuTuX2bBr'
        },
        {
            id:7,
            name:'Устройство информационных систем',
            author: 'Сергей Шаров',
            img:'https://i.ytimg.com/vi/TF-M3vcDKJM/hqdefault.jpg',
            category:
                {
                    id:7,
                    name:'МДК. 06.03 Устройство и функционирование ИС',
                },
            src: 'https://www.youtube.com/playlist?list=PL-QABBoQ8p0xDRPon1Rcx8WICrssG4NBh'
        },
        {
            id:8,
            name:'Тестирование ПО',
            author:'ITiCat',
            img:'https://i.ytimg.com/vi/ZDwdTtIAiVM/hqdefault.jpg',
            category:
                {
                    id:1,
                    name:'МДК 05.03 Тестирование ИС',
                },
            src:'https://www.youtube.com/playlist?list=PLS9dXcT_a_6d7NZWaf29GanI57ZwzitP6'
        },
        {
            id:9,
            name:'Laravel курс. Интернет магазин',
            author: 'Laravel Creative',
            img:'https://i.ytimg.com/vi/07m88mgoIzA/hqdefault.jpg',
            category:
                {
                    id:2,
                    name:'МДК 05.02 Разработка кода ИС',
                },
            src: 'https://www.youtube.com/playlist?list=PLd2_Os8Cj3t9UEjGQHafQB751mf5cwqNv'
        },
        {
            id:10,
            name:'Изучение Figma с нуля - Создание дизайна (UI/UX)',
            author: 'Гоша Дударь',
            img:'https://i.ytimg.com/vi/kkThgsC1tnk/hqdefault.jpg',
            category:
                {
                    id:3,
                    name:'МДК 05.01 Проектирование и дизайн ИС',
                },
            src: 'https://www.youtube.com/playlist?list=PL0lO_mIqDDFXUJfMPcm1ezfcYSOHNNCZ4'
        },
        {
            id:11,
            name:'Создание динмического сайта',
            author: 'Гоша Дударь',
            img:'https://i.ytimg.com/vi/vxOEayKJNlk/hqdefault.jpg',
            category:
                {
                    id:4,
                    name:'МДК 03.01 Моделирование и анализ программного обеспечения',
                },
            src: 'https://www.youtube.com/playlist?list=PL0lO_mIqDDFUugI1DNHH634g-9MYU2gPR'
        },
        {
            id:12,
            name:'Курс лекций "Управление проектами"',
            author: 'SavitskiePary',
            img:'https://i.ytimg.com/vi/XuGdQdVRewo/hqdefault.jpg',
            category:
                {
                    id:5,
                    name:'МДК 03.02 Управление проектами',
                },
            src: 'https://www.youtube.com/playlist?list=PLY4sqf87HjedEyk0reom2i1Cjvf_yDzZZ'
        },
        {
            id:13,
            name:'Лекции по курсу "Инженерно-техническая поддержка сетей"',
            author: 'Дистанционные занятия МФТИ',
            img:'https://i.ytimg.com/vi/NzD4p7jzGKU/hqdefault.jpg',
            category:
                {
                    id:6,
                    name:'МДК. 06.02 Инженерно-техническая поддержка сопровождения ИС',
                },
            src: 'https://www.youtube.com/playlist?list=PLthfp5exSWErPFK_-EAhVtxO3XoY0gsSe'
        },
        {
            id:14,
            name:'Лекции курса "Устройство и функционирование информационных систем"',
            author: 'ФКН ВШЭ - дистанционные занятия',
            img:'https://i.ytimg.com/vi/NNfqpUp3nBo/hqdefault.jpg',
            category:
                {
                    id:7,
                    name:'МДК. 06.03 Устройство и функционирование ИС',
                },
            src: 'https://www.youtube.com/playlist?list=PLEwK9wdS5g0p7ihPzK8FXf_WZNNdrUbnm'
        },
    ]
    const getVideos = computed(() => video)

    return { video, videoId, getVideos }
})