import { Meta, Navigation, Single } from 'components';
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
  const meta = getObject('config', ['title']);
  const { results: pages } = getObjects('pages', ['slug', 'title']);
  const page = getObject('pages/' + context.params.slug, ['title', 'content', 'description']);

  const md = new Remarkable();
  page.content = md.render(page.content);

  return { props: { meta, pages, page } };
};

const Page = ({ meta, pages, page }) => (
  <>
    <Meta title={meta.title + ' - ' + page.title} description={page.description} />
    <Navigation pages={pages} />
    <Single {...page} />
  </>
);

export default Page;
