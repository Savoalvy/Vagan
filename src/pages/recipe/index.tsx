import { Flex, GridItem, Text, VStack } from '@chakra-ui/react';
import { BsBookmarkHeart } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

import SmileIcon from '~/assets/icons/smile';
import { RECIPE_CONFIG } from '~/common/configs/recipeConfig.tsx';
import { recipePageStyle } from '~/pages/recipe/style.tsx';
import AuthorRecipe from '~/widgets/content/authorRecipe';
import IngredientList from '~/widgets/content/ingredientRecipe';
import NewRecipeBlock from '~/widgets/content/newReceipeBlock';
import CardComponent from '~/widgets/content/newReceipeBlock/slider/card';
import Nutrition from '~/widgets/content/nutritionRecipe';

const RecipePage = () => {
    const { id } = useParams();
    const recipe = RECIPE_CONFIG.find((recipe) => recipe.id === id);
    return (
        <GridItem sx={recipePageStyle}>
            <Flex
                sx={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { bp: 10, base: 6 },
                    p: { base: '16px 16px 40px 16px', bp1: '16px 20px 40px 20px', ml: '56px 0px' },
                }}
            >
                <CardComponent
                    variant='recipeCard'
                    time={recipe?.time}
                    image={recipe?.image}
                    label={recipe?.title}
                    description={recipe?.description}
                    category={{ label: recipe?.category }}
                    statistics={[
                        { icon: BsBookmarkHeart, value: recipe?.bookmarks },
                        { icon: SmileIcon, value: recipe?.likes },
                    ]}
                />
                <Nutrition value={recipe?.nutritionValue} />
                <IngredientList value={recipe?.ingredients} />
                <VStack sx={recipePageStyle.stepsWrapper}>
                    <Text variant='stepsLabel'>Шаги приготовления</Text>
                    {recipe?.steps.map((item, index, array) => (
                        <CardComponent
                            variant='stepCard'
                            key={index}
                            steps={item.stepNumber}
                            description={item.description}
                            image={item.image}
                            isLastStep={index === array.length - 1}
                        />
                    ))}
                </VStack>
                <AuthorRecipe />
            </Flex>
            <NewRecipeBlock />
        </GridItem>
    );
};

export default RecipePage;
