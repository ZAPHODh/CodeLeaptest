import { ModalProvider } from '@/context/ModalContext';
import { GlobalStyles } from '../styles/global-styles';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { EditModalProvider } from '@/context/EditModalContext';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ModalProvider>
        <EditModalProvider>
          <Component {...pageProps} />
          <GlobalStyles />
        </EditModalProvider>
      </ModalProvider>
    </SessionProvider>
  );
}
