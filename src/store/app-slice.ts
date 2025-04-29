import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';

export type AppState = typeof initialState;

const initialState = {
    isLoading: false,
    error: '' as string | null,
    selectedCategory: '',
    selectedOption: '',
    isBurgerOpen: false,
    isFilterOpen: false,
    isSwitchChecked: false,
    selectedItems: [],
    searchQuery: '',
    filterCategory: [] as string[],
    filterSubcategory: [] as string[],
    filterAuthors: [] as string[],
    filterMeat: [] as string[],
    filterSide: [] as string[],
};
export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppError(state, { payload: error }: PayloadAction<string | null>) {
            state.error = error;
        },
        setAppLoader(state, { payload: isLoading }: PayloadAction<boolean>) {
            state.isLoading = isLoading;
        },
        setSelectedCategory(state, { payload }: PayloadAction<string>) {
            state.selectedCategory = payload;
        },
        setSelectedOption(state, { payload }: PayloadAction<string>) {
            state.selectedOption = payload;
        },
        openBurger(state) {
            state.isBurgerOpen = true;
        },
        closeBurger(state) {
            state.isBurgerOpen = false;
        },
        toggleBurger(state) {
            state.isBurgerOpen = !state.isBurgerOpen;
        },
        openFilter(state) {
            state.isFilterOpen = true;
        },
        closeFilter(state) {
            state.isFilterOpen = false;
        },
        toggleFilter(state) {
            state.isFilterOpen = !state.isFilterOpen;
        },
        setSwitchChecked(state, { payload }: PayloadAction<boolean>) {
            state.isSwitchChecked = payload;
        },
        clearSelectedItems(state) {
            state.selectedItems = [];
        },
        setSelectedItems(state, { payload }: PayloadAction<string[]>) {
            state.selectedItems = payload;
        },
        // Редьюсер для обновления состояния поиска
        setSearchQuery(state, { payload }: PayloadAction<string>) {
            state.searchQuery = payload;
        },
        clearSearchQuery(state) {
            state.searchQuery = ''; // Очищаем поисковый запрос
        },
        // Редьюсеры для фильтров
        setFilterCategory(state, { payload }: PayloadAction<string>) {
            state.filterCategory = payload;
        },
        setFilterSubcategory(state, { payload }: PayloadAction<string[]>) {
            state.filterSubcategory = payload;
        },
        setFilterAuthors(state, { payload }: PayloadAction<string[]>) {
            state.filterAuthors = payload;
        },
        setFilterMeat(state, { payload }: PayloadAction<string[]>) {
            state.filterMeat = payload;
        },
        setFilterSide(state, { payload }: PayloadAction<string[]>) {
            state.filterSide = payload;
        },
        clearFilters(state) {
            state.filterCategory = [];
            state.filterSubcategory = [];
            state.filterAuthors = [];
            state.filterMeat = [];
            state.filterSide = [];
        },
    },
});
export const userLoadingSelector = (state: ApplicationState) => state.app.isLoading;
export const userErrorSelector = (state: ApplicationState) => state.app.error;
export const selectedCategorySelector = (state: ApplicationState) => state.app.selectedCategory;
export const selectedOptionSelector = (state: ApplicationState) => state.app.selectedOption;
export const isBurgerOpenSelector = (state: ApplicationState) => state.app.isBurgerOpen;
export const isFilterOpenSelector = (state: ApplicationState) => state.app.isFilterOpen;
export const isSwitchCheckedSelector = (state: ApplicationState) => state.app.isSwitchChecked;
export const selectedItemsSelector = (state: ApplicationState) => state.app.selectedItems;
export const searchQuerySelector = (state: ApplicationState) => state.app.searchQuery; // Селектор для поиска
// Селекторы фильтров
export const filterCategorySelector = (state: ApplicationState) => state.app.filterCategory;
export const filterSubcategorySelector = (state: ApplicationState) => state.app.filterSubcategory;
export const filterAuthorsSelector = (state: ApplicationState) => state.app.filterAuthors;
export const filterMeatSelector = (state: ApplicationState) => state.app.filterMeat;
export const filterSideSelector = (state: ApplicationState) => state.app.filterSide;

export const {
    setAppError,
    setAppLoader,
    setSelectedCategory,
    setSelectedOption,
    openBurger,
    closeBurger,
    toggleBurger,
    openFilter,
    closeFilter,
    toggleFilter,
    setSwitchChecked,
    clearSelectedItems,
    setSelectedItems,
    setSearchQuery, // Экспортируем действия
    clearSearchQuery,
    // Экспортируем экшены фильтров
    setFilterCategory,
    setFilterSubcategory,
    setFilterAuthors,
    setFilterMeat,
    setFilterSide,
    clearFilters,
} = appSlice.actions;
export default appSlice.reducer;
