import whiteIcon from '../../../assets/favicon/white.png';
import greenIcon from '../../../assets/favicon/green.png';
import { useAppThemeContext } from '../../contexts';
import { Box } from '@mui/material';

export const Favicon: React.FC<{height: number|string}> = ({height}) => {
  const { themeName } = useAppThemeContext()
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <img src={themeName==='dark'?greenIcon:whiteIcon} height={height} alt="logo." />
    </Box>
  )
}