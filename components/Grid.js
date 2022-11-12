import { Container } from '@mui/material';
import Card from './Card';

const Grid = ({ list }) => (
  <Container sx={{ my: 4 }}>
    {list.map(el => (
      <Card {...el} key={el.slug} />
    ))}
  </Container>
);

export default Grid;
