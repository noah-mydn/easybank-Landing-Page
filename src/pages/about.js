import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system'
import { FEATURES } from './features';
import React from 'react'

export const About = () => {

    const theme = useTheme();

    const AboutContentContainer = styled(Box) ({
        display:'flex',
        width:'100%',
        flexDirection:'column',
        margin:'0 auto',    
        paddingTop:'1em',
        paddingLeft:'4em',

        '@media (max-width:1200px)' : {
            textAlign:'center',
            width:'60%'
          },

        '@media (max-width:899px)' : {
            paddingLeft:'1em'
          },

          '@media (max-width:700px)' : {
            paddingLeft:0,
            width:'80%'
          }
    })

    const FeaturesContainer = styled(Box) ({
        display:'flex',
        justifyContent:'center',
        width:'100%',
        padding:'2em 0 0 4em',
        flexWrap:'wrap',

        '@media (max-width:1200px)' : {
            padding:'2em 4em'
          },

          '@media (max-width:899px)' : {
            padding:'2em 3em'
          },

          '@media (max-width:899px)' : {
            padding:'2em 0'
          },


    })

    const FeatureContainer = styled(Box)({
        display:'flex',
        flexDirection:'column',
        flex:' 1 0 21%',
        
        '@media (max-width:1200px)' : {
            flex:' 1 0 45%',
          },

        '@media (max-width:700px)' : {
            flex:' 1 0 75%',
            alignItems:'center'
          }
        
    })
    

  return (
    <Grid container id='about' direction='row'
    sx={{backgroundColor: theme.palette.neutral.main,
        width:'100vw',
        marginTop:0,
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        padding:{sm:'2em', xs:'2em 0'}}}>
        <Grid item lg={6} xs={12}>
                <AboutContentContainer>
                    <Typography variant='h5' component='h5' 
                                sx={{color:theme.palette.primary.main,
                                    paddingBottom:'1.2em'
                                }}>
                            Why Choose Easybank?
                    </Typography>

                    <Typography variant='body2' component='body2' 
                    color={theme.palette.neutral.darker}>
                        We leverage Open Banking to turn your bank account into your
                        financial hub. Control your finances like never before.
                    </Typography>
                </AboutContentContainer>
                
        </Grid>
        <Grid item lg={6} xs={0}></Grid>
        <Grid item sm={12}>
            <FeaturesContainer>
                {FEATURES.map((feature)=>(
                    <FeatureContainer key={feature.id}>
                        <Box component='img' sx={{width:'50px', height:'50px'}}
                            pt={'1.5em'}
                            src={feature.icon} alt={feature.title}/>
                        
                        <Typography variant='body1' 
                        sx={{padding:'1.2em 0'}}
                        color={theme.palette.primary.main}>
                            {feature.title}
                        </Typography>

                        <Typography variant='caption' 
                        sx={{width:'80%',
                        '@media (max-width:1200px)' : {
                            width:'75%'
                          },

                          '@media (max-width:899px)' : {
                            width:'90%'
                          },

                          '@media (max-width:700px)' : {
                            textAlign:'center',
                            width:'70%'
                          },
                        }}
                        color={theme.palette.neutral.darker}>
                            {feature.text}
                        </Typography>
                    </FeatureContainer>
                ))}
            </FeaturesContainer>
        </Grid>
    </Grid>
  )
}
