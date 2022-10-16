import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Image from 'next/image';

const Card = ({ title, thumbnail }) => (
  <img src={'/' + thumbnail + '?nf_resize=fit&w=300&h=400'} alt="post thumbnail" />
);
/* <MuiCard>
      <CardActionArea>
        <CardMedia component="img" image={thumbnail} />

        <Box position="relative" height={300}>
          <Image
          layout="fill"
          src="/img/zhang-kaiyv-ecfpmkovzpa-unsplash.jpg?nf_resize=fit&w=300"
          alt="post thumbnail"
        />
        </Box>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard> */
export default Card;
