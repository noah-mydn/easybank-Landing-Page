import { keyframes, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { AppBar, Button, Grid, Toolbar, Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'



const onHoverAnimation = keyframes`
    
    0% {
        background: linear-gradient(270deg, hsl(136, 65%, 51%) , hsl(136, 65%, 51%), hsl(192, 70%, 51%));
    }
    25% {
        background: linear-gradient(270deg, hsl(192, 70%, 51%),hsl(136, 65%, 51%) ,hsl(192, 70%, 51%));
    }
    50% {
        background: linear-gradient(270deg,hsl(192, 70%, 51%),hsl(192, 70%, 51%),hsl(136, 65%, 51%));
    }
    75% {
        background: linear-gradient(270deg, hsl(136, 65%, 51%),hsl(192, 70%, 51%), hsl(136, 65%, 51%));
    }
    100% {
        background: linear-gradient(270deg, hsl(136, 65%, 51%),hsl(192, 70%, 51%),hsl(136, 65%, 51%),hsl(192, 70%, 51%));
    }`;

export const RequestButton = styled(Button) (({theme})=>({
    textTransform:'none',
    padding:'0.3em 1em',
    fontFamily:theme.typography.fontFamily,
    fontWeight:theme.typography.fontWeightMedium,
    borderRadius:'30px',
    color:theme.palette.neutral.light,
    background: 'linear-gradient(270deg, hsl(136, 65%, 51%),hsl(192, 70%, 51%))',
    
    '&:hover' : {
        animation : `${onHoverAnimation} 1000ms infinite  ease-in-out`,
        },
    }
))


export const DesktopNavbar = () => {

    const theme = useTheme();

  return (
        <AppBar sx={{background:theme.palette.neutral.light, 
                    boxShadow:'0 0 2px 1px rgba(0,0,0,0.1)',
                    height:'4em',
                    zIndex:2}}>
            <Toolbar>
                <Grid container alignItems='center'
                      justifyContent='space-between'
                      sx={{height:'100%'}}>
                    <Grid item xs={2}>
                        <Box  component='img' 
                        sx ={{width:'120px', height:'auto'}}
                        src='./assets/images/logo.svg'/>
                    </Grid>
                    <Grid item xs={7} 
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    sx={{position:'relative', 
                         width:'100%',
                         height:'100%',
                         }}>
                            <Link underline='none' color={theme.palette.neutral.darker} href='#home'  className='navlink'>Home</Link>
                            <Link underline='none' color={theme.palette.neutral.darker} href='#about' className='navlink'>About</Link>
                            <Link underline='none' color={theme.palette.neutral.darker} href='#contact' className='navlink'>Contact</Link>
                            <Link underline='none' color={theme.palette.neutral.darker} href='#blog' className='navlink'>Blog</Link>
                            <Link underline='none' color={theme.palette.neutral.darker} href='#careers' className='navlink'>Careers</Link>

                    </Grid>
                    <Grid item xs={3} display='flex' justifyContent='flex-end'>
                        <RequestButton size='small'>Request Invite</RequestButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
  )
}
