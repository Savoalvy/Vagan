import { HStack, Switch, Text } from '@chakra-ui/react';
import { FC, JSX } from 'react';

interface SwitcherProps {
    isChecked: boolean;
    onChange: (value: boolean) => void;
}

const Switcher: FC<SwitcherProps> = ({ isChecked, onChange }): JSX.Element => (
    <HStack gap='12px'>
        <Text fontWeight='500'>Исключить аллергены</Text>
        <Switch
            data-test-id='allergens-switcher'
            isChecked={isChecked}
            onChange={(e) => onChange(e.target.checked)}
            sx={{
                'span.chakra-switch__track[data-checked]': {
                    bg: 'lime.400',
                },
            }}
        />
    </HStack>
);

export default Switcher;
