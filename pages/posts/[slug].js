import { Box, Divider } from '@mui/material';
import { Meta, Navigation, Post, Comments } from 'components';
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
    'slug',
  ]);

  const md = new Remarkable({ html: true });
  post.content = md.render(post.content);

  const meta = {
    title: post.title,
    description: post.description,
  };

  return { props: { meta, pages, post } };
};

const PostPage = ({ meta, pages, post }) => (
  <>
    <Meta {...meta} />
    <Navigation pages={pages} />
    <Post {...post} />
    <Box my={4}>
      <Divider />
    </Box>
    <Box my={4}>
      <Comments postSlug={post.slug} />
    </Box>
  </>
);

export default PostPage;
