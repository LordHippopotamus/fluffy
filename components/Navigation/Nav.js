import { Button } from '@mui/material';
import Link from 'next/link';

const Nav = ({ pages }) => (
  <>
    <Link href="/">
      <Button color="inherit">Home</Button>
    </Link>
    {pages.map(el => (
      <Link href={'/pages/' + el.slug} key={el.slug}>
        <Button color="inherit" sx={{ ml: 2 }}>
          {el.title}
        </Button>
      </Link>
    ))}
  </>
);

export default Nav;
