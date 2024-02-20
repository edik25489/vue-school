import axios from "axios";

export default {
    state: {
        course: [],
        courses: [
            {
                id: 1393373,
                name: 'Алгебратор - часть 1 (Базовый уровень)',
                desc: 'Запланированная серия курсов "Алгебратор" предназначена для тех, кто хочет изучить или повторить базовую математику начиная с самых основ.',
                img: 'https://cdn.stepik.net/media/cache/images/courses/139373/cover_OEm2q0x/8628fcb03f3c0a5a0db5d465d071cf3f.png',
                about: [
                    {
                        name: 'О курсе',
                        desc: 'Данный курс - это попытка изложить материал по математике доступным языком без излишней академичности.'
                    },
                    {
                        name: 'Для кого этот курс',
                        desc: 'Курс предназначен для школьников и для людей желающих повторить базовые основы математики.'
                    },
                    {
                        name: 'Начальные требования',
                        desc: 'Знание таблицы умножения, умение делить и умножать в столбик. Самые непосильные требования в мире =)'
                    },
                ],
                teacher: [{
                    name: 'Кирилл Сазонов',
                    desc: 'С 2020 года занимаюсь педагогической деятельностью. Учитель математики и информатики.'
                }],
                program: [
                    {name: 'Введение', list: [{id: 1, name: 'Рекомендации и правила которые стоит соблюдать.'}]},

                    {
                        name: 'Обыкновенные дроби',
                        list: [
                            {id: 1, name: 'Что такое обыкновенная дробь?'},
                            {id: 2, name: 'Правильные и неправильные обыкновенные дроби'},
                            {id: 3, name: 'Смешанные обыкновенные дроби'},
                            {id: 4, name: 'Перевод из неправильной дроби в смешанную и обратно'},
                            {id: 5, name: 'Дробь равносильная данной'},
                            {id: 6, name: 'НОД и НОК'},
                            {id: 7, name: 'Сокращение обыкновенных дробей'},
                            {id: 8, name: 'Приведение дробей к общему знаменателю'},
                        ]
                    },

                    {
                        name: 'Десятичные дроби',
                        list: [
                            {id: 1, name: 'Понятие десятичной дроби'},
                            {id: 2, name: 'Сложение десятичных дробей'},
                            {id: 3, name: 'Вычитание десятичных дробей'},
                            {id: 4, name: 'Умножение десятичных дробей'},
                            {id: 5, name: 'Умножение десятичной дроби на 10, 100, 1000 и т.д.'},
                        ]
                    },

                    {
                        name: 'Целые числа',
                        list: [
                            {id: 1, name: 'Целые числа'},
                            {id: 2, name: 'Модуль'},
                            {id: 3, name: 'Расстояние между двумя точками числовой оси',},
                            {id: 4, name: 'Сложение целых чисел с разными знаками на координатной оси'},
                            {id: 5, name: 'Сложение целых чисел с одинаковыми знаками'},
                        ],
                    },

                    {
                        name: 'Рациональные числа',
                        list: [
                            {id: 1, name: 'Сложение целых чисел с одинаковыми знаками'},
                            {id: 2, name: 'Сложение обыкновенных и смешанных дробей с разными знаками'},
                            {id: 3, name: 'Сложение отрицательных обыкновенных и смешанных дробей'},
                            {id: 4, name: 'Вычитание обыкновенных дробей с одинаковыми и разными знаками'},
                            {id: 5, name: 'Умножение и деление дробей с одинаковыми и разными знаками'},
                        ],
                    },

                    {
                        name: 'Отношения, пропорции',
                        list: [
                            {id: 1, name: 'Отношения'},
                            {id: 2, name: 'Пропорции'},
                            {id: 3, name: 'Прямая пропорциональность'},
                            {id: 4, name: 'Обратная пропорциональность'},
                        ]
                    },
                ],
            }
        ],
    },
    mutations: {
        updateCourse(state, course) {
            state.course = course
        },

    },
    actions: {},
    getters: {
        getCourses: function (state) {
            return state.courses
        },
        getCourse: function (state) {
            return state.course
        },
    },
}
