export const otherStyle = {
    wrapper: {
        borderTop: '1px solid',
        borderColor: 'gray.12',
        flexDirection: 'column',
        gap: '24px',
        p: { base: '8px 16px 8px 16px', md: '24px 20px', ml: 0 },

        header: {
            justifyContent: 'space-between',
            alignItems: 'center',
            gridRowGap: '12px',
            gridTemplateColumns: { base: '1fr', bp1: '1fr 2fr', bp2: '1fr 1fr' },

            label: {
                fontWeight: 500,
                lineHeight: '1',
                textAlign: 'left',
                fontSize: { bp: '48px', md: '36px', base: '24px' },
            },

            description: {
                fontWeight: 500,
                lineHeight: '1',
                textAlign: 'left',
                fontSize: { bp1: '16px', base: '14px' },
                color: 'gray.100',
            },
        },

        content: {
            gridTemplateColumns: { base: '1fr', bp1: '1fr 1fr 1fr', bp2: '1fr 1fr 2fr' },
            gap: 'inherit',
            buttons: {
                flexDirection: 'column',
                w: '100%',
                gap: { base: '12px', bp: '12px', bp1: '6px' },
            },
        },
    },
};
