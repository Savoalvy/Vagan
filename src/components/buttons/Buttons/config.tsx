import { ArrowForwardIcon } from '@chakra-ui/icons';
import { ButtonProps, Icon, Text } from '@chakra-ui/react';
import { JSX } from 'react';
import { BsBookmarkHeart } from 'react-icons/bs';
import { FaUserPlus } from 'react-icons/fa';

import SmileIcon from '~/assets/icons/smile';
import { VariantType } from '~/components/buttons/Buttons/type.tsx';

export const buttonConfig: Record<
    VariantType,
    {
        children: JSX.Element;
        leftIcon?: JSX.Element;
        rightIcon?: JSX.Element;
        styleProps: ButtonProps;
    }
> = {
    default: {
        children: <Text>Вся подборка</Text>,
        rightIcon: <ArrowForwardIcon />,
        styleProps: {
            fontWeight: 600,
            lineHeight: '100%',
            bg: 'lime.400',
        },
    },
    save: {
        children: <Text display={{ base: 'none', md: 'inline' }}>Сохранить</Text>,
        leftIcon: <Icon as={BsBookmarkHeart} boxSize={{ base: '12px', bp3: '14px' }} />,
        styleProps: {
            variant: 'outline',
            borderColor: 'gray.150',
            color: 'gray.15',
            size: { base: 'xs', bp3: 'sm' },
            lineHeight: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            iconSpacing: { base: 0, md: 2 },
            paddingInlineStart: { base: '6px !important', md: '8px !important' },
            paddingInlineEnd: { base: '6px !important', md: '8px !important' },
        },
    },
    cook: {
        children: <Text>Готовить</Text>,
        styleProps: {
            bg: 'black',
            color: 'white',
            _hover: { bg: 'gray.800' },
            size: { base: 'xs', bp3: 'sm' },
            lineHeight: '100%',
        },
    },
    authors: {
        children: <Text>Все авторы</Text>,
        rightIcon: <ArrowForwardIcon />,
        styleProps: {
            fontWeight: 600,
            lineHeight: '100%',
            bg: 'lime.400',
        },
    },
    other: {
        children: <Text fontSize={{ base: '12px', bp2: '14px' }}>Готовить</Text>,
        styleProps: {
            variant: 'outline',
            borderColor: 'lime.500',
            color: 'lime.500',
            _hover: { bg: 'gray.800' },
            size: { base: 'xs', bp3: 'sm' },
            lineHeight: '100%',
        },
    },
    loadAll: {
        children: <Text>Загрузить еще</Text>,
        styleProps: {
            fontWeight: 600,
            lineHeight: '100%',
            bg: 'lime.400',
            h: '40px',
            w: '152px',
            m: '0 auto',
        },
    },
    likeRecipe: {
        children: <Text>Оценить рецепт</Text>,
        leftIcon: <Icon as={SmileIcon} />,
        styleProps: {
            fontWeight: 600,
            lineHeight: { base: '1.33', bp: '1.43', bp2: '1.56' },
            bg: 'transparent',
            variant: 'outline',
            size: { base: 'xs', bp: 'sm', bp2: 'lg' },
        },
    },
    saveInBookmark: {
        children: <Text>Сохранить в закладки</Text>,
        leftIcon: <Icon as={BsBookmarkHeart} />,
        styleProps: {
            fontWeight: 600,
            lineHeight: { base: '1.33', bp: '1.43', bp2: '1.56' },
            bg: 'lime.400',
            size: { base: 'xs', bp: 'sm', bp2: 'lg' },
        },
    },
    subscribe: {
        children: <Text>Подписатья</Text>,
        leftIcon: <Icon as={FaUserPlus} />,
        styleProps: {
            color: 'white',
            bg: 'black',
            fontWeight: 'semiBold',
            lineHeight: '1.33',
            size: 'xs',
        },
    },
    filterClear: {
        children: <Text>Очистить Фильтр</Text>,
        styleProps: {
            bg: 'white',
            color: 'Black',
            _hover: { bg: 'gray.800' },
            size: { base: 'xs', bp: '2xl' },
            lineHeight: '100%',
        },
    },
    filterSearch: {
        children: <Text>Найти рецепт</Text>,
        styleProps: {
            bg: 'Black',
            color: 'white',
            _hover: { bg: 'gray.800' },
            size: { base: 'xs', bp: '2xl' },
            lineHeight: '100%',
        },
    },
};
