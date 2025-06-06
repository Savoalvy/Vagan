import { SystemStyleObject } from '@chakra-ui/react';

export const sideBarLeftStyle: SystemStyleObject = {
    gridArea: 'sideBarLeft',
    h: '100%',
    display: { base: 'none', ml: 'flex' },
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow:
        '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)',
};
