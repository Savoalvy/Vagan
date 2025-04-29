import { Checkbox, Text, VStack } from '@chakra-ui/react';
import { JSX } from 'react';

import { selectorStyle } from '~/components/select/ui/style.tsx';

interface TypeCheckerProps {
    title: string;
    config: { value: string; label: string }[];
    selected: string[];
    onSelect: (value: string) => void;
}

const TypeChecker = ({ title, config, selected, onSelect }: TypeCheckerProps): JSX.Element => (
    <VStack align='stretch' spacing={0}>
        {title && (
            <Text fontWeight='bold' mb={2}>
                {title}
            </Text>
        )}
        {config.map(({ value, label }, index) => (
            <Checkbox
                key={value}
                isChecked={selected.includes(value)}
                onChange={() => onSelect(value)}
                iconColor='black'
                w='100%'
                h={8}
                pl={4}
                size='sm'
                borderColor='lime.150'
                bg={index % 2 === 0 ? 'gray.10' : 'transparent'}
                sx={{
                    '& .chakra-checkbox__control': {
                        borderColor: 'lime.150',
                        _hover: { bg: 'transparent', borderColor: 'lime.400' },
                        _checked: { bg: 'lime.400', borderColor: 'lime.400' },
                    },
                }}
            >
                <Text sx={selectorStyle.menuText}>{label}</Text>
            </Checkbox>
        ))}
    </VStack>
);

export default TypeChecker;
