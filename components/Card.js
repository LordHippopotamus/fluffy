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
import Image from 'next/image';

const Card = ({ slug, title, thumbnail, animal, category }) => {
  return (
    <MuiCard>
      <CardMedia sx={{ height: 500 }}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src={'/' + thumbnail + '?nf_resize=fit&w=500'}
            alt="post image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardMedia>
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
};

export default Card;
