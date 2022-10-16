import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Link from 'next/link';

const Card = ({ slug, title, thumbnail }) => (
  <MuiCard>
    <Link href={'/posts/' + slug}>
      <CardActionArea>
        <CardMedia component="img" image={'/' + thumbnail + '?nf_resize=fit&w=300'} />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Link>
  </MuiCard>
);

export default Card;
