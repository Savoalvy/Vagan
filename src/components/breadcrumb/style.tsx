export const breadcrumbBaseStyle = {
    container: {
        m: '0 auto 0 0',
        fontSize: 'sm',
        fontWeight: 'normal',
        lineHeight: 1.5,

        '& > ol': {
            flexWrap: 'wrap',
        },
    },
    link: {
        _hover: { textDecoration: 'underline', color: 'blue.500' },
    },
    currentItem: {
        color: 'gray.600',
        ariaCurrent: 'page',
    },
};

export const breadcrumbVariants = {
    header: {
        container: {
            display: { base: 'none', md: 'flex' },
        },
    },
    burger: {
        container: {
            display: 'flex',
        },
    },
};
