import { Box, Container } from '@mui/material';

const Post = ({ title, content, thumbnail }) => (
  <Container sx={{ my: 4 }}>
    <h1>{title}</h1>
    <Box
      width={{ xs: 1, sm: 0.8, md: 0.5 }}
      mr={{ xs: 0, sm: 'auto', md: 2 }}
      ml={{ sm: 'auto', md: 0 }}
      mb={{ xs: 0, md: 2 }}
      sx={{ float: { md: 'left' } }}
    >
      <img src={'/' + thumbnail + '?nf_resize=fit&w=900'} style={{ width: '100%' }} />
    </Box>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </Container>
);

export default Post;
