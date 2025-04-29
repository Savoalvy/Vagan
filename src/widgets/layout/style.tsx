export const layoutStyle = {
    maxW: '1920px',
    m: '0 auto',
    h: '100vh',
    gridColumnGap: '24px',
    gridTemplateRows: {
        base: '64px 1fr',
        md: '80px 1fr',
    },
    gridTemplateColumns: {
        base: '1fr',
        ml: '256px 1fr 256px',
    },
    gridTemplateAreas: {
        base: `'header' 'main' 'footer'`,
        ml: `'header header header' 'sideBarLeft main sideBarRight'`,
    },
};
