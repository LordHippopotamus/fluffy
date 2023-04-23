import Link from 'next/link';
import PetsIcon from '@mui/icons-material/Pets';
import { useTheme, Typography } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Link href="/">
      <Typography
        variant="h6"
        sx={{ display: 'flex', alignItems: 'center', gap: 1, width: 119, cursor: 'pointer' }}
      >
        <PetsIcon color={theme.palette.mode === 'dark' ? 'primary' : 'inherit'} />
        Fluffy
      </Typography>
    </Link>
  );
};

export default Logo;
