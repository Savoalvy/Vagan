import { IconButton } from '@chakra-ui/react';
import { FC, JSX } from 'react';

import IngredientIcon from '~/assets/icons/ingredient';
import { ingredientButtonStyle } from '~/components/buttons/Ingredient/style.tsx';
import { openFilter } from '~/store/app-slice.ts';
import { useAppDispatch } from '~/store/hooks.ts';

const IngredientButton: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    return (
        <IconButton
            onClick={() => dispatch(openFilter())}
            sx={ingredientButtonStyle}
            aria-label='biFilter'
        >
            <IngredientIcon />
        </IconButton>
    );
};

export default IngredientButton;
