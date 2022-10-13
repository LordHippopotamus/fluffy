import { useState, useRef } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = ({ pages = [] }) => {
  const [open, setOpen] = useState(false);
  const anchor = useRef(null);

  const handleOpenMenu = () => setOpen(true);
  const handleCloseMenu = () => setOpen(false);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box flexGrow={1}>
          <Link href="/">
            <Typography variant="h6" sx={{ display: 'inline-block', cursor: 'pointer' }}>
              Fluffy
            </Typography>
          </Link>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {pages.map(el => (
            <Link href={'/pages/' + el.slug} key={el.slug}>
              <Button color="inherit">{el.title}</Button>
            </Link>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Box ref={anchor} onClick={handleOpenMenu}>
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
          <Menu open={open} onClose={handleCloseMenu} anchorEl={anchor.current} keepMounted>
            {pages.map(el => (
              <Link href={'/pages/' + el.slug} key={el.slug}>
                <MenuItem>{el.title}</MenuItem>
              </Link>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
