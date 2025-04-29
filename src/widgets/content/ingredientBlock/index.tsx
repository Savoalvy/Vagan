// import { useLocation } from 'react-router-dom';
// import { HStack, VStack, Text } from '@chakra-ui/react';
// import IngredientButton from '~/components/buttons/Ingredient';
// import SearchField from '~/components/inputs/search';
// import Switcher from '~/components/switch';
// import { JUICIEST_PAGE_CONFIG, menuConfig } from '~/components/menuList/menuConfig.tsx';
// import { ingredientStyle } from '~/widgets/content/ingredientBlock/style.tsx';
// import {
//     isSwitchCheckedSelector,
//     selectedItemsSelector,
//     setSwitchChecked,
//     setSelectedItems,
//     clearSelectedItems,
//     setSearchQuery,
// } from '~/store/app-slice.ts';
// import { useAppDispatch, useAppSelector } from '~/store/hooks.ts';
// import { useMultiSelect } from '~/components/select/model/hooks.ts';
// import MultiSelect from '~/components/select/ui';
//
// const IngredientBlock = () => {
//     const { pathname } = useLocation();
//     const paths = pathname.split('/').filter(Boolean);
//     const allCategories = [...menuConfig, JUICIEST_PAGE_CONFIG];
//     const currentCategory = allCategories.find(
//         (item) => item.value === paths[0] || item.value === paths[1],
//     );
//
//     const labelText = currentCategory?.label || 'Приятного аппетита!';
//     const descriptionText = currentCategory?.text || '';
//
//     const dispatch = useAppDispatch();
//     const isSwitchChecked = useAppSelector(isSwitchCheckedSelector);
//     const selectedItemsFromStore = useAppSelector(selectedItemsSelector);
//
//     // ХУК, который работает внутри компонента
//     const { options, newOption, onSelect, onClear, onAddOption, onNewOptionChange } =
//         useMultiSelect(selectedItemsFromStore, (updatedSelectedItems) => {
//             dispatch(setSelectedItems(updatedSelectedItems));
//         });
//
//     const handleSwitchChange = () => {
//         dispatch(setSwitchChecked(!isSwitchChecked));
//         if (isSwitchChecked) {
//             dispatch(clearSelectedItems());
//         }
//     };
//
//     const handleSearch = (query: string) => {
//         dispatch(setSearchQuery(query));
//     };
//
//     return (
//         <VStack sx={ingredientStyle.wrapper}>
//             <VStack sx={ingredientStyle.labelPageWrapper}>
//                 <Text sx={ingredientStyle.label}>{labelText}</Text>
//                 <Text sx={ingredientStyle.text}>{descriptionText}</Text>
//             </VStack>
//             <VStack sx={ingredientStyle.fieldsWrapper}>
//                 <HStack sx={ingredientStyle.findItem}>
//                     <IngredientButton />
//                     <SearchField onSearch={handleSearch} />
//                 </HStack>
//                 <HStack sx={ingredientStyle.chooseItem}>
//                     <Switcher isChecked={isSwitchChecked} onChange={handleSwitchChange} />
//                     <MultiSelect
//                         isDisabled={!isSwitchChecked}
//                         selectedItems={selectedItemsFromStore}
//                         options={options}
//                         newOption={newOption}
//                         onSelect={onSelect}
//                         onClear={() => {
//                             onClear();
//                             dispatch(clearSelectedItems());
//                         }}
//                         onAddOption={onAddOption}
//                         onNewOptionChange={onNewOptionChange}
//                     />
//                 </HStack>
//             </VStack>
//         </VStack>
//     );
// };
//
// export default IngredientBlock;
import { HStack, Text, VStack } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import { allergen } from '~/common/configs/multiselectConfigs.ts';
import IngredientButton from '~/components/buttons/Ingredient';
import SearchField from '~/components/inputs/search';
import { JUICIEST_PAGE_CONFIG, menuConfig } from '~/components/menuList/menuConfig.tsx';
import MultiSelect from '~/components/select/ui';
import Switcher from '~/components/switch';
import {
    clearSelectedItems,
    isSwitchCheckedSelector,
    setSearchQuery,
    setSwitchChecked,
} from '~/store/app-slice.ts';
import { useAppDispatch, useAppSelector } from '~/store/hooks.ts';
import { ingredientStyle } from '~/widgets/content/ingredientBlock/style.tsx';

const IngredientBlock = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/').filter(Boolean);
    const allCategories = [...menuConfig, JUICIEST_PAGE_CONFIG];
    const currentCategory = allCategories.find(
        (item) => item.value === paths[0] || item.value === paths[1],
    );

    const labelText = currentCategory?.label || 'Приятного аппетита!';
    const descriptionText = currentCategory?.text || '';

    const dispatch = useAppDispatch();
    const isSwitchChecked = useAppSelector(isSwitchCheckedSelector);

    const handleSwitchChange = () => {
        dispatch(setSwitchChecked(!isSwitchChecked));
        if (isSwitchChecked) {
            dispatch(clearSelectedItems());
        }
    };

    const handleSearch = (query: string) => {
        dispatch(setSearchQuery(query));
    };

    return (
        <VStack sx={ingredientStyle.wrapper}>
            <VStack sx={ingredientStyle.labelPageWrapper}>
                <Text sx={ingredientStyle.label}>{labelText}</Text>
                <Text sx={ingredientStyle.text}>{descriptionText}</Text>
            </VStack>
            <VStack sx={ingredientStyle.fieldsWrapper}>
                <HStack sx={ingredientStyle.findItem}>
                    <IngredientButton data-test-id='filter-button' />
                    <SearchField data-test-id='search-input' onSearch={handleSearch} />
                </HStack>
                <HStack sx={ingredientStyle.chooseItem}>
                    <Switcher isChecked={isSwitchChecked} onChange={handleSwitchChange} />
                    <MultiSelect
                        variant='allergen'
                        isDisabled={!isSwitchChecked}
                        config={allergen}
                    />
                </HStack>
            </VStack>
        </VStack>
    );
};

export default IngredientBlock;
