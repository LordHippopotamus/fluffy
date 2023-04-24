import { Email, Visibility, VisibilityOff, Lock } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  DialogActions,
  DialogContent,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { useLoginDialog } from 'hooks/dialog';
import { useSignIn } from 'hooks/identity';
import { useState } from 'react';

// TODO: needs refactor

const SignInForm = ({ onCancel }) => {
  const signIn = useSignIn();
  const { close } = useLoginDialog();

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleSignIn = async event => {
    // TODO: add validation
    event.preventDefault();
    const formData = new FormData(event.target);
    setLoading(true);
    const res = await signIn(formData.get('email'), formData.get('password'));
    setLoading(false);
    return close();
  };

  const handleChangeVisible = () => setVisible(!visible);

  return (
    <form onSubmit={handleSignIn}>
      <DialogContent>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email fontSize="small" />
              </InputAdornment>
            ),
          }}
          autoFocus
          margin="normal"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock fontSize="small" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleChangeVisible}
                  edge="end"
                >
                  {visible ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          margin="normal"
          name="password"
          label="Password"
          type={visible ? 'text' : 'password'}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <LoadingButton loading={loading} type="submit">
          Sign In
        </LoadingButton>
      </DialogActions>
    </form>
  );
};

export default SignInForm;
