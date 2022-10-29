import { Masonry } from '@mui/lab';
import { Container } from '@mui/material';
import Card from './Card';

const Grid = ({ list }) => (
  <Container sx={{ my: 8, px: { xs: 0, sm: '8px' } }}>
    <Masonry columns={{ xs: 1, md: 2 }} spacing={4} sx={{ ml: '0px' }}>
      {list.map(el => (
        <Card {...el} key={el.slug} />
      ))}
    </Masonry>
  </Container>
);

export default Grid;
