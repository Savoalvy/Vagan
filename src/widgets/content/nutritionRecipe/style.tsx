export const nutritionStyle = {
    wrapper: {
        flexDirection: 'column',
        maxW: { base: '100%', bp: '578px', bp2: '678px' },
        w: '100%',
        gap: { base: 3, bp1: 5 },
    },

    container: {
        gap: 3,
        w: 'inherit',
        flexDirection: { base: 'column', bp1: 'row' },
    },

    item: {
        w: 'inherit',
        minH: { base: '64px', bp1: '136px' },
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: { base: 'row', bp1: 'column' },
        layerStyle: 'nutritionItem',
        px: { base: 3, bp1: 4 },
        py: 4,
    },
};
