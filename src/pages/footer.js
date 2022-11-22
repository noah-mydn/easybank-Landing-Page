import styled from '@emotion/styled';
import { BottomNavigation, Box, Grid, Link, Typography, useTheme } from '@mui/material'
import React from 'react'
import { RequestButton } from '../components/Navbar/DesktopNavbar';

export const Footer = () => {
    const theme = useTheme();
    const contactIcons = ['./assets/images/icon-facebook.svg','./assets/images/icon-youtube.svg',
                          './assets/images/icon-twitter.svg','./assets/images/icon-pinterest.svg',
                          './assets/images/icon-instagram.svg',]

    const ContactContainer = styled(Box) ({
        display:'flex',
        flexDirection:'column',
        alignContent:'center',

        '@media (max-width:700px)': {
            paddingBottom:'2em'
        }

    })

    const IconsContainer = styled(Box)({
        display:'flex',
        paddingTop:'2em'
    })

    const Icons = styled(Box)({
        margin:'0 0.5em 0 0'
    })

    const BottomNavigation = styled(Box)({
        display:'flex',
        flexDirection:'column',
        color:theme.palette.neutral.main,
        width:'fit-content',

        '@media (max-width:700px)': {
            alignContent:'center',
            alignItems:'center',
            gap:'0.7em',

        }

    
    })

  return (
    <Grid container disabledGutters id='contact'
     sx={{
        width:'100vw',
        margin:0,
        padding:{md:'4em 4em 0 4em', sm:'4em 2em 0 2em',xs:'2em 0 0 0'},
        justifyContent:{md:'space-evenly', sm:'space-between'},
        background:theme.palette.primary.main,

        '@media (max-width:700px)': {
            paddingTop:'2em',
            flexDirection:'column',
            alignContent:'center',
            alignItems:'center'
        }
    }}>
        <Grid item sm={2} xs={12}>
            <ContactContainer>
                <Box component='img' src='./assets/images/logo-footer.svg' alt='website logo'
                     sx={{width:'130px', height:'auto',}}/>
                <IconsContainer>
                    {contactIcons.map((icon)=>(
                        <Icons component='img' src={icon} alt='social-icon'
                        sx={{width:'23px', height:'auto'}}/>
                    ))}
                </IconsContainer>
            </ContactContainer>
        </Grid>
        <Grid item md={2} sm={3} xs={12}>
            <BottomNavigation m='0 auto'>
                <Typography variant='subtitle1'>About Us</Typography>
                <Typography variant='subtitle1'>Contact</Typography>
                <Typography variant='subtitle1'>Blog</Typography>
            </BottomNavigation>
        </Grid>
        <Grid item md={2} sm={3} xs={12}>
            <BottomNavigation m='0 auto' sx={{
                '@media (max-width:700px)': {
                    paddingTop:'0.7em',
                }
            }}>
                <Typography variant='subtitle1'>Careers</Typography>
                <Typography variant='subtitle1'>Support</Typography>
                <Typography variant='subtitle1'>Privacy Policy</Typography>
            </BottomNavigation>
        </Grid>
        <Grid item sm={4} xs={12} pt='1.2em'>
            <Box
            sx={{display:'flex', 
            flexDirection:'column',
            marginLeft:'auto',
            width:'fit-content',
            
            '@media (max-width:700px)': {
                margin:0,
            }
            
            }}>
                <RequestButton sx={{
                width:'85%',
                marginLeft:'auto' ,
                marginBottom:'1.5em',

                '@media (max-width:700px)': {
                    margin:'1em auto',
                }
                }}
                >
                    Request Invites
                </RequestButton>
                <Typography variant='caption' color={theme.palette.neutral.darker}>
                    &copy;Easybank. All Rights Reserved.
                </Typography>
            </Box>
            
        </Grid>
        <Grid item xs={12} textAlign='center' pb={1} pt={2}>
            <Typography variant='caption' 
            color={theme.palette.neutral.light}>
                Challenge by Frontend Mentor. Coded by  
                <Link href='https://github.com/noah-mydn' underline='none'
                color={theme.palette.secondary.main}>
                     &nbsp;May Yadanar
                </Link>
            </Typography>
            
        </Grid>
    </Grid>
  )
}
