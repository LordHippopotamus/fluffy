import { Container, Typography } from '@mui/material';

const Post = ({ title, content, thumbnail }) => (
  <Container sx={{ my: 4 }}>
    <Typography variant="h1">{title}</Typography>
    <img src={'/' + thumbnail + '?nf_resize=fit&w=900'} style={{ width: '100%' }} />
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </Container>
);

export default Post;
