import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next'

// paths contains the array of known paths returned by getAllPostIds(), which
// includes the params defined by [id].js
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        // false means any paths not returned will result in a 404 page
        // if true, getStaticProps would change behavior:
        //  - paths returned from getStaticPaths will be rendered to HTML at 
        //    build time
        // - paths that have not been generates at build time
        //   will get a "fallback" version of the page
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.id as string);
    return {
        props: {
            postData,
        },
    };
}



export default function Post({
    postData
}: {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
            </article>
        </Layout>
    );
}