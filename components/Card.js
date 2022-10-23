import {
  Button,
  Card as MuiCard,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Link from 'next/link';

const Card = ({ slug, title, thumbnail }) => (
  <MuiCard>
    <CardMedia component="img" image={'/' + thumbnail + '?nf_resize=fit&w=300'} />
    <CardContent>
      <Typography variant="h5">{title}</Typography>
    </CardContent>
    <CardActions>
      <Link href={'/posts/' + slug}>
        <Button size="large" color="secondary" variant="outlined">
          Read More
        </Button>
      </Link>
    </CardActions>
  </MuiCard>
);

export default Card;
