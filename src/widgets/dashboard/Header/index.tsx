import {FC, ReactNode} from 'react';
import {useNavigate} from 'react-router-dom';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import {Box, IconButton, Typography} from '@mui/material';

interface Props {
  title: string;
  rightPart?: ReactNode;
}

export const Header: FC<Props> = ({title, rightPart}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      pt={4}
      pb={3}
      minHeight={114}
      gap={1}
    >
      <IconButton aria-label="back" onClick={handleBack}>
        <WestOutlinedIcon />
      </IconButton>

      <Typography
        sx={{
          fontWeight: 500,
          fontSize: 32,
        }}
      >
        {title}
      </Typography>

      {rightPart && <Box marginLeft="auto">{rightPart}</Box>}
    </Box>
  );
};
