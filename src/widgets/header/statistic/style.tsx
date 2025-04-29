export const statisticStyle = {
    base: {
        wrapper: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        item: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            textAlign: 'center',
            color: 'lime.600',
            lineHeight: '1',
            fontWeight: 'semiBold',
        },
        icon: {},
    },

    statistic: {
        wrapper: {
            w: '208px',
            h: '200px',
            flexDirection: 'column',
            gap: '24px',
        },
        item: {
            w: '85px',
            h: '40px',
            gap: '8px',
        },

        icon: {},
    },

    card: {
        wrapper: {
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },
        item: {
            gap: '6px',
            p: '0 4px',
            fontSize: '12px',
            h: '24px',
        },
        icon: {},
    },

    header: {
        wrapper: {
            display: { base: 'flex', md: 'none' },
            w: { base: '187px', sm: '203px' },
        },
        item: {
            w: '57px',
            gap: '6px',
        },
        text: {
            fontSize: '12px',
        },
        icon: {
            boxSize: 3,
        },
    },

    // recipe
};
