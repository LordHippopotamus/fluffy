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

const Card = ({ slug, title, thumbnail, animal, category }) => (
  <MuiCard>
    <CardMedia component="img" image={'/' + thumbnail + '?nf_resize=fit&w=300'} />
    <CardContent>
      <Typography variant="h5">{title}</Typography>
    </CardContent>
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

export default Card;
