import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';

import { searchStyle } from '~/components/inputs/search/style.tsx';
import { useAppSelector } from '~/store/hooks.ts';

interface SearchFieldProps {
    onSearch: (query: string) => void;
}

const SearchField = ({ onSearch }: SearchFieldProps) => {
    const searchQuery = useAppSelector((state) => state.app.searchQuery);
    const [inputValue, setInputValue] = useState(searchQuery);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && inputValue.length >= 3) {
            onSearch(inputValue);
        }
    };

    const handleSearchClick = () => {
        if (inputValue.length >= 3) {
            onSearch(inputValue);
        }
    };

    const handleClearClick = () => {
        setInputValue('');
        onSearch(''); // Можно сразу сбросить поиск
    };

    const isSearchEnabled = inputValue.length >= 3;
    const hasValue = inputValue.length > 0;

    return (
        <InputGroup sx={searchStyle}>
            <Input
                sx={searchStyle.input}
                placeholder='Название или ингредиент...'
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <InputRightElement sx={searchStyle.inputIcon}>
                <Flex>
                    {hasValue && (
                        <IconButton
                            aria-label='Clear search'
                            icon={<CloseIcon />}
                            size='sm'
                            onClick={handleClearClick}
                            variant='ghost'
                        />
                    )}
                    <IconButton
                        data-test-id='search-button'
                        aria-label='Search'
                        icon={<SearchIcon />}
                        size='sm'
                        onClick={handleSearchClick}
                        isDisabled={!isSearchEnabled}
                        variant='ghost'
                    />
                </Flex>
            </InputRightElement>
        </InputGroup>
    );
};

export default SearchField;
