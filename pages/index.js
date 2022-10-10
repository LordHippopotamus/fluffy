import { Navigation } from 'components';
import { getObjects } from 'lib/data';

export const getServerSideProps = () => {
  const pages = getObjects('pages', ['slug', 'title']);
  return { props: { pages } };
};

const Home = ({ pages }) => <Navigation pages={pages} />;

export default Home;
