// /pages/_app.js

// global CSS files are imported from here (and here only)
import '../styles/global.css';

// App component is a top-level component which will be common across
// all the different pages
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}