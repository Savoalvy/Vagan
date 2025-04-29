export const selectorStyle = {
    wrapper: {
        userSelect: 'none',
        borderRadius: 'md',
        w: '269px',
        h: 'auto',
        minH: 10,
        border: '1px solid',
        borderColor: 'gray.12',
        bg: 'transparent',
        pr: 3,
        pl: 4,
        cursor: 'pointer',

        _hover: {
            bg: 'transparent',
            borderColor: 'lime.300',
        },
        _active: {
            bg: 'transparent',
            borderColor: 'lime.300',
        },
    },

    tagWrapper: {
        gap: 2,
        w: 'full',
        py: 2.5,
    },

    menuText: {
        color: 'gray.100',
        fontSize: 'sm',
        lineHeight: '1.43',
    },

    menuList: {
        width: '269px',
        border: 'none',
        mt: 0,
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    },
};
