import { useTheme } from '@mui/system'
import { Link, useMediaQuery } from '@mui/material'
import { Box, Typography, Divider, Button } from "@mui/material"
import { useLangContext } from '../../shared/contexts'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { css } from '@emotion/react';

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
          
        </Typography>
        <Link href="mailto:contato@rafaelcaroso.com" color='inherit' underline="none">
          contato@rafaelcaroso.com
        </Link>
        <Box display='flex' gap={1}>
          <Button
            variant='contained'
            endIcon={<InstagramIcon/>}
            onClick={() => window.open('https://instagram.com/rafaelcaroso','_BLANK')}
            sx={{
              bgcolor: '#DD2A7B',
              "&:hover":{
                bgcolor: '#8134Af',
              },
            }}
          >
            Instagram
          </Button>
          <Button
            variant='contained'
            endIcon={<LinkedInIcon/>}
            onClick={() => window.open('https://linkedin.com/in/rafael-karoso','_BLANK')}
            sx={{
              bgcolor: '#0072B1',
              "&:hover":{
                bgcolor: '#0E76A8',
              },
            }}
          >
            Linkedin
          </Button>
          <Button
            variant='contained'
            endIcon={<GitHubIcon/>}
            onClick={() => window.open('https://github.com/zghost10','_BLANK')}
            sx={{
              bgcolor: '#171515',
              "&:hover":{
                bgcolor: '#333',
              },
            }}
          >
            Github
          </Button>
        </Box>
      </Box>
    </Box>
  )
}