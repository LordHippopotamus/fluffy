import { Button } from '@mui/material';
import { useLoginDialog } from 'hooks/dialog';

const SignInButton = () => {
  const { open } = useLoginDialog();

  return (
    <Button variant="contained" color="inherit" onClick={open}>
      Sign In
    </Button>
  );
};

export default SignInButton;
