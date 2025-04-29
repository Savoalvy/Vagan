import { Stack } from '@chakra-ui/icons';
import { Card, Flex, Highlight, HStack, Image, Text } from '@chakra-ui/react';
import { JSX } from 'react';
import { BsAlarm } from 'react-icons/bs';

import ButtonComponent from '~/components/buttons/Buttons';
import { menuConfig } from '~/components/menuList/menuConfig.tsx';
import CategoryComponent from '~/widgets/content/newReceipeBlock/slider/card/categoryTab';
import {
    cardBaseStyle,
    cardVariants,
} from '~/widgets/content/newReceipeBlock/slider/card/style.tsx';
import UserRecommendedComponent from '~/widgets/content/userRecomendation';
import StatisticComponent from '~/widgets/header/statistic';

const CardComponent = ({
    image,
    label,
    steps,
    description,
    category,
    option,
    isLastStep,
    id,
    time,
    searchQuery = '',
    statistics = [],
    recommended,
    variant = 'slider',
    sx = {},
    ...rest
}): JSX.Element => {
    const base = cardBaseStyle;
    const variantStyle = variant !== 'base' ? (cardVariants[variant] ?? {}) : {};

    const combinedStyles = {
        wrapper: { ...base.wrapper, ...variantStyle.wrapper, ...sx },
        image: { ...base.image, ...variantStyle.image },
        description: { ...variantStyle.description },
        label: { ...base.textLabel, ...variantStyle.label },
        text: { ...base.textDescription, ...variantStyle.text },
        infoBlock: { ...base.description, ...variantStyle.infoBlock },
        category: { ...base.category, ...variantStyle.category },
        categoryTabWrapper: { ...variantStyle.categoryTabWrapper },
        categoryTab: variantStyle.categoryTab ?? {},
        buttons: variantStyle.buttons ?? {},
        recommended: base.recommended,
    };
    const getCategoryInfo = (categoryValue) => {
        const foundCategory = menuConfig.find((item) => item.value === categoryValue);
        return {
            label: foundCategory?.label,
            icon: foundCategory?.icon,
        };
    };

    return (
        <Card sx={combinedStyles.wrapper} {...rest}>
            {variant === 'cardItem' && recommended && (
                <UserRecommendedComponent sx={combinedStyles.recommended} />
            )}

            {image && (
                <Flex sx={combinedStyles.image}>
                    <Image
                        src={image}
                        alt='Изображение'
                        objectFit='cover'
                        objectPosition='center'
                        width='100%'
                        height='100%'
                        transition='all 0.3s ease'
                    />
                </Flex>
            )}

            <Flex
                sx={{
                    ...combinedStyles?.description,
                    ...(variant === 'stepCard' &&
                        image && {
                            minH: '128px',
                            flex: { base: 1, bp1: 0.73, bp: 0.4, bp2: 1 },
                        }),
                }}
            >
                {(label || description) && (
                    <Flex sx={combinedStyles.infoBlock}>
                        {variant === 'stepCard' && (
                            <CategoryComponent
                                sx={{
                                    ...combinedStyles.categoryTab,
                                    bg: isLastStep ? 'lime.50' : 'gray.10',
                                }}
                                description={`Шаг ${steps}`}
                            />
                        )}
                        {label && (
                            <Text sx={combinedStyles.label}>
                                <Highlight
                                    query={searchQuery}
                                    styles={{
                                        color: 'lime.500',
                                    }}
                                >
                                    {label}
                                </Highlight>
                            </Text>
                        )}
                        {description && <Text sx={combinedStyles.text}>{description}</Text>}
                    </Flex>
                )}

                {(category || statistics.length > 0) && (
                    <Flex sx={combinedStyles.category}>
                        <Stack sx={combinedStyles.categoryTabWrapper}>
                            {category?.label && (
                                <>
                                    {Array.isArray(category.label) ? (
                                        category.label.map((item, index) => (
                                            <CategoryComponent
                                                key={index}
                                                sx={combinedStyles.categoryTab}
                                                icon={getCategoryInfo(item)?.icon}
                                                description={getCategoryInfo(item)?.label}
                                            />
                                        ))
                                    ) : (
                                        <CategoryComponent
                                            sx={combinedStyles.categoryTab}
                                            icon={category.icon}
                                            description={category.label}
                                        />
                                    )}
                                </>
                            )}
                        </Stack>
                        {statistics.length > 0 && (
                            <StatisticComponent variant='card' config={statistics} />
                        )}
                    </Flex>
                )}

                {variant === 'cardItem' && (
                    <Flex sx={combinedStyles.buttons}>
                        <ButtonComponent variantType='save' />
                        <ButtonComponent
                            variantType='cook'
                            navigateTo={`/${category?.value}/${option?.value}/${id}`}
                            data-test-id='card-link-${i}'
                        />
                    </Flex>
                )}
                {variant === 'recipeCard' && (
                    <Flex sx={combinedStyles.buttons}>
                        <CategoryComponent
                            sx={{ ...combinedStyles.categoryTab, bg: 'gray.10' }}
                            icon={BsAlarm}
                            description={time}
                        />
                        <HStack gap={{ base: 3, bp2: 4 }}>
                            <ButtonComponent variantType='likeRecipe' />
                            <ButtonComponent variantType='saveInBookmark' />
                        </HStack>
                    </Flex>
                )}
            </Flex>
        </Card>
    );
};

export default CardComponent;
