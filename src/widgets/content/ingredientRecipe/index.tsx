import { NumberDecrementStepper, NumberInputStepper } from '@chakra-ui/icons';
import {
    Flex,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    Text,
} from '@chakra-ui/react';
import { JSX, useState } from 'react';

import { ingredientListStyle } from '~/widgets/content/ingredientRecipe/style.tsx';

const IngredientList = ({ value }): JSX.Element => {
    const [portions, setPortions] = useState(1);

    const handlePortionsChange = (valueAsNumber: number) => {
        setPortions(valueAsNumber || 1);
    };

    return (
        <Flex sx={ingredientListStyle.wrapper}>
            <Flex sx={ingredientListStyle.header}>
                <Text pl={6} variant='ingredientListLabel'>
                    Ингредиенты
                </Text>
                <Flex sx={ingredientListStyle.portionsInput}>
                    <Text variant='ingredientListLabel'>Порций</Text>
                    <NumberInput
                        variant='ingredientListInput'
                        value={portions}
                        min={1}
                        max={20}
                        onChange={handlePortionsChange}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper data-test-id='increment-stepper' />
                            <NumberDecrementStepper data-test-id='decrement-stepper' />
                        </NumberInputStepper>
                    </NumberInput>
                </Flex>
            </Flex>

            <Flex sx={ingredientListStyle.list}>
                {value.map((item, i) => (
                    <Flex
                        key={item.title}
                        sx={{
                            ...ingredientListStyle.item,
                            bg: i % 2 === 0 ? 'gray.10' : 'transparent',
                        }}
                    >
                        <Text variant='ingredientListOptionLabel'>{item.title}</Text>
                        <Text
                            data-test-id='ingredient-quantity-${i}'
                            variant='ingredientListOptionValue'
                        >
                            {`${item.count * portions} ${item.measureUnit}`}
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export default IngredientList;
