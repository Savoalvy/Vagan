export const userCardStyle = {
    flexDirection: 'column',
    justifyContent: 'space-between',
    p: '16px',
    bg: 'white',
    border: '1px, solid',
    borderColor: 'gray.12',
    borderRadius: '8px',
    h: { base: '152px', ml: '160px', bp2: '184px' },

    user: {
        gap: '12px',
    },
    userInfo: {
        flexDirection: 'column',

        name: {
            fontSize: { base: '16px', md: '18px' },
            fontWeight: 500,
        },
        contact: {
            fontSize: { base: '12px', md: '14px' },
            color: 'gray.100',
        },
    },
    description: {
        fontSize: '14px',
    },
};
