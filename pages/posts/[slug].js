import { Meta, Navigation, Post } from 'components';
import { getObject, getObjects } from 'lib/data';
import { Remarkable } from 'remarkable';

export const getStaticPaths = () => {
  const { results: posts } = getObjects('posts', ['slug']);
  const paths = posts.map(el => ({
    params: {
      slug: el.slug,
    },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = context => {
  const { results: pages } = getObjects('pages', ['slug', 'title']);
  const post = getObject('posts/' + context.params.slug, [
    'content',
    'category',
    'animal',
    'date',
    'title',
    'description',
  ]);

  const md = new Remarkable({ html: true });
  post.content = md.render(post.content);

  return { props: { pages, post } };
};

const PostPage = ({ pages, post }) => (
  <>
    <Meta title={post.title} description={post.description} />
    <Navigation pages={pages} />
    <Post {...post} />
  </>
);

export default PostPage;
