export const cardBaseStyle = {
    wrapper: {
        borderRadius: '8px',
        position: 'relative',
        // overflow: 'hidden',
        border: '1px solid',
        borderColor: 'gray.12',
        boxShadow: 'none',
        _hover: {
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            transition: 'all 0.3s ease-in-out',
        },
    },
    image: {
        w: '100%',
        h: 'auto',
    },
    description: {
        flexWrap: 'wrap',
        gap: '8px',
    },
    textLabel: {},
    textDescription: {},
    category: {
        justifyContent: 'space-between',
    },
    recommended: {
        position: 'absolute',
        bottom: '20px',
        left: '24px',
        display: { base: 'none', md: 'flex' },
    },
};

export const cardVariants = {
    slider: {
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            w: { bp2: '322px', md: '277px', base: '158px' },
            h: { bp2: '414px', md: '402px', base: '220px' },
        },
        image: {
            h: { md: '230px', base: '128px' },
        },
        description: {
            p: { bp: '16px 24px 20px 24px', md: '12px', base: '8px 8px 4px 8px' },
            gap: { md: '24px', base: '8px' },
            flexDirection: 'column',
        },
        label: {
            fontSize: { bp: '20px', md: '18px', base: '16px' },
            noOfLines: 1,
            fontWeight: '500',
        },
        text: {
            fontSize: '14px',
            display: { base: 'none', md: '-webkit-box' },
            noOfLines: 3,
        },

        category: {
            maxH: 6,
            overflow: 'hidden',
        }, // Пока скрыл категории из десктопного слайдера. Не понятно что делать когда их много
        categoryTabWrapper: {
            flexDirection: { base: 'column', bp3: 'row' },
            flexWrap: 'wrap',
            position: { base: 'absolute', bp3: 'static' },
            top: '8px',
            left: '8px',
        },
        categoryTab: {
            bg: 'lime.150',
        },
    },

    cardItem: {
        wrapper: {
            display: 'flex',
            flexDirection: 'row',
            w: '100%',
            overflow: 'hidden',
        },
        image: {
            maxW: '346px',
            minW: '158px',
            w: '100%',
            h: '100%',
            objectFit: 'cover',
        },
        description: {
            w: '100%',
            flexDirection: 'column',
            gap: { base: '12px', md: '16px', bp: '24px' },
            p: { base: '8px 8px 4px 8px', bp3: '20px 24px' },
        },
        label: {
            fontSize: { bp: '20px', md: '18px', base: '16px' },
            noOfLines: 2,
            fontWeight: '500',
        },
        text: {
            display: { base: 'none', bp3: '-webkit-box' },
            noOfLines: 3,
        },
        infoBlock: {
            order: 2,
            minH: '44px',
        },
        category: {
            order: 1,
        },
        categoryTabWrapper: {
            flexDirection: { base: 'column', bp3: 'row' },
            flexWrap: 'wrap',
            position: { base: 'absolute', bp3: 'static' },
            top: '8px',
            left: '8px',
        },
        categoryTab: {
            bg: 'lime.50',
        },
        buttons: {
            order: 3,
            gap: '8px',
            justifyContent: 'flex-end',
        },
    },

    otherCard: {
        wrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: { base: '12px', bp: '16px', bp2: '24px 24px 20px 24px' },
        },
        description: {
            flexDirection: 'column',
            gap: '24px',
        },
        label: {
            noOfLines: 1,
            fontWeight: '500',
        },
        text: {
            noOfLines: 3,
        },
    },

    recipeCard: {
        wrapper: {
            w: 'full',
            // minH: { base: '224px', bp5: '410px' },
            flexDirection: { base: 'column', bp1: 'row' },
            gap: { base: 4, bp: 6 },
            border: 'none',
            _hover: {
                boxShadow: 'none',
            },
        },

        image: {
            maxW: { base: '100%', bp1: '553px' },
            // minW: '232px',
            objectFit: 'cover',
            borderRadius: '8px',
            overflow: 'hidden',
        },

        description: {
            flexDirection: 'column',
            gap: 6,
        },

        label: {
            fontSize: { bp: '4xl', base: '2xl' },
            lineHeight: { bp: '1', base: '1.33' },
            fontWeight: '700',
            maxW: '437px',
        },
        text: {
            fontSize: 'sm',
            lineHeight: '1.43',
            maxW: '578px',
        },

        infoBlock: {
            order: 2,
            gap: { bp: 6, base: 4 },
            mt: 2,
            mb: 'auto',
        },

        category: {
            minH: 8,
            order: 1,
        },

        categoryTab: {
            px: 2,
            py: 0.5,
            bg: 'lime.50',
            flexShrink: 0,
            lineHeight: '1.43',
        },

        categoryTabWrapper: {
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        buttons: {
            order: 3,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: { base: 'wrap', sm: 'nowrap' },
            gap: 3,
        },
    },

    stepCard: {
        wrapper: {
            w: 'full',
            h: 'auto',
            // minH: '128px',
            flexDirection: 'row',
            overflow: 'hidden',
            _hover: {
                boxShadow: 'none',
            },
        },

        image: {
            flex: { base: 1, bp1: 0.27, bp: 0.6, bp2: 1 },
        },
        description: {
            flex: 1,
        },

        infoBlock: {
            flexDirection: 'column',
            w: 'full',
            h: 'full',
            p: { base: '8px 8px 4px 8px', bp: '20px 24px' },
            lineHeight: '1.43',
        },

        categoryTab: {
            '& svg': { display: 'none' },
            w: 'fit-content',
            px: 2,
            py: 0.5,
        },

        text: {
            fontSize: 'sm',
        },
    },
};
