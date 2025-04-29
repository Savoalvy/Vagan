export const cookingBlogStyle = {
    wrapper: {
        flexDirection: 'column',
        gap: { base: '12px', ml: '16px', bp2: '24px' },
        w: '100%',
        p: { base: '12px', md: '24px' },
        bg: 'lime.300',
        borderRadius: '16px',

        users: {
            flexDirection: { base: 'column', bp1: 'row' },
            gap: '12px',
        },

        label: {
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        footer: {
            justifyContent: 'center',
            alignItems: 'center',
            display: { base: 'flex', md: 'none' },
        },

        cards: {},
    },
    text: {
        fontWeight: 500,
        fontSize: { bp: '48px', md: '36px', base: '24px' },
        lineHeight: '1',
    },
};
