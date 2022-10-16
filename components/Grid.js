import { Container, Grid as MuiGrid } from '@mui/material';
import Card from './Card';

const Grid = ({ list }) => (
  <Container sx={{ my: 4 }}>
    <MuiGrid container spacing={4}>
      {list.map(el => (
        <MuiGrid item xs={12} sm={6} md={4} lg={3} key={el.slug}>
          <Card {...el} />
        </MuiGrid>
      ))}
    </MuiGrid>
  </Container>
);

export default Grid;
