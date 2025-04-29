import ChoiceIcon from '~/assets/icons/choice';
import MainCoursesIcon from '~/assets/icons/menulist/mainCourses';
import SmileIcon from '~/assets/icons/smile';

export const OTHER_CARD_CONFIG = [
    {
        label: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        category: 'Вторые блюда',
        icon: MainCoursesIcon,
        statistic: [
            {
                statisticIcon: ChoiceIcon,
                statisticValue: '1',
            },
            {
                statisticIcon: SmileIcon,
                statisticValue: '12',
            },
        ],
    },
    {
        label: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        category: 'Вторые блюда',
        icon: MainCoursesIcon,
        statistic: [
            {
                statisticIcon: ChoiceIcon,
                statisticValue: '1',
            },
            {
                statisticIcon: SmileIcon,
                statisticValue: '12',
            },
        ],
    },
];

export const OTHER_ITEMS_CONFIG = [
    {
        name: 'Стейк для вегетарианцев',
        icon: MainCoursesIcon,
    },
    {
        name: 'Котлеты из гречки и фасоли',
        icon: MainCoursesIcon,
    },
    {
        name: 'Сырный суп с лапшой и брокколи',
        icon: MainCoursesIcon,
    },
];
