import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Tabs,
  Tab,
  Box,
} from '@mui/material';
import { useLoginDialog } from 'hooks/dialog';
import { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const LoginDialog = () => {
  const [tab, setTab] = useState('signin');
  const { isOpen, close } = useLoginDialog();

  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <Dialog open={isOpen} onClose={close}>
      <Tabs value={tab} onChange={handleChange} variant="fullWidth">
        <Tab value="signin" label="Sign In">
          Sign In
        </Tab>
        <Tab value="signup" label="Sign Up">
          Sign Up
        </Tab>
      </Tabs>
      {tab === 'signin' && <SignInForm onCancel={close} onSignIn={close} />}
      {tab === 'signup' && <SignUpForm onCancel={close} onSignIn={close} />}
    </Dialog>
  );
};

export default LoginDialog;
