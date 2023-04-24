import { useRef, useState } from 'react';
import { AccountCircle } from '@mui/icons-material';
import { CircularProgress, IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useSignOut, useUser } from 'hooks/identity';
import SignInButton from './SignInButton';

const Account = () => {
  const user = useUser();

  const [open, setOpen] = useState(false);
  const anchor = useRef(null);

  const handleOpenMenu = () => setOpen(true);
  const handleCloseMenu = () => setOpen(false);

  const signOut = useSignOut();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    const res = await signOut();
    setLoading(false);
    handleCloseMenu();
  };

  // TODO: display progress while loading

  if (!user) return <SignInButton />;

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
        <MenuItem onClick={handleSignOut}>
          {loading ? (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CircularProgress color="inherit" size="1.2rem" />
            </div>
          ) : (
            'Sign Out'
          )}
        </MenuItem>
      </Menu>
    </>
  );
};

export default Account;
