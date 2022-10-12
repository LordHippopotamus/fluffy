import { Box, Container, Typography } from '@mui/material';

const Single = page => (
  <Box my={4}>
    <Container>
      <Typography gutterBottom variant="h1">
        {page.title}
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </Container>
  </Box>
);

export default Single;
