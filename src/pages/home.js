import { useTheme } from '@emotion/react'
import styled from '@emotion/styled';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'
import { RequestButton } from '../components/Navbar/DesktopNavbar';

export const Home = () => {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('sm'))

    const IntroTextContainer = styled(Box) ({
      width:'60%',
      display:'flex',
      flexDirection:'column',
      paddingLeft:'4.5em',   
      paddingTop:'3em',

      '@media (max-width:1200px)' : {
        width:'70%'
    },

    '@media (max-width:899px)' : {
      width:'100%',
      paddingLeft:'1em'
    },

    '@media(max-width:700px)': {
      paddingLeft:0,
    }
    })

    const TitleText = styled(Typography) ({
      color:theme.palette.primary.main,
      paddingBottom:'0.65em',

      '@media (max-width:700px)' : {
        textAlign:'center'
       },

      '@media (max-width:599px)' : {
       textAlign:'center'
      }
    })

    const BodyText = styled(Typography)({
      color:theme.palette.neutral.darker,
      paddingBottom:'1.5em',

      '@media (max-width:700px)' : {
        textAlign:'center',
        paddingBottom:'3em',
        margin:'0 auto',
        width:'60%'
       },

      '@media (max-width:599px)' : {
        textAlign:'center',
        width:'80%'
       }
    })

    const BackgroundImage = styled(Box) ({
      position: 'absolute',
      width:'fit-content',
      height: '100%',
      left: 0,
      top: '-8%',

      '@media (max-width:900px)' : {
        top:'-12%',
        width:'max-content'
      },

      '@media (max-width:700px)' : {
        width:'120%',
        left:'-10%',
        top:'8%',
      }
    })

    const MockupMobileImage = styled(Box) ({
      position: 'relative',
      left: '30%',
      top:'4%',
      width: '80%',
      zIndex: 1,
    
      '@media (max-width:700px)' : {
          top:'-4%',
          left:'15%'
      }

    })


  return (
    <Grid container id='home' direction='row'
    sx={{width:'100vw',
    margin:0,
    backgroundColor:theme.palette.neutral.light,
    flexDirection:'row',
    padding:'1em 0 3em 0',
    justifyContent:'center',
    alignContent:{sm:'center',xs:'start'},
    alignItems:{sm:'center'},
    height:{sm:'550px', xs:'fit-content'},
  }}>
        
        {!match && <>
          <Grid item sm={6}>
            <IntroTextContainer>
              <TitleText variant='h4' component='h4'>Next generation digital banking</TitleText>
              <BodyText variant ='body2' component='h4'>
                  Take your financial online. Your Easybank account will be a one-stop
                  shop for spending, saving, budgeting, investing and much more
              </BodyText>
              <RequestButton size='small' 
              sx={{width:'45%',
              '@media (max-width:1200px)' : {
                width:'55%'
            },
              '@media (max-width:899px)' : {
                width:'50%'
            },}}>Request Invite</RequestButton>
            </IntroTextContainer>
          </Grid>
          <Grid item sm={6}
          display='flex' 
          justifyContent='flex-end'>
              <Stack sx={{position:'relative'}} >
                <BackgroundImage src='./assets/images/bg-intro-desktop.svg' component='img'
                alt='background for intro'
                className='intro-img'/>
                <MockupMobileImage src='./assets/images/image-mockups.png' component='img'
                alt='mobiles for intro'
                className='intro-mobile-img'/>
              </Stack>
              
          </Grid> 
        </>}

        {match && <>
          <Grid item xs={12}
                  display='flex' 
                  justifyContent='flex-end'>
              <Stack sx={{position:'relative'}} >
                <BackgroundImage src='./assets/images/bg-intro-mobile.svg' component='img'
                alt='background for intro'
                className='intro-img'/>
                <MockupMobileImage src='./assets/images/image-mockups.png' component='img'
                alt='mobiles for intro'
                className='intro-mobile-img'/>
              </Stack>
              
          </Grid>
            <Grid item xs={12}>
              <IntroTextContainer>
                <TitleText variant='h3' component='h3'>Next generation<br/>digital banking</TitleText>
                <BodyText variant ='body2' component='h4'>
                    Take your financial online. Your Easybank account will be a one-stop
                    shop for spending, saving, budgeting, investing and much more
                </BodyText>
                <RequestButton size='small' 
                  sx={{width:'45%',
                  '@media (max-width:1200px)' : {
                    width:'55%'
                },

                '@media (max-width:900px)' : {
                    width:'28%'
                },
                  '@media (max-width:700px)' : {
                    width:'35%',
                    margin:'0 auto'
                },}}>Request Invite
              </RequestButton>
              </IntroTextContainer>
            </Grid> 
            
        </>}
    </Grid>
  )
}
