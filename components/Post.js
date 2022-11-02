import { Box, Container, Stack, Typography } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import Image from 'next/image';

const Post = ({ title, content, thumbnail, category, animal, date }) => (
  <Container sx={{ my: 8 }}>
    <Typography variant="h3">{title}</Typography>
    <Stack direction="row" spacing={2} my={2} ml="auto">
      <TagIcon color="secondary" /> {animal}
      <TagIcon color="secondary" /> {category}
    </Stack>
    <Box position="relative" width={{ xs: '100%', md: '80%' }} height="500px" mx="auto">
      <Image
        src={'/' + thumbnail + '?nf_resize=smartcrop&w=800&h=800'}
        layout="fill"
        objectFit="contain"
      />
    </Box>
    <div dangerouslySetInnerHTML={{ __html: content }} />
    <Typography color="secondary" textAlign="right">
      {date}
    </Typography>
  </Container>
);

export default Post;
