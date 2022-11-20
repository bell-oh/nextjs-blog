import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Bowie Bello';
export const siteTitle = "Bowie's Blog";

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link ref="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Blog built using Next.js"
                />
                <meta
                    property="og.image"
                    content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&
                    images=https%3A%2F%2Fassets.vercel.
                    com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2
                    Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />

            </Head>
            {/* boolean prop "home" adjusts the size of title and image */}
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            // priority preloads images
                            priority
                            src="/images/profile.jpeg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt="Profile Picture"
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/profile.jpeg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt="Profile Picture"
                            />  
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {/* // back to home link if home is false */}
            {!home && (
                <div className={styles.toBackHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}   
        </div>
    );
}