export const juiciestStyle = {
    wrapper: {
        flexDirection: 'column',
        gap: '12px',
        w: '100%',
        p: { base: '0 16px', md: '0 20px', ml: 0 },

        label: {
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        footer: {
            justifyContent: 'center',
            alignItems: 'center',
            display: { base: 'flex', md: 'none' },
        },

        cards: {
            gridTemplateColumns: {
                base: 'repeat(1, 1fr)',
                bp2: 'repeat(2, 1fr)',
                ml: 'repeat(1, 1fr)',
                bp1: 'repeat(2, 1fr)',
            },
            gap: { bp: '24px', base: '16px' },
            w: 'inherit',
        },
    },
    text: {
        fontWeight: 500,
        fontSize: { bp: '48px', md: '36px', base: '24px' },
        lineHeight: '1',
    },
};
