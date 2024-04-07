import '../styles/globals.css'
import { css } from '../../styled-system/css';
import type { AppProps } from 'next/app'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Une histoire, des langues",
  description: "Site réalisé pour la semaine des langues",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={css({ height: "100%" })}>
      <Component {...pageProps} />
    </main>
  );
}