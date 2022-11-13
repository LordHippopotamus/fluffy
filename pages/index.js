import { Grid, Meta, Navigation, Pagination } from 'components';
import { getObject, getObjects } from 'lib/data';

export const getServerSideProps = ({ query }) => {
  const meta = getObject('config');
  const { results: pages } = getObjects('pages', ['slug', 'title']);
  const { results: posts, pagination } = getObjects(
    'posts',
    ['slug', 'title', 'thumbnail', 'animal', 'category', 'description'],
    {
      page: +query.page || 1,
    },
    meta
  );
  return { props: { meta, pages, posts, pagination } };
};

const Home = ({ meta, pages, posts, pagination }) => (
  <>
    <Meta {...meta} />
    <Navigation pages={pages} />
    <Grid list={posts} />
    <Pagination {...pagination} />
  </>
);

export default Home;
