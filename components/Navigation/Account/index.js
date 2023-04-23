import { useRef, useState } from 'react';
import { AccountCircle } from '@mui/icons-material';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';

const Account = () => {
  // TODO: use user when the auth is implemented
  const user = null;
  const [open, setOpen] = useState(false);
  const anchor = useRef(null);

  const handleOpenMenu = () => setOpen(true);
  const handleCloseMenu = () => setOpen(false);

  if (!user) {
    return (
      <Button variant="contained" color="inherit">
        Sign In
      </Button>
    );
  }

  return (
    <>
      <IconButton ref={anchor} onClick={handleOpenMenu}>
        <AccountCircle fontSize="large" />
      </IconButton>
      <Menu
        open={open}
        onClose={handleCloseMenu}
        anchorEl={anchor.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Link href="/profile">
          <MenuItem>Profile</MenuItem>
        </Link>
        <MenuItem>Sign Out</MenuItem>
      </Menu>
    </>
  );
};

export default Account;
