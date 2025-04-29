export const userStyle = {
    wrapper: {
        h: '48px',
        gap: '12px',
        justifyContent: 'center',
        maxW: '432px',
        display: { base: 'none', md: 'flex' },
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        maxW: '295px',
        minW: '0',
    },
    name: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontSize: 'md',
        fontWeight: 'medium',
    },
    contact: {
        color: 'gray.500',
        fontSize: 'sm',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};
