import { GridItem } from '@chakra-ui/react';

import { mainPageStyle } from '~/pages/main/style.tsx';
import CookingBlogBlock from '~/widgets/content/cookingBlogBlock';
import IngredientBlock from '~/widgets/content/ingredientBlock';
import JuiciestBlock from '~/widgets/content/juiciestBlock';
import NewRecipeBlock from '~/widgets/content/newReceipeBlock';
import OtherBlock from '~/widgets/content/otherBlock';

const MainPage = () => (
    <GridItem sx={mainPageStyle}>
        <IngredientBlock />
        <NewRecipeBlock />
        <JuiciestBlock />
        <CookingBlogBlock />
        <OtherBlock />
    </GridItem>
);

export default MainPage;
