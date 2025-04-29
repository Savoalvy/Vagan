import { Box, IconButton, Text } from '@chakra-ui/react';
import { FC, JSX } from 'react';

import CustomEditIcon from '~/assets/icons/recipe';
import { recipeStyle } from '~/components/buttons/Recipe/style.tsx';

const RecipeButton: FC = (): JSX.Element => (
    <IconButton
        icon={
            <Box>
                <CustomEditIcon />
                <Text position='absolute' top='140px' left='50%' transform='translateX(-50%)'>
                    Записать рецепт
                </Text>
            </Box>
        }
        sx={recipeStyle}
        aria-label='Open menu'
        position='relative'
    />
);

export default RecipeButton;
