// /pages/_app.js

// global CSS files are imported from here (and here only)
import '../styles/global.css';

import { AppProps } from 'next/app'

// App component is a top-level component which will be common across
// all the different pages
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}