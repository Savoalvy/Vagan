import React, { ComponentType } from 'react';

import DessertsBakingIcon from '~/assets/icons/menulist/dessertsBaking';
import DietaryFoodIcon from '~/assets/icons/menulist/dietaryFood';
import DrinksIcon from '~/assets/icons/menulist/drinks';
import FirstCoursesIcon from '~/assets/icons/menulist/firstCourses';
import GrillDishesIcon from '~/assets/icons/menulist/grillDishes';
import HomemadePreservesIcon from '~/assets/icons/menulist/homemadePreserves';
import KidsDishesIcon from '~/assets/icons/menulist/kidsDishes';
import MainCoursesIcon from '~/assets/icons/menulist/mainCourses';
import NationalCuisineIcon from '~/assets/icons/menulist/nationalCuisine';
import SaladsIcon from '~/assets/icons/menulist/salads';
import SaucesIcon from '~/assets/icons/menulist/sauces';
import SnacksIcon from '~/assets/icons/menulist/snacks';
import VeganDishesIcon from '~/assets/icons/menulist/veganDishes';

interface MenuConfig {
    label: string;
    value: string;
    text?: string;
    icon: ComponentType<React.SVGProps<SVGSVGElement>>;
    options: { label: string; value: string }[];
}

export const menuConfig: MenuConfig[] = [
    {
        label: 'Салаты',
        value: 'salads',
        icon: SaladsIcon,
        options: [
            { label: 'Мясные салаты', value: 'meat_salads' },
            { label: 'Рыбные салаты', value: 'fish_salads' },
            { label: 'Овощные салаты', value: 'vegetable_salads' },
            { label: 'Теплые салаты', value: 'warm_salads' },
        ],
    },
    {
        label: 'Закуски',
        value: 'snacks',
        icon: SnacksIcon,
        options: [
            { label: 'Мясные закуски', value: 'meat_snacks' },
            { label: 'Рыбные закуски', value: 'fish_snacks' },
            { label: 'Овощные закуски', value: 'vegetables' },
            { label: 'Теплые закуски', value: 'warm-snacks' },
            { label: 'Бутерброды', value: 'sandwiches' },
            { label: 'Фастфуд', value: 'fast_food' },
        ],
    },
    {
        label: 'Первые блюда',
        value: 'first_courses',
        icon: FirstCoursesIcon,
        options: [
            { label: 'Мясные супы', value: 'meat_soups' },
            { label: 'Овощные супы', value: 'vegetable_soups' },
            { label: 'Бульоны', value: 'broths' },
            { label: 'Холодные супы', value: 'cold_soups' },
            { label: 'Диетические супы', value: 'diet_soups' },
        ],
    },
    {
        label: 'Вторые блюда',
        value: 'second-dish',
        icon: MainCoursesIcon,
        options: [
            { label: 'Мясные', value: 'meat_dishes' },
            { label: 'Рыбные', value: 'fish_dishes' },
            { label: 'Овощные', value: 'vegetables' },
            { label: 'Из птицы', value: 'poultry-dish' },
            { label: 'Из грибов', value: 'mushroom_dishes' },
            { label: 'Из субпродуктов', value: 'offal_dishes' },
            { label: 'На пару', value: 'steamed_dishes' },
            { label: 'Пельмени, вареники', value: 'dumplings' },
            { label: 'Мучные гарниры', value: 'flour_sides' },
            { label: 'Овощные гарниры', value: 'vegetable_sides' },
            { label: 'Пицца', value: 'pizza' },
            { label: 'Суши', value: 'sushi' },
        ],
    },
    {
        label: 'Десерты, выпечка',
        value: 'desserts_baking',
        icon: DessertsBakingIcon,
        options: [
            { label: 'Блины и оладьи', value: 'pancakes' },
            { label: 'Пироги и пончики', value: 'pies_donuts' },
            { label: 'Торты', value: 'cakes' },
            { label: 'Рулеты', value: 'rolls' },
            { label: 'Кексы и маффины', value: 'muffins' },
            { label: 'Сырники и ватрушки', value: 'cheesecakes' },
            { label: 'Из слоеного теста', value: 'puff_pastry' },
            { label: 'Из заварного теста', value: 'choux_pastry' },
            { label: 'Из дрожжевого теста', value: 'yeast_pastry' },
            { label: 'Булочки и сдоба', value: 'buns' },
            { label: 'Хлеб', value: 'bread' },
            { label: 'Тесто на пиццу', value: 'pizza_dough' },
        ],
    },
    {
        label: 'Блюда на гриле',
        value: 'grill_dishes',
        icon: GrillDishesIcon,
        options: [
            { label: 'Говядина', value: 'beef_grill' },
            { label: 'Свинина', value: 'pork_grill' },
            { label: 'Птица', value: 'poultry_grill' },
            { label: 'Рыба', value: 'fish_grill' },
            { label: 'Грибы', value: 'mushrooms_grill' },
            { label: 'Овощи', value: 'vegetables_grill' },
        ],
    },
    {
        label: 'Веганская кухня',
        text: 'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
        value: 'vegan',
        icon: VeganDishesIcon,
        options: [
            { label: 'Закуски', value: 'snacks' },
            { label: 'Первые блюда', value: 'vegan_first_courses' },
            { label: 'Вторые блюда', value: 'second-dish' },
            { label: 'Гарниры', value: 'side-dishes' },
            { label: 'Десерты', value: 'vegan_desserts' },
            { label: 'Выпечка', value: 'vegan_baking' },
            { label: 'Сыроедческие блюда', value: 'raw_food' },
            { label: 'Напитки', value: 'vegan_drinks' },
        ],
    },
    {
        label: 'Детские блюда',
        value: 'kids_dishes',
        icon: KidsDishesIcon,
        options: [
            { label: 'Первые блюда', value: 'kids_first_courses' },
            { label: 'Вторые блюда', value: 'kids_main_courses' },
            { label: 'Гарниры', value: 'kids_sides' },
            { label: 'Выпечка', value: 'kids_baking' },
            { label: 'Без глютена', value: 'kids_gluten_free' },
            { label: 'Без сахара', value: 'kids_sugar_free' },
            { label: 'Без аллергенов', value: 'kids_allergen_free' },
            { label: 'Блюда для прикорма', value: 'baby_food' },
        ],
    },
    {
        label: 'Лечебное питание',
        value: 'dietary_food',
        icon: DietaryFoodIcon,
        options: [
            { label: 'Детская диета', value: 'kids_diet' },
            { label: 'Диета №1', value: 'diet_1' },
            { label: 'Диета №2', value: 'diet_2' },
            { label: 'Диета №3', value: 'diet_3' },
            { label: 'Диета №5', value: 'diet_5' },
            { label: 'Диета №6', value: 'diet_6' },
            { label: 'Диета №7', value: 'diet_7' },
            { label: 'Диета №8', value: 'diet_8' },
            { label: 'Диета №9', value: 'diet_9' },
            { label: 'Диета №10', value: 'diet_10' },
            { label: 'Диета №11', value: 'diet_11' },
            { label: 'Диета №12', value: 'diet_12' },
            { label: 'Диета №13', value: 'diet_13' },
            { label: 'Диета №14', value: 'diet_14' },
            { label: 'Без глютена', value: 'gluten_free' },
            { label: 'Без аллергенов', value: 'allergen_free' },
        ],
    },
    {
        label: 'Национальные',
        value: 'national',
        icon: NationalCuisineIcon,
        options: [
            { label: 'Американская кухня', value: 'american' },
            { label: 'Армянская кухня', value: 'armenian' },
            { label: 'Греческая кухня', value: 'greek' },
            { label: 'Грузинская кухня', value: 'georgian' },
            { label: 'Итальянская кухня', value: 'italian' },
            { label: 'Испанская кухня', value: 'spanish' },
            { label: 'Китайская кухня', value: 'chinese' },
            { label: 'Мексиканская кухня', value: 'mexican' },
            { label: 'Паназиатская кухня', value: 'pan_asian' },
            { label: 'Русская кухня', value: 'russian' },
            { label: 'Турецкая кухня', value: 'turkish' },
            { label: 'Французская кухня', value: 'french' },
            { label: 'Шведская кухня', value: 'swedish' },
            { label: 'Японская кухня', value: 'japanese' },
            { label: 'Другая кухня', value: 'other' },
        ],
    },
    {
        label: 'Соусы',
        value: 'sauces',
        icon: SaucesIcon,
        options: [
            { label: 'Соусы мясные', value: 'meat_sauces' },
            { label: 'Соусы сырные', value: 'cheese_sauces' },
            { label: 'Маринады', value: 'marinades' },
        ],
    },
    {
        label: 'Напитки',
        value: 'drinks',
        icon: DrinksIcon,
        options: [
            { label: 'Соки и фреши', value: 'juices' },
            { label: 'Смузи', value: 'smoothies' },
            { label: 'Компоты', value: 'compotes' },
            { label: 'Кисели', value: 'kissels' },
            { label: 'Кофе', value: 'coffee' },
            { label: 'Лечебный чай', value: 'herbal_tea' },
            { label: 'Квас', value: 'kvass' },
            { label: 'Коктейли', value: 'cocktails' },
            { label: 'Алкогольные', value: 'alcoholic' },
        ],
    },
    {
        label: 'Заготовки',
        value: 'homemade_preserves',
        icon: HomemadePreservesIcon,
        options: [
            { label: 'Мясные заготовки', value: 'meat_preserves' },
            { label: 'Рыбные заготовки', value: 'fish_preserves' },
            { label: 'Из огурцов', value: 'cucumber_preserves' },
            { label: 'Из томатов', value: 'tomato_preserves' },
            { label: 'Из грибов', value: 'mushroom_preserves' },
            { label: 'Овощные заготовки', value: 'vegetable_preserves' },
            { label: 'Салаты, икра', value: 'salads_caviar' },
            { label: 'Из фруктов и ягод', value: 'fruit_berry_preserves' },
        ],
    },
];

export const JUICIEST_PAGE_CONFIG = {
    label: 'Самое сочное',
    value: 'juiciest',
    options: [],
};
