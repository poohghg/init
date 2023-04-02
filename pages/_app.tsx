// import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Theme } from '@/styles/theme';
import Gnb from '@/component/Gnb';
import GlobalStyle from '@/styles/globalStyle';
import { Hydrate, QueryClientProvider } from 'react-query';
import { getClient } from '@/queryClient';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store, wrapper } from '@/redux';

function App({ Component, pageProps }: AppProps) {
  const queryClient = getClient();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider theme={Theme}>
              <GlobalStyle />
              <Gnb />
              <Component {...pageProps} />
            </ThemeProvider>
          </Hydrate>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(App);
