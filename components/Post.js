import { Box, Container, Stack, Typography } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';

const Post = ({ title, content, thumbnail, category, animal, date }) => (
  <Container sx={{ my: 8 }}>
    <Typography variant="h3">{title}</Typography>
    <Stack direction="row" spacing={2} my={2} ml="auto">
      <TagIcon color="secondary" /> {animal}
      <TagIcon color="secondary" /> {category}
    </Stack>
    <Box
      width={{ xs: 1, md: 0.8, lg: 0.5 }}
      mr={{ xs: 0, md: 'auto', lg: 2 }}
      ml={{ md: 'auto', lg: 0 }}
      mb={{ xs: 0, lg: 2 }}
      sx={{ float: { lg: 'left' } }}
    >
      <img src={'/' + thumbnail + '?nf_resize=fit&w=900'} style={{ width: '100%' }} />
    </Box>
    <div dangerouslySetInnerHTML={{ __html: content }} />
    <Typography color="secondary" textAlign="right">
      {date}
    </Typography>
  </Container>
);

export default Post;
