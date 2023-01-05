import { useState } from 'react'
import { Box, Paper } from "@mui/material"
import { Outlet } from "react-router-dom"
import { UpperBar } from "../../components"
import { styled } from '@mui/material/styles';
import BottomNav from '../../components/bottom-nav/BottomNav';
import { useTheme } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { useAppThemeContext } from '../../contexts';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

export const DefaultLayout = () => {
  const { themeName } = useAppThemeContext();
  const [expanded, setExpanded] = useState(true);
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    return (
      <>
        <UpperBar/>
        <Box
          flex={1}
          py={smDown?10:12}
          display='flex'
          component="main"
          sx={{ px: 3 }}
        >
          <Outlet/>
        </Box>
        <Box sx={{ display: {xs: 'block', sm: 'none'},  position: 'fixed', bottom: 0, left: 0, right: 0 }}>
          <BottomNav/>
        </Box>
      </>
    )
}