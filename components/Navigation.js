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
import PetsIcon from '@mui/icons-material/Pets';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@emotion/react';

const Navigation = ({ pages = [] }) => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const anchor = useRef(null);

  const handleOpenMenu = () => setOpen(true);
  const handleCloseMenu = () => setOpen(false);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box flexGrow={1}>
          <Link href="/">
            <Typography
              variant="h6"
              sx={{ display: 'flex', alignItems: 'center', gap: 1, width: 119, cursor: 'pointer' }}
            >
              <PetsIcon color={theme.palette.mode === 'dark' ? 'primary' : 'inherit'} />
              Fluffy
            </Typography>
          </Link>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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
        </Box>

        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
