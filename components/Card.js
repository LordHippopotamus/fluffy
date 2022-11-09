import {
  Box,
  Button,
  Card as MuiCard,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import Link from 'next/link';

const Card = ({ slug, title, thumbnail, animal, category }) => {
  return (
    <MuiCard
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <CardMedia
          sx={{ height: '500px' }}
          alt="post image"
          image={'/' + thumbnail + '?nf_resize=smartcrop&w=500&h=500'}
        />
        <CardContent sx={{ py: '12px !important' }}>
          <Typography variant="h5">{title}</Typography>
        </CardContent>
      </Box>
      <CardActions>
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
      </CardActions>
    </MuiCard>
  );
};

export default Card;
