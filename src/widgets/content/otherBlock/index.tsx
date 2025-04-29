import { Flex, Grid, Text } from '@chakra-ui/react';
import { JSX } from 'react';

import { OTHER_CARD_CONFIG, OTHER_ITEMS_CONFIG } from '~/common/configs/otherConfig.tsx';
import CardComponent from '~/widgets/content/newReceipeBlock/slider/card';
import OtherItem from '~/widgets/content/otherBlock/otherItem';
import { otherStyle } from '~/widgets/content/otherBlock/style.tsx';

const OtherBlock = (): JSX.Element => (
    <Flex sx={otherStyle.wrapper}>
        <Grid sx={otherStyle.wrapper.header}>
            <Text sx={otherStyle.wrapper.header.label}>Веганская кухня</Text>
            <Text sx={otherStyle.wrapper.header.description}>
                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                вегетарианскую диету и готовить вкусные вегетарианские блюда.
            </Text>
        </Grid>
        <Grid sx={otherStyle.wrapper.content}>
            {OTHER_CARD_CONFIG.map((item, index) => (
                <CardComponent
                    key={index}
                    label={item.label}
                    description={item.description}
                    category={{
                        label: item.category,
                        icon: item.icon,
                    }}
                    statistics={item.statistic.map((statItem) => ({
                        icon: statItem.statisticIcon,
                        value: statItem.statisticValue,
                    }))}
                    variant='otherCard'
                />
            ))}
            <Flex sx={otherStyle.wrapper.content.buttons}>
                {OTHER_ITEMS_CONFIG.map((item, index) => (
                    <OtherItem key={index} name={item.name} icon={item.icon} />
                ))}
            </Flex>
        </Grid>
    </Flex>
);

export default OtherBlock;
