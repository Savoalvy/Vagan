import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
    colors: {
        lime: {
            600: '#7CBF00',
            50: '#ffffd3',
            100: '#eaffc7',
            300: '#c4ff61',
            400: '#b1ff2e',
            800: '#134b00',
            150: '#d7ff94',
            500: '#2db100',
        },
        gray: {
            50: 'rgba(0, 0, 0, 0.24)',
            100: 'rgba(0, 0, 0, 0.64)',
            150: 'rgba(0, 0, 0, 0.48)',
            10: 'rgba(0, 0, 0, 0.06)',
            15: 'rgba(0, 0, 0, 0.8)',
            12: 'rgba(0, 0, 0, 0.08)',
            200: 'rgba(0, 0, 0, 0.92)',
            70: '#e2e8f0',
        },
    },
    breakpoints: {
        sm: '431px', // было 427px
        bp1: '768px',
        md: '768px', // было 785px
        bp4: '827px',
        mh: '895px',
        bp3: '920px',
        bp5: '1024px',
        ml: '1375px',
        bp: '1440px',
        bp2: '1920px',
    },

    components: {
        Text: {
            variants: {
                stepsLabel: {
                    w: 'full',
                    fontSize: { base: '2xl', bp5: '4xl' },
                    fontWeight: 'medium',
                    lineHeight: '1',
                },
                ingredientListLabel: {
                    fontSize: 'xs',
                    fontWeight: 'bold',
                    lineHeight: '1.33',
                    letterSpacing: '0.05em',
                    color: 'lime.500',
                    textTransform: 'uppercase',
                },
                ingredientListOptionLabel: {
                    fontSize: 'sm',
                    fontWeight: 'medium',
                    lineHeight: '1.43',
                    color: 'gray.200',
                },
                ingredientListOptionValue: {
                    fontSize: 'sm',
                    fontWeight: 'normal',
                    lineHeight: '1.43',
                    color: 'gray.200',
                },
                // Текстовые стили бля блока калорий
                nutritionCaption: {
                    fontSize: 'sm',
                    lineHeight: '1.43',
                    color: 'gray.15',
                },
                nutritionLabel: {
                    fontSize: 'sm',
                    color: 'gray.150',
                    lineHeight: '1.43',
                    flex: { base: 1, bp1: 'unset' },
                },
                nutritionValue: {
                    fontSize: { base: '2xl', bp1: '3xl' },
                    fontWeight: 'medium',
                    color: 'lime.800',
                    lineHeight: '1.11',
                    flex: { base: 1, bp1: 'unset' },
                    textAlign: { base: 'center', bp1: 'unset' },
                },
                nutritionUnit: {
                    fontSize: { base: 'xs', bp1: 'sm' },
                    fontWeight: 'semiBold',
                    color: 'gray.200',
                    lineHeight: '1.43',
                    flex: { base: 0.5, bp1: 'unset' },
                },
                // Блок автора рецепта
                authorName: {
                    fontSize: { base: 'lg', bp1: '2xl' },
                    fontWeight: { base: 'semiBold', bp1: 'bold' },
                    lineHeight: { base: '1.56', bp1: '1.33' },
                    textAlign: 'center',
                },
                authorContact: {
                    fontSize: 'sm',
                    lineHeight: '1.43',
                    textAlign: 'center',
                    color: 'gray.100',
                },
                authorRecipe: {
                    fontSize: 'sm',
                    lineHeight: '1.43',
                },
            },
        },
        NumberInput: {
            variants: {
                ingredientListInput: {
                    root: {
                        border: '1px solid',
                        borderColor: 'gray.70',
                        borderRadius: '6px',
                        w: { base: '73px', bp1: '90px' },
                        size: 'md',
                    },
                    field: {
                        borderRadius: 'inherit',
                    },

                    stepperGroup: {
                        borderColor: 'gray.70',
                        m: 0,
                        h: 'full',
                    },
                    stepper: {
                        borderColor: 'gray.70',
                        _hover: {
                            bg: 'gray.50', // лёгкий ховер
                        },
                        _active: {
                            bg: 'gray.100',
                        },
                    },
                },
            },
        },
    },

    fontSizes: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        md: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '2.25rem', // 36px
        '4xl': '3rem', // 48px
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
    },
    lineHeights: {
        '1': 1, // 100%
        '1.33': 1.33, // 133%
        '1.4': 1.4, // 140%
        '1.43': 1.43,
        '1.5': 1.5,
        '1.56': 1.56,
        '1.11': 1.11,
    },

    textStyles: {
        h1: {
            fontSize: { base: '2xl', bp1: '4xl' },
            lineHeight: { base: '1.33', bp1: '1' },
            fontWeight: '700',
        },
        h2: {
            fontSize: { base: 'sm', bp1: 'md' },
            lineHeight: { base: '1.43', bp1: '1.5' },
            fontWeight: '500',
        },
        hInput: {
            fontSize: { base: 'sm', bp1: 'lg' },
            fontWeight: '400',
        },
        tag: {
            '& > *': {
                fontWeight: 'medium',
                fontSize: 'xs',
                lineHeight: '1.33',
            },
        },
    },

    layerStyles: {
        hInput: {
            border: '1px solid',
            borderColor: 'gray.150',
            borderRadius: '6px',
            outline: 'none',
            _placeholder: {
                color: 'lime.800',
            },
            _focus: {
                borderColor: 'gray.150',
                boxShadow: 'none',
            },
            _active: {
                borderColor: 'gray.150',
                boxShadow: 'none',
            },
            _hover: {
                borderColor: 'gray.150',
                boxShadow: 'none',
            },
        },
        tag: {
            border: '1px solid',
            borderColor: 'lime.400',
            backgroundColor: 'transparent',
            borderRadius: '6px',
            '& > *': {
                color: 'lime.600',
            },
        },
        nutritionItem: {
            border: '1px solid',
            borderColor: 'gray.12',
            borderRadius: '14px',
        },
    },

    styles: {
        global: {
            '*': {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
                fontFamily: '"Inter", sans-serif',
                fontOpticalSizing: 'auto',
                fontStyle: 'normal',
            },
            'input::placeholder': {
                fontFamily: '"Inter", sans-serif',
            },
            '::-webkit-scrollbar': {
                width: '8px',
            },
            '::-webkit-scrollbar-track': {
                bg: 'rgba(0, 0, 0, 0.04)',
                borderRadius: '8px',
            },
            '::-webkit-scrollbar-thumb': {
                bg: 'rgba(0, 0, 0, 0.16)',
                borderRadius: '8px',
            },
            '::-webkit-scrollbar-button': {
                display: 'none',
            },
            '::-webkit-scrollbar-corner': {
                background: 'transparent',
            },
            body: {
                width: '100vw',
                minHeight: '100vh',
                fontFamily: '"Inter", sans-serif',
                fontOpticalSizing: 'auto',
                fontStyle: 'normal',
            },
            'ul, ol': {
                listStyle: 'none',
            },
            a: {
                textDecoration: 'none',
                color: 'inherit',
                maxWidth: '100%',
                height: 'auto',
            },
            p: {
                textDecoration: 'none',
            },
            button: {
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                font: 'inherit',
            },
            'input, textarea': {
                border: 'none',
                outline: 'none',
                font: 'inherit',
            },
            img: {
                userSelect: 'none',
                maxWidth: '100%',
                height: 'auto',
            },
            '.chakra-input': {
                w: '100% !important',
                h: '100% !important',
            },
        },
    },
});

export default customTheme;
