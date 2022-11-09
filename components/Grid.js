import { Container } from '@mui/material';
import { default as MuiGrid } from '@mui/material/Unstable_Grid2';
import Card from './Card';

const Grid = ({ list }) => (
  <Container sx={{ my: 4 }}>
    <MuiGrid container spacing={4}>
      {list.map(el => (
        <MuiGrid xs={12} md={6} key={el.slug}>
          <Card {...el} />
        </MuiGrid>
      ))}
    </MuiGrid>
  </Container>
);

export default Grid;
