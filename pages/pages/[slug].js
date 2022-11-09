import { Navigation, Single } from 'components';
import { getObject, getObjects } from 'lib/data';
import { Remarkable } from 'remarkable';

export const getStaticPaths = () => {
  const { results: pages } = getObjects('pages', ['slug']);
  const paths = pages.map(el => ({
    params: {
      slug: el.slug,
    },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = context => {
  const { results: pages } = getObjects('pages', ['slug', 'title']);
  const page = getObject('pages/' + context.params.slug, ['title', 'content']);

  const md = new Remarkable();
  page.content = md.render(page.content);

  return { props: { pages, page } };
};

const Page = ({ pages, page }) => (
  <>
    <Navigation pages={pages} />
    <Single {...page} />
  </>
);

export default Page;
