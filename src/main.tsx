import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '~/app/App.tsx';
import customTheme from '~/common/constants/theme.tsx';
import { store } from '~/store/configure-store.ts';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ChakraProvider theme={customTheme}>
            <App />
        </ChakraProvider>
    </Provider>,
);
