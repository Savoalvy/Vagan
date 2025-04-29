import { Flex, Text } from '@chakra-ui/react';

import SliderComponent from '~/widgets/content/newReceipeBlock/slider';
import { newRecipeStyle } from '~/widgets/content/newReceipeBlock/style.tsx';

const NewRecipeBlock = () => (
    <Flex sx={newRecipeStyle.wrapper}>
        <Text sx={newRecipeStyle.text}>Новые рецепты</Text>
        <SliderComponent />
    </Flex>
);

export default NewRecipeBlock;
