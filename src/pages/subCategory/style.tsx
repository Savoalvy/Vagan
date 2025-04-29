import { SystemStyleObject } from '@chakra-ui/react';

export const subCategoryPageStyle: SystemStyleObject = {
    gridArea: 'main',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { bp: '40px', base: '32px' },
    overflow: 'auto',

    '&::-webkit-scrollbar': {
        display: 'none',
    },
};
