import { Box, GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { JUICIEST_PAGE_CONFIG, menuConfig } from '~/components/menuList/menuConfig.tsx';
import { categoryPageStyle } from '~/pages/category/style.tsx';
import IngredientBlock from '~/widgets/content/ingredientBlock';
import JuiciestBlock from '~/widgets/content/juiciestBlock';
import OtherBlock from '~/widgets/content/otherBlock';

const CategoryPage = ({ overrideCategory }) => {
    const { category } = useParams();
    const categoryKey = overrideCategory || category;

    const categoryData =
        categoryKey === JUICIEST_PAGE_CONFIG.value
            ? JUICIEST_PAGE_CONFIG
            : menuConfig.find((c) => c.value === categoryKey);

    if (!categoryData) return <Box>Категория не найдена</Box>;

    return (
        <GridItem sx={categoryPageStyle}>
            <IngredientBlock />
            <JuiciestBlock count={8} tabLabel={categoryData.label} />
            <OtherBlock />
        </GridItem>
    );
};

export default CategoryPage;
