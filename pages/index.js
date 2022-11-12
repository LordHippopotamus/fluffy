import { Grid, Navigation, Pagination } from 'components';
import { getObjects } from 'lib/data';

export const getServerSideProps = ({ query }) => {
  const { results: pages } = getObjects('pages', ['slug', 'title']);
  const { results: posts, pagination } = getObjects(
    'posts',
    ['slug', 'title', 'thumbnail', 'animal', 'category', 'description'],
    {
      page: +query.page || 1,
    }
  );
  return { props: { pages, posts, pagination } };
};

const Home = ({ pages, posts, pagination }) => (
  <>
    <Navigation pages={pages} />
    <Grid list={posts} />
    <Pagination page={pagination.page} count={pagination.count} />
  </>
);

export default Home;
