export const recipePageStyle = {
    gridArea: 'main',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',

    '&::-webkit-scrollbar': {
        display: 'none',
    },

    stepsWrapper: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        maxW: { base: '100%', bp1: '578px', bp2: '678px' },
        w: 'full',
        gap: 5,
    },
};
