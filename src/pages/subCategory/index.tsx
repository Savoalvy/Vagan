import { Box, GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { menuConfig } from '~/components/menuList/menuConfig.tsx';
import TabComponent from '~/components/tab';
import { subCategoryPageStyle } from '~/pages/subCategory/style.tsx';
import IngredientBlock from '~/widgets/content/ingredientBlock';
import JuiciestBlock from '~/widgets/content/juiciestBlock';
import OtherBlock from '~/widgets/content/otherBlock';

const SubCategory = () => {
    const { category, option } = useParams();
    const categoryData = menuConfig.find((c) => c.value === category);
    const optionData = categoryData?.options?.find((o) => o.value === option);

    if (!categoryData || !optionData) return <Box>Подкатегория не найдена</Box>;

    return (
        <GridItem sx={subCategoryPageStyle}>
            <IngredientBlock />
            <TabComponent variant='categoryTabs' category={categoryData.value} />
            <JuiciestBlock count={8} tabLabel={optionData.label} />
            <OtherBlock />
        </GridItem>
    );
};

export default SubCategory;
