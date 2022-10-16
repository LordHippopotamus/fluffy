import { Grid, Navigation } from 'components';
import { getObjects } from 'lib/data';

export const getStaticProps = () => {
  const pages = getObjects('pages', ['slug', 'title']);
  const posts = getObjects('posts', ['slug', 'title', 'thumbnail'], { page: 2, limit: 6 });
  return { props: { pages, posts } };
};

const Home = ({ pages, posts }) => (
  <>
    <Navigation pages={pages} />
    <Grid list={posts} />
  </>
);

export default Home;
