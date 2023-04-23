import { useState, useRef } from 'react';
import Link from 'next/link';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

const Drawer = ({ pages }) => {
  const [open, setOpen] = useState(false);
  const anchor = useRef(null);

  const handleOpenMenu = () => setOpen(true);
  const handleCloseMenu = () => setOpen(false);

  return (
    <>
      <Box ref={anchor} onClick={handleOpenMenu}>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
      </Box>
      <Menu open={open} onClose={handleCloseMenu} anchorEl={anchor.current} keepMounted>
        <Link href="/">
          <MenuItem>Home</MenuItem>
        </Link>
        {pages.map(el => (
          <Link href={'/pages/' + el.slug} key={el.slug}>
            <MenuItem>{el.title}</MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  );
};

export default Drawer;
