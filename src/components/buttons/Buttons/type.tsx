import { ButtonProps } from '@chakra-ui/react';

export type VariantType =
    | 'default'
    | 'save'
    | 'cook'
    | 'authors'
    | 'other'
    | 'loadAll'
    | 'likeRecipe'
    | 'saveInBookmark'
    | 'subscribe'
    | 'filterClear'
    | 'filterSearch';

export interface CustomButtonProps extends ButtonProps {
    variantType?: VariantType;
}
