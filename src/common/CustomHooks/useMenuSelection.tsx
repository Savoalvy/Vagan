import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { menuConfig } from '~/components/menuList/menuConfig';
import {
    selectedCategorySelector,
    selectedOptionSelector,
    setSelectedCategory,
    setSelectedOption,
} from '~/store/app-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

export const useMenuSelection = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const selectedCategory = useAppSelector(selectedCategorySelector);
    const selectedOption = useAppSelector(selectedOptionSelector);

    // Синхронизация с URL
    useEffect(() => {
        const pathParts = location.pathname.split('/');
        const category = pathParts[1];
        const option = pathParts[2];

        if (category && option) {
            dispatch(setSelectedCategory(category));
            dispatch(setSelectedOption(option));
        }
    }, [location.pathname, dispatch]);

    const selectCategory = (categoryValue: string) => {
        dispatch(setSelectedCategory(categoryValue));
        const firstOption = menuConfig.find((c) => c.value === categoryValue)?.options[0];
        if (firstOption) {
            dispatch(setSelectedOption(firstOption.value));
            navigate(`/${categoryValue}/${firstOption.value}`);
        }
    };

    const selectOption = (categoryValue: string, optionValue: string) => {
        dispatch(setSelectedCategory(categoryValue));
        dispatch(setSelectedOption(optionValue));
        navigate(`/${categoryValue}/${optionValue}`);
    };

    return {
        selectedCategory,
        selectedOption,
        selectCategory,
        selectOption,
    };
};
