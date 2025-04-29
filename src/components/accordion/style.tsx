export const accordionStyle = {
    wrapper: {
        w: '100%',
        h: '100%',
        overflowY: 'auto',
    },

    item: {
        // maxW: '230px',
        cursor: 'pointer',
        mr: 1,
    },

    button: {
        display: 'flex',
        gap: 3,
        px: 2,
        py: 3,
        _hover: {
            bg: 'lime.100',
        },
        _expanded: {
            bg: 'lime.100',
            fontWeight: '700',
        },
    },

    panel: {
        p: 0,
    },

    list: {},

    listItem: {
        h: 9,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '11px',
        p: '6px 8px 6px 33px',
        transition: '0.2s',
        _hover: {
            bg: 'lime.50',
        },
    },

    boxWrapper: {
        w: '8px',
        display: 'flex',
    },

    leftPart: {
        w: '7px',
        bg: 'lime.300',
        transition: '0.3s',
    },

    rightPart: {
        h: 6,
        w: 0.5,
        bg: 'lime.300',
    },

    routerLink: {
        width: 'full',
        height: 'full',
    },
};
