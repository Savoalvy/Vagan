import { Flex, Icon, Text } from '@chakra-ui/react';
import { JSX } from 'react';
import { IconType } from 'react-icons';

import { statisticStyle } from '~/widgets/header/statistic/style.tsx';

type StatisticItem = {
    icon: IconType;
    value: string;
};

type Variant = keyof typeof statisticStyle;

type Props = {
    config: StatisticItem[];
    variant?: Variant;
};

const StatisticComponent = ({ config, variant }: Props): JSX.Element => {
    const base = statisticStyle?.base;
    const variantStyle = variant && variant !== 'base' ? statisticStyle[variant] : {};

    const combinedStyles = {
        wrapper: { ...base?.wrapper, ...variantStyle?.wrapper },
        item: { ...base?.item, ...variantStyle?.item },
        text: { ...base?.text, ...variantStyle?.text },
        icon: { ...base?.icon, ...variantStyle?.icon },
    };

    console.log(config);

    return (
        <Flex sx={combinedStyles.wrapper}>
            {config.map(({ icon: IconComponent, value }, index) => (
                <Flex key={index} sx={combinedStyles?.item}>
                    <Icon as={IconComponent} sx={combinedStyles?.icon} />
                    <Text sx={combinedStyles?.text}>{value}</Text>
                </Flex>
            ))}
        </Flex>
    );
};

export default StatisticComponent;
