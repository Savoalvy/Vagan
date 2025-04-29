import { Flex, Text } from '@chakra-ui/react';
import { JSX } from 'react';

import { nutritionStyle } from '~/widgets/content/nutritionRecipe/style.tsx';

const Nutrition = ({ value }): JSX.Element => {
    const nutritionData = [
        { name: 'Калорийность', value: value.calories, unit: 'ккал' },
        { name: 'Белки', value: value.proteins, unit: 'грамм' },
        { name: 'Жиры', value: value.fats, unit: 'грамм' },
        { name: 'Углеводы', value: value.carbohydrates, unit: 'грамм' },
    ];

    return (
        <Flex sx={nutritionStyle.wrapper}>
            <Text variant='nutritionCaption'>* Калорийность на 1 порцию</Text>
            <Flex sx={nutritionStyle.container}>
                {nutritionData.map((item) => (
                    <Flex sx={nutritionStyle.item} key={item.name}>
                        <Text variant='nutritionLabel'>{item.name.toLowerCase()}</Text>
                        <Text variant='nutritionValue'>{item.value}</Text>
                        <Text variant='nutritionUnit'>{item.unit.toUpperCase()}</Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export default Nutrition;
