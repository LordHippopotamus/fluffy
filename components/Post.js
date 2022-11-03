import { Box, Container, Stack } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Post = ({ content, category, animal, date }) => (
  <Container>
    <Box dangerouslySetInnerHTML={{ __html: content }} />
    <Box display="flex" justifyContent="space-between" flexWrap="wrap" my={4}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <TagIcon color="secondary" /> {animal}
        <TagIcon color="secondary" /> {category}
      </Stack>
      <Stack direction="row" alignItems="center">
        <CalendarMonthIcon color="secondary" /> {date}
      </Stack>
    </Box>
  </Container>
);

export default Post;
