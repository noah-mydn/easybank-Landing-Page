import { useTheme } from '@emotion/react'
import { CloseRounded, MenuRounded } from '@mui/icons-material'
import { AppBar, Grid, IconButton,  Popover, Toolbar, Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


export const MobileNavbar = () => {
   
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'popover-navigation' : undefined;

    const handleClick = (event) => {
        if (!open) {
        setAnchorEl(event.currentTarget);}

        else
            handleClose();
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
  return (
    <AppBar elevation={0}
        sx={{background:theme.palette.neutral.light, 
        boxShadow:'0 0 2px 1px rgba(0,0,0,0.1)',
        height:'5em',
        zIndex:2}}>
        <Toolbar>
            <Grid container justifyContent='space-between' alignItems="center"
            sx={{height:'100%', padding:'1em 0'}}>
                <Box item xs='auto' component='img' src='./assets/images/logo.svg'
                    sx={{width:'150px',height:'auto'}}
                    alt='website logo'/>
                <IconButton item xs='auto' 
                            color={theme.palette.neutral.darker}
                            onClick={handleClick}
                            aria-describedby={id}
                            aria-label='open navigation'>
                        {open ? <CloseRounded fontSize='16px'/> : <MenuRounded fontSize='16px'/>}
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 80, left: 280 }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}>  

                    <Box sx={{display:'flex', flexDirection:'column', 
                    color:theme.palette.neutral.darker,
                    padding:"1em 3em",
                    alignItems:'center',
                    margin:'0 5em'
                    }}>
                        <Link href='#home' underline='none' className='navlinkMobile'>
                                    Home</Link>
                        <Link href='#about' underline='none' className='navlinkMobile'>
                                    About</Link>
                        <Link href='#contact' underline='none' className='navlinkMobile'> 
                                    Contact</Link>
                        <Link href='#blog' underline='none' className='navlinkMobile'>
                                    Blog</Link>
                        <Link href='' underline='none' className='navlinkMobile'>
                                    Careers</Link> 
                    </Box>
                </Popover>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
