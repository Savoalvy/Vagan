// ~/components/tab/style.ts
export const tabBaseStyle = {
    container: {
        w: 'full',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabList: {
        overflowX: 'auto',
        justifyContent: 'center',
        flexWrap: { base: 'nowrap', bp: 'wrap' },
        whiteSpace: 'nowrap',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
        maxW: 'fit-content',
    },
    tab: {
        flexShrink: 0,
        _focus: { boxShadow: 'none' },
        _hover: { bg: 'transparent' },
        _active: { bg: 'transparent' },
        m: 0,
    },
};

export const tabVariants = {
    categoryTabs: {
        tabList: {},
        tab: {
            color: 'lime.800',
            _selected: { color: 'lime.500', borderColor: 'lime.500' },
            fontWeight: 500,
            fontSize: { base: '14px', bp: '16px' },
            h: { base: '28px', md: '40px' },
        },
    },
};
