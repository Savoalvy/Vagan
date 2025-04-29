export const sliderStyle = {
    container: {
        position: 'relative',
        w: '100%',
        h: '100%',
        overflow: 'hidden',
    },

    arrowButton: {
        display: { base: 'none', bp: 'block' },
        boxSize: 12,
        bg: 'black',
        color: 'lime.50',
        _hover: { bg: 'gray.800' },
        p: 3,
    },

    arrowButtonLeft: {
        position: 'absolute',
        left: -1,
        top: '50%',
        transform: 'translateY(-50%)',
    },

    arrowButtonRight: {
        position: 'absolute',
        right: -1,
        top: '50%',
        transform: 'translateY(-50%)',
    },
};
