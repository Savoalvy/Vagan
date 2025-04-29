import { ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Checkbox,
    HStack,
    Icon,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    Wrap,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React, { JSX, useMemo } from 'react';
import { IoAddCircleSharp } from 'react-icons/io5';

import { VARIANTS } from '~/components/select/model/config.ts';
import { useMultiSelect } from '~/components/select/model/hooks.ts';
import { selectorStyle } from '~/components/select/ui/style.tsx';
import TagComponent from '~/components/tag';

import { MultiSelectProps } from '../model/types';

const MultiSelect = ({ isDisabled, variant, config }: MultiSelectProps): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [hovered, setHovered] = React.useState(false);

    const { options, selectedItems, newOption, onSelect, onClear, onNewOptionChange, onAddOption } =
        useMultiSelect(config, variant);

    const selectedTags = useMemo(
        () =>
            selectedItems.map((item) => {
                console.log('item', item);
                const option = options.find((option) => option.value === item);
                console.log('option', option);
                return option ? <TagComponent key={item} val={item} label={option.label} /> : null;
            }),
        [selectedItems, options],
    );

    console.log('selectedItems', selectedItems);

    const isSelected = (item: string) => selectedItems.includes(item);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onAddOption();
        }
    };

    const showClearIcon = selectedItems.length > 0 && hovered;

    const variantLabel = VARIANTS[variant]?.label || 'Выберите вариант...';

    return (
        <Menu gutter={0} closeOnSelect={false} onOpen={onOpen} onClose={onClose}>
            <MenuButton
                data-test-id='allergens-menu-button'
                data-test-id='allergens-menu-button-filter'
                as={Button}
                isDisabled={isDisabled}
                sx={selectorStyle.wrapper}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                rightIcon={
                    showClearIcon ? (
                        <Icon
                            as={CloseIcon}
                            color='#2d3748'
                            p={1}
                            onClick={(e) => {
                                e.stopPropagation();
                                onClear();
                            }}
                            cursor='pointer'
                        />
                    ) : (
                        <Icon
                            as={ChevronDownIcon}
                            boxSize={5}
                            transition='transform 0.2s'
                            transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                        />
                    )
                }
            >
                {selectedItems.length > 0 ? (
                    <Wrap sx={selectorStyle.tagWrapper}>{selectedTags}</Wrap>
                ) : (
                    <Text
                        fontWeight='normal'
                        fontSize='md'
                        lineHeight='1.5'
                        color='gray.100'
                        textAlign='start'
                    >
                        {variantLabel}
                    </Text>
                )}
            </MenuButton>

            <MenuList
                data-test-id='allergens-menu'
                py={1}
                sx={selectorStyle.menuList}
                zIndex={9999}
                overflowY='auto'
            >
                {options.map(({ value, label }, i) => (
                    <MenuItem
                        key={value}
                        bg={i % 2 === 0 ? 'gray.10' : 'transparent'}
                        p={0}
                        _hover={{ bg: 'gray.70' }}
                    >
                        <Checkbox
                            data-test-id='allergen-${i}'
                            data-test-id='allergen-${i}'
                            data-test-id='checkbox-веганская кухня'
                            data-test-id='checkbox-картошка'
                            isChecked={isSelected(value)}
                            onChange={() => onSelect(value)}
                            iconColor='black'
                            w='100%'
                            h={8}
                            pl={4}
                            size='sm'
                            borderColor='lime.150'
                            sx={{
                                bg: i % 2 === 0 ? 'gray.10' : 'transparent',
                                '& .chakra-checkbox__control': {
                                    borderColor: 'lime.150',
                                    _hover: { bg: 'transparent', borderColor: 'lime.400' },
                                    _checked: { bg: 'lime.400', borderColor: 'lime.400' },
                                },
                            }}
                        >
                            <Text sx={selectorStyle.menuText}>{label}</Text>
                        </Checkbox>
                    </MenuItem>
                ))}

                {variantLabel === 'Выберите из списка...' && (
                    <Box h={12} p='8px 8px 8px 24px'>
                        <HStack w='full' h='full' gap={2}>
                            <Input
                                data-test-id='add-other-allergen'
                                data-test-id='add-other-allergen'
                                placeholder='Добавить аллерген...'
                                value={newOption}
                                onChange={(e) => onNewOptionChange?.(e.target.value)}
                                onKeyDown={handleKeyDown}
                                onClick={(e) => e.stopPropagation()}
                                size='sm'
                                isDisabled={isDisabled}
                                sx={{
                                    _placeholder: { color: 'lime.800' },
                                    borderColor: 'gray.12',
                                    _focus: { borderColor: 'gray.12', boxShadow: 'none' },
                                    _active: { borderColor: 'gray.12', boxShadow: 'none' },
                                    _hover: { borderColor: 'gray.12', boxShadow: 'none' },
                                    borderRadius: '4px',
                                }}
                            />
                            <Icon
                                data-test-id='add-allergen-button'
                                data-test-id='add-allergen-button'
                                as={IoAddCircleSharp}
                                p={1}
                                cursor='pointer'
                                color='lime.500'
                                boxSize={6}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onAddOption();
                                }}
                            />
                        </HStack>
                    </Box>
                )}
            </MenuList>
        </Menu>
    );
};

export default MultiSelect;
