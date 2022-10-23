import { Masonry } from '@mui/lab';
import { Container } from '@mui/material';
import Card from './Card';

const Grid = ({ list }) => (
  <Container sx={{ my: 8 }}>
    <Masonry columns={{ xs: 1, md: 2 }} spacing={4}>
      {list.map(el => (
        <Card {...el} key={el.slug} />
      ))}
    </Masonry>
  </Container>
);

export default Grid;
