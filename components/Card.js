import {
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
    <MuiCard>
      <CardMedia component="img" image={'/' + thumbnail + '?nf_resize=fit&w=300'} />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
      </CardContent>
      <CardActions>
        <Link href={'/posts/' + slug}>
          <Button color="primary" variant="contained">
            Read More
          </Button>
        </Link>
        <Stack direction="row" spacing={2} ml="auto">
          <TagIcon color="secondary" /> {animal}
          <TagIcon color="secondary" /> {category}
        </Stack>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
