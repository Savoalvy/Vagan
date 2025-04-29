import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { JSX } from 'react';

import { useMenuSelection } from '~/common/CustomHooks/useMenuSelection.tsx';
import { menuConfig } from '~/components/menuList/menuConfig';
import { tabBaseStyle, tabVariants } from '~/components/tab/style.tsx';

const TabComponent = ({ category, variant }): JSX.Element => {
    const { selectedOption, selectOption } = useMenuSelection();
    const options = menuConfig.find((c) => c.value === category)?.options ?? [];
    const activeTabIndex = options.findIndex((opt) => opt.value === selectedOption);
    const handleTabChange = (index: number) => {
        const selected = options[index];
        if (selected) {
            selectOption(category, selected.value);
        }
    };

    const variantStyles = variant ? (tabVariants[variant] ?? {}) : {};

    const mergedTabListStyle = {
        ...tabBaseStyle?.tabList,
        ...variantStyles?.tabList,
    };

    const mergedTabStyle = {
        ...tabBaseStyle?.tab,
        ...variantStyles?.tab,
    };

    return (
        <Tabs
            sx={tabBaseStyle.container}
            index={activeTabIndex >= 0 ? activeTabIndex : 0}
            onChange={handleTabChange}
        >
            <TabList sx={mergedTabListStyle}>
                {options.map((opt) => (
                    <Tab key={opt.value} sx={mergedTabStyle}>
                        {opt.label}
                    </Tab>
                ))}
            </TabList>
        </Tabs>
    );
};

export default TabComponent;
