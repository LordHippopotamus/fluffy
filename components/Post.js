import { Box, Container, Stack, Typography } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';

const Post = ({ content, category, animal, date }) => (
  <Container>
    <Box dangerouslySetInnerHTML={{ __html: content }} />
    <Box display="flex" justifyContent="space-between" my={4}>
      <Stack direction="row" spacing={2}>
        <TagIcon color="secondary" /> {animal}
        <TagIcon color="secondary" /> {category}
      </Stack>
      <Typography color="secondary">{date}</Typography>
    </Box>
  </Container>
);

export default Post;
