import { AppBar, Toolbar, Box } from '@mui/material';

import Logo from './Logo';
import Nav from './Nav';
import Drawer from './Drawer';
import Account from './Account';

const Navigation = ({ pages = [] }) => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ position: 'relative' }}>
        <Box display={{ xs: 'block', sm: 'none' }}>
          <Drawer pages={pages} />
        </Box>

        <Box
          display={{ xs: 'block', sm: 'none' }}
          position="absolute"
          top="50%"
          left="50%"
          sx={{ transform: 'translate(-50%, -50%)' }}
        >
          <Logo />
        </Box>

        <Box display={{ xs: 'none', sm: 'block' }} mr={4}>
          <Logo />
        </Box>

        <Box display={{ xs: 'none', sm: 'block' }}>
          <Nav pages={pages} />
        </Box>

        <Box ml="auto">
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
