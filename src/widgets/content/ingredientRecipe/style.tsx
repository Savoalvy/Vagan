export const ingredientListStyle = {
    wrapper: {
        flexDirection: 'column',
        w: '100%',
        maxW: { base: '100%', bp1: '578px', bp2: '678px' },
        borderRadius: '12px',
    },

    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        w: '100%',
        h: 14,
    },

    portionsInput: {
        gap: { base: 3, bp1: 4 },
        alignItems: 'center',
    },

    list: {
        flexDirection: 'column',
        w: '100%',
    },

    item: {
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 6,
        py: 4,
    },
};
