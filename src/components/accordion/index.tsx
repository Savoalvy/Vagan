import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Icon,
    List,
    ListItem,
    Text,
} from '@chakra-ui/react';
import { FC, JSX } from 'react';

import { useMenuSelection } from '~/common/CustomHooks/useMenuSelection.tsx';
import { accordionStyle } from '~/components/accordion/style.tsx';
import { menuConfig } from '~/components/menuList/menuConfig.tsx';

const AccordionComponent: FC = (): JSX.Element => {
    const { selectedCategory, selectedOption, selectCategory, selectOption } = useMenuSelection();

    const renderOption = (categoryValue: string, option: { value: string; label: string }) => {
        const isActive = selectedCategory === categoryValue && selectedOption === option.value;

        return (
            <ListItem
                key={option.value}
                sx={{
                    ...accordionStyle.listItem,
                    fontWeight: isActive ? '700' : 'normal',
                }}
                onClick={() => selectOption(categoryValue, option.value)}
            >
                <Box sx={accordionStyle.boxWrapper}>
                    <Box sx={{ ...accordionStyle.leftPart, opacity: isActive ? 1 : 0 }} />
                    <Box sx={accordionStyle.rightPart} />
                </Box>
                <Text sx={accordionStyle.routerLink}>{option.label}</Text>
            </ListItem>
        );
    };

    const renderCategory = (category: (typeof menuConfig)[0]) => (
        <AccordionItem key={category.value} sx={accordionStyle.item} border='none'>
            <AccordionButton
                data-test-id='${category}'
                sx={accordionStyle.button}
                p={3}
                onClick={() => selectCategory(category.value)}
            >
                <Icon as={category.icon} />
                <Box flex='1' textAlign='left'>
                    <Text>{category.label}</Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>

            <AccordionPanel sx={accordionStyle.panel}>
                <List
                    data-test-id='${subcategory}-active'
                    data-test-id='tab-${subcategory}-${i}'
                    sx={accordionStyle.list}
                >
                    {category.options.map((option) => renderOption(category.value, option))}
                </List>
            </AccordionPanel>
        </AccordionItem>
    );

    const expandedIndex = menuConfig.findIndex((c) => c.value === selectedCategory);

    return (
        <Accordion
            allowToggle
            sx={accordionStyle.wrapper}
            index={expandedIndex >= 0 ? expandedIndex : undefined}
        >
            {menuConfig.map(renderCategory)}
        </Accordion>
    );
};

export default AccordionComponent;
