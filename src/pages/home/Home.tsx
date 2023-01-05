import { useTheme } from '@mui/system'
import { useMediaQuery } from '@mui/material'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useLangContext } from '../../shared/contexts'

export const Home = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const { getLang } = useLangContext()
  const lang: any = getLang

  return (
    <Box
      flex={1}
      display='flex'
      flexDirection='column'
      textAlign='center'
      justifyContent='center'
      alignItems='center'
      gap={2}
    >
      <Box>
        <Typography variant={smDown?"h3":"h1"}>
          {lang.home.title}
        </Typography>

        <Typography variant={smDown?"h5":"h4"}>
          {lang.home.caption}
        </Typography>
      </Box>

      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap={1}
      >
        <Button onClick={() => navigate('/works')} variant='contained'>{lang.home.buttons.works}</Button>
        <Button onClick={() => navigate('/contact')} variant='outlined'>{lang.home.buttons.contact}</Button>
      </Box>
    </Box>
  )
}