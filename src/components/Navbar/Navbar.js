import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';

export const Navbar = () => {
    const theme = useTheme();
    const screenWidth = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
        {screenWidth ? <DesktopNavbar/> : <MobileNavbar/>}
    </>
  )
}
