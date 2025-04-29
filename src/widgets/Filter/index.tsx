import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    VStack,
} from '@chakra-ui/react';
import { useEffect, useMemo } from 'react';

import { allergen, authors, categoryConfig } from '~/common/configs/multiselectConfigs.ts';
import { RECIPE_CONFIG } from '~/common/configs/recipeConfig.tsx';
import ButtonComponent from '~/components/buttons/Buttons';
import MultiSelect from '~/components/select/ui';
import Switcher from '~/components/switch';
import {
    clearFilters,
    clearSelectedItems,
    closeFilter,
    filterAuthorsSelector,
    filterCategorySelector,
    filterMeatSelector,
    filterSideSelector,
    filterSubcategorySelector,
    isFilterOpenSelector,
    isSwitchCheckedSelector,
    selectedItemsSelector,
    setFilterCategory,
    setFilterMeat,
    setFilterSide,
    setSwitchChecked,
} from '~/store/app-slice.ts';
import { useAppDispatch, useAppSelector } from '~/store/hooks.ts';
import TypeChecker from '~/widgets/Filter/typeCkecker';

const meatType = [
    {
        label: 'Курица',
        value: 'v1',
    },
    {
        label: 'Свинина',
        value: 'v2',
    },
    {
        label: 'Говядина',
        value: 'v3',
    },
    {
        label: 'Индейка',
        value: 'v4',
    },
    {
        label: 'Утка',
        value: 'v5',
    },
];
const sideType = [
    {
        label: 'Картошка',
        value: 'potatoes',
    },
    {
        label: 'Гречка',
        value: 'q',
    },
    {
        label: 'Паста',
        value: 'w',
    },
    {
        label: 'Спагетти',
        value: 'e',
    },
    {
        label: 'Рис',
        value: 'r',
    },
    {
        label: 'Капуста',
        value: 't',
    },
    {
        label: 'Фасоль',
        value: 'y',
    },
    {
        label: 'Другие овощи',
        value: 'u',
    },
];

const Filter = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(isFilterOpenSelector);
    const isSwitchChecked = useAppSelector(isSwitchCheckedSelector);

    const filterMeat = useAppSelector(filterMeatSelector);
    const filterSide = useAppSelector(filterSideSelector);
    const filterCategory = useAppSelector(filterCategorySelector);
    const filterAuthors = useAppSelector(filterAuthorsSelector);
    const filterSubcategory = useAppSelector(filterSubcategorySelector);
    const selectedItems = useAppSelector(selectedItemsSelector);

    const isFilterActive = useMemo(
        () =>
            filterMeat.length > 0 ||
            filterSide.length > 0 ||
            filterCategory.length > 0 ||
            filterSubcategory.length > 0 ||
            filterAuthors.length > 0 ||
            selectedItems.length > 0 ||
            isSwitchChecked, // Также учитываем состояние аллергена
        [
            filterMeat,
            filterSide,
            filterCategory,
            filterSubcategory,
            filterAuthors,
            selectedItems,
            isSwitchChecked,
        ],
    );

    // Глобальные логи для отслеживания состояния фильтров
    useEffect(() => {
        console.clear();
        console.log('%c🔎 Текущее состояние фильтров:', 'color: limegreen; font-weight: bold;');
        console.log('→ Мультиселект:', selectedItems);
        console.log('→ Категории:', filterCategory);
        console.log('→ Подкатегории:', filterSubcategory);
        console.log('→ Авторы:', filterAuthors);
        console.log('→ Тип мяса:', filterMeat);
        console.log('→ Гарнир:', filterSide);
        console.log('→ Аллергены активны:', isSwitchChecked);
    }, [
        filterCategory,
        filterSubcategory,
        filterAuthors,
        filterMeat,
        filterSide,
        isSwitchChecked,
        selectedItems,
    ]);

    const handleSwitchChange = () => {
        dispatch(setSwitchChecked(!isSwitchChecked));
        if (isSwitchChecked) {
            dispatch(clearSelectedItems());
        }
    };

    const handleClearFilters = () => {
        console.log('%c🧹 Очистка фильтров', 'color: orange; font-weight: bold;');
        dispatch(clearFilters());
        dispatch(clearSelectedItems());
        dispatch(setSwitchChecked(false));
    };

    const onClose = () => {
        dispatch(closeFilter());
    };

    const handleSelectMeat = (value: string) => {
        const updated = filterMeat.includes(value)
            ? filterMeat.filter((item) => item !== value)
            : [...filterMeat, value];
        console.log('🍖 Мясо выбрано:', updated);
        dispatch(setFilterMeat(updated));
    };

    const handleSelectSide = (value: string) => {
        const updated = filterSide.includes(value)
            ? filterSide.filter((item) => item !== value)
            : [...filterSide, value];
        console.log('🥗 Гарнир выбран:', updated);
        dispatch(setFilterSide(updated));
    };

    const filterRecipes = () => {
        const filtered = RECIPE_CONFIG.filter((recipe) => {
            // Мясо (если задано)
            if (filterMeat.length > 0 && (!recipe.meat || !filterMeat.includes(recipe.meat))) {
                return false;
            }

            // Гарнир (если задан)
            if (filterSide.length > 0 && (!recipe.side || !filterSide.includes(recipe.side))) {
                return false;
            }

            // Категория
            if (
                filterCategory.length > 0 &&
                !recipe.category.some((cat) => filterCategory.includes(cat))
            ) {
                return false;
            }
            // Подкатегория
            if (
                filterSubcategory.length > 0 &&
                (!recipe.subcategory ||
                    !filterSubcategory.some((sub) => recipe.subcategory.includes(sub)))
            ) {
                return false;
            }

            // Авторы — если рецепты будут иметь поле `author`
            if (
                filterAuthors.length > 0 &&
                (!recipe.author || !filterAuthors.includes(recipe.author))
            ) {
                return false;
            }

            // Пример для аллергена, если будет поле allergens
            if (isSwitchChecked && selectedItems.length > 0) {
                if (
                    !recipe.allergens ||
                    selectedItems.some((item) => recipe.allergens.includes(item))
                ) {
                    return false;
                }
            }

            return true; // если все условия соблюдены
        });

        console.log('🔍 Отфильтрованные рецепты:', filtered);
        // Здесь можешь диспатчить или сохранять результат

        onClose();
    };

    return (
        <Drawer data-test-id='filter-drawer' isOpen={isOpen} placement='right' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent borderRadius='12px' maxW='400px' p={4}>
                <DrawerHeader>Фильтры</DrawerHeader>
                <DrawerCloseButton />
                <DrawerBody>
                    <MultiSelect variant='authors' config={authors} />
                    <MultiSelect
                        data-test-id='filter-menu-button-категория'
                        variant='category'
                        config={categoryConfig}
                        onChange={(items) => dispatch(setFilterCategory(items))}
                    />
                    <TypeChecker
                        title='Тип Мяса:'
                        config={meatType}
                        selected={filterMeat}
                        onSelect={handleSelectMeat}
                    />
                    <TypeChecker
                        title='Тип Гарнира:'
                        config={sideType}
                        selected={filterSide}
                        onSelect={handleSelectSide}
                    />
                    <VStack>
                        <Switcher
                            data-test-id='allergens-switcher-filter'
                            isChecked={isSwitchChecked}
                            onChange={handleSwitchChange}
                        />
                        <MultiSelect
                            variant='allergen'
                            isDisabled={!isSwitchChecked}
                            config={allergen}
                        />
                    </VStack>
                </DrawerBody>
                <DrawerFooter>
                    <HStack spacing={4}>
                        <ButtonComponent
                            data-test-id='clear-filter-button'
                            variantType='filterClear'
                            onClick={handleClearFilters}
                        />
                        <ButtonComponent
                            data-test-id='find-recipe-button'
                            isDisabled={!isFilterActive}
                            variantType='filterSearch'
                            onClick={filterRecipes}
                        />
                    </HStack>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default Filter;
