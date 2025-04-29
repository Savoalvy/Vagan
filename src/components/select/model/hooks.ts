import { useToast } from '@chakra-ui/react';
import { useState } from 'react';

import { normalizeValue } from '~/components/select/model/helpers.ts';
import { selectedItemsSelector, setFilterCategory, setSelectedItems } from '~/store/app-slice.ts';
import { useAppDispatch, useAppSelector } from '~/store/hooks.ts';

import { VARIANTS } from './config';
import { Option } from './types';

export const useMultiSelect = (
    initialOptions: Option[],
    variant: 'default' | 'ingredients' | 'categories',
    onChange?: (items: string[]) => void, // <- добавь это
) => {
    const toast = useToast();
    const dispatch = useAppDispatch();
    const selectedItems = useAppSelector(selectedItemsSelector);

    const [options, setOptions] = useState<Option[]>(initialOptions);
    const [newOption, setNewOption] = useState('');

    const updateSelectedItems = (items: string[]) => {
        dispatch(setSelectedItems(items));
    };
    const onSelect = (item: string) => {
        const updated = VARIANTS[variant].handleSelect(selectedItems, item);
        updateSelectedItems(updated);

        if (variant === 'category') {
            dispatch(setFilterCategory(updated));
        }
    };
    const onClear = () => {
        updateSelectedItems([]);
    };

    const onAddOption = () => {
        if (!newOption.trim()) return;

        const trimmedLabel = newOption.trim();
        const newValue = normalizeValue(trimmedLabel);

        const exists = options.some(
            (opt) => opt.label.toLowerCase() === trimmedLabel.toLowerCase(),
        );

        if (exists) {
            toast({
                title: 'Такой аллерген уже существует.',
                status: 'warning',
                duration: 2000,
                isClosable: true,
                position: 'top-right',
            });
            setNewOption('');
            return;
        }

        const newEntry: Option = { label: trimmedLabel, value: newValue };
        setOptions((prev) => [...prev, newEntry]);
        updateSelectedItems([...selectedItems, newValue]);
        setNewOption('');
    };

    const onNewOptionChange = (value: string) => {
        setNewOption(value);
    };

    return {
        onChange,
        options,
        selectedItems,
        newOption,
        onSelect,
        onClear,
        onAddOption,
        onNewOptionChange,
    };
};
