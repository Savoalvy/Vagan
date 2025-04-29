import { Flex, Grid, Text } from '@chakra-ui/react';
import { JSX, useMemo } from 'react';
import { BsBookmarkHeart } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

import SmileIcon from '~/assets/icons/smile';
import { RECIPE_CONFIG } from '~/common/configs/RecipeConfig';
import ButtonComponent from '~/components/buttons/Buttons';
import { JUICIEST_PAGE_CONFIG } from '~/components/menuList/menuConfig';
import { searchQuerySelector, selectedItemsSelector } from '~/store/app-slice.ts';
import { useAppSelector } from '~/store/hooks.ts';
import CardComponent from '~/widgets/content/newReceipeBlock/slider/card';

import { juiciestStyle } from './style';

const JuiciestBlock = ({ count = 4, tabLabel = 'Самое сочное' }): JSX.Element => {
    const { pathname } = useLocation();
    const [category, subcategory] = pathname.split('/').filter(Boolean);
    const isMainPage = pathname === '/main';

    const selectedItems = useAppSelector(selectedItemsSelector);
    const searchQuery = useAppSelector(searchQuerySelector);

    const filteredCards = useMemo(
        () =>
            RECIPE_CONFIG.filter((recipe) => {
                const containsSelectedItems = selectedItems.some((selectedItem) =>
                    recipe.ingredients.some((ingredient) =>
                        ingredient.title?.toLowerCase().includes(selectedItem.toLowerCase()),
                    ),
                );

                if (isMainPage) {
                    const matchesSearch = searchQuery
                        ? recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          recipe.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          recipe.ingredients.some((ingredient) =>
                              ingredient.title?.toLowerCase().includes(searchQuery.toLowerCase()),
                          )
                        : true;

                    return !containsSelectedItems && matchesSearch;
                } else {
                    const matchesCategory = category && recipe.category?.includes(category);
                    const matchesSubcategory = subcategory
                        ? recipe.subcategory?.includes(subcategory)
                        : true;

                    const matchesSearch = searchQuery
                        ? recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
                        : true;

                    return (
                        matchesCategory &&
                        matchesSubcategory &&
                        !containsSelectedItems &&
                        matchesSearch
                    );
                }
            }),
        [category, subcategory, selectedItems, searchQuery, isMainPage],
    );

    const visibleCards = filteredCards.slice(0, count);

    return (
        <Flex sx={juiciestStyle.wrapper}>
            {isMainPage && (
                <Flex sx={juiciestStyle.wrapper.label}>
                    <Text sx={juiciestStyle.text}>{tabLabel}</Text>
                </Flex>
            )}
            <Grid sx={juiciestStyle.wrapper.cards}>
                {visibleCards.map((item) => (
                    <CardComponent
                        key={item.id}
                        variant='cardItem'
                        image={item.image}
                        label={item.title}
                        description={item.description}
                        category={{ label: item.category, value: item.category[0] }}
                        option={{ label: item.subcategory, value: item.subcategory[0] }}
                        id={item.id}
                        statistics={[
                            { icon: BsBookmarkHeart, value: item.bookmarks },
                            { icon: SmileIcon, value: item.likes },
                        ]}
                        recommended={item.recommended}
                        searchQuery={searchQuery}
                    />
                ))}
            </Grid>
            {isMainPage ? (
                <Flex sx={juiciestStyle.wrapper.footer}>
                    <ButtonComponent
                        data-test-id='juiciest-link-mobile'
                        navigateTo={JUICIEST_PAGE_CONFIG.value}
                    />
                </Flex>
            ) : (
                <ButtonComponent variantType='loadAll' />
            )}
        </Flex>
    );
};

export default JuiciestBlock;
