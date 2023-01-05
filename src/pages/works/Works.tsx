import { Box, Grid } from "@mui/material"
import { GithubCard, WorkCard } from "../../shared/components"
import { useLangContext } from "../../shared/contexts"

import gstock from '../../assets/gstock.jpg'

export const Works = () => {
  const { getLang } = useLangContext()
  const lang: any = getLang

  return (
    <Box
      flex={1}
      display='flex'
      flexDirection='column'
    >
      <Box
          pb={3}
      >
        <GithubCard
          title={lang.works.github.title}
          caption={lang.works.github.caption}
        />
      </Box>
      <Grid container
        spacing={2}
      >
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <WorkCard
            title='Site GStock'
            description='Construção do site, da logo e da identidade visual da empresa.'
            image={gstock}
          />
        </Grid>
      </Grid>
    </Box>
  )
}