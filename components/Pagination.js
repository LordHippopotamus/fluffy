import { Container, Pagination as MuiPagination, PaginationItem } from '@mui/material';
import Link from 'next/link';

const Pagination = ({ page, count }) => (
  <Container sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
    <MuiPagination
      page={page}
      count={count}
      size="large"
      renderItem={item => (
        <Link href={'?page=' + item.page}>
          <PaginationItem {...item} />
        </Link>
      )}
    />
  </Container>
);

export default Pagination;
