import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import Link from 'next/link';

const Card = ({ slug, title, description, thumbnail, animal, category }) => (
  <Paper sx={{ borderRadius: '16px', overflow: 'hidden', mt: 4 }}>
    <Box display={{ xs: 'block', md: 'flex' }}>
      <Box
        minHeight={{ xs: '300px', sm: '500px', md: '400px' }}
        width={{ md: '400px' }}
        position="relative"
      >
        <img
          src={'/' + thumbnail + '?nf_resize=smartcrop&w=500&h=500'}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          alt="post image"
        />
      </Box>

      <Box
        p={2}
        flexBasis="24rem"
        flexGrow={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Box>
        <Box display="flex" mt={2}>
          <Link href={'/posts/' + slug}>
            <Button
              color="primary"
              variant="contained"
              sx={{ whiteSpace: 'nowrap', minWidth: 148, alignSelf: 'flex-end' }}
            >
              Read More
            </Button>
          </Link>
          <Stack
            direction="row"
            ml="auto"
            justifyContent="flex-end"
            flexWrap="wrap"
            spacing={{ xs: 0, sm: 2 }}
          >
            <Box display="flex" alignItems="center">
              <TagIcon color="secondary" /> {animal}
            </Box>
            <Box display="flex" alignItems="center">
              <TagIcon color="secondary" /> {category}
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  </Paper>
);

export default Card;
