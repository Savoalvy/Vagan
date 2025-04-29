export const authorRecipeStyle = {
    wrapper: {
        p: { base: 3, bp1: 6 },
        gap: 4,
        borderRadius: '8px',
        bg: 'lime.300',
        w: 'full',
        maxW: { base: '100%', bp1: '578px', bp2: '678px' },
        align: 'center',
        position: 'relative',
    },

    avatar: {},

    content: {
        w: 'full',
        gap: 4,
        justifyContent: 'flex-end',
        h: 'full',
    },

    topSection: {
        w: 'full',
        justifyContent: 'space-between',
    },

    nameBlock: {
        gap: { base: 0, bp1: 1 },
    },

    roleText: {
        position: 'absolute',
        top: { base: 2, bp1: 6 },
        right: { base: 2, bp1: 6 },
    },

    bottomSection: {
        w: 'full',
        justifyContent: 'space-between',
    },
};
