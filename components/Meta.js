import Head from 'next/head';

const Meta = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default Meta;
