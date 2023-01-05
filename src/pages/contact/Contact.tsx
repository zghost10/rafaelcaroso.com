import { useTheme } from '@mui/system'
import { useMediaQuery } from '@mui/material'
import { Box, Typography, Divider } from "@mui/material"
import { useLangContext } from '../../shared/contexts'

export const Contact = () => {
  const theme = useTheme()
  const { getLang } = useLangContext()
  const lang: any = getLang
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'))
  const xlgDown = useMediaQuery(theme.breakpoints.down('xl'))

  return (
    <Box
      flex={1}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap={2}
    >
      <Box
        display='flex'
        flexDirection='column'
        textAlign='start'
        width={smDown?'90vw':mdDown?'80vw':lgDown?'70vw':xlgDown?'60vw':'50vw'}
        gap={2}
      >
        <Typography variant={smDown?"h4":"h3"}>
          {lang.contact.title}
        </Typography>
        <Divider/>
        <Typography textAlign='justify' variant={smDown?"h6":"h5"}>
          @rafaelcaroso
        </Typography>
      </Box>
    </Box>
  )
}