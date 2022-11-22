import styled from '@emotion/styled';
import {Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system';
import { CONTENT } from './blogContent';
import React from 'react'

export const Blogs = () => {

    const theme = useTheme();

    const BlogCollections = styled(Box) ({
        display:'flex',
        flexWrap:'wrap',
        flexGrow:1,
        flexShrink: 0,
        maxWidth:'100vw',
        padding:'2em 0 0 0',
        justifyContent:'flex-start',

        '@media (max-width:1360px)' : {
            padding:'2em 0',
            justifyContent:'space-between'
          },

          '@media (max-width:1200px)' : {
            justifyContent:'space-evenly'
          },

          '@media (max-width:899px)' : {
            padding:'2em 0',
           
            
          },

    })

    const BlogCard= styled(Card)({
        margin:'0 2em 0 0',
        maxWidth:280,
        
        '@media (max-width:1360px)' : {
            margin:'3.2em 1.8em 0 0'
          },
    })


  return (
        <Box bgcolor={theme.palette.neutral.light} id='blog'
        sx={{width:'fit-content',
             padding:{md:'3em 0 2em 4.5em',xs:'3em 0 0 2em'},
             }}>
            <Typography variant='h5' component='h5' color={theme.palette.primary.main}>
                Latest Articles
            </Typography>
            <BlogCollections>
                {CONTENT.map((content)=>(
                    <BlogCard key={content.id}>
                        <CardMedia
                            component="img"
                            height="185"
                            image={content.image}
                            alt={content.title}
                        />

                        <CardContent sx={{
                            padding:'1.5em'
                        }}>
                            <Typography variant='caption' gutterBottom
                            color={theme.palette.neutral.darker}
                            fontWeight={theme.typography.fontWeightLight}>
                                {content.author}
                            </Typography>

                            <Typography variant='h6' gutterBottom
                            sx={{lineHeight:'25px'}}
                            color={theme.palette.primary.main}
                            fontWeight={theme.typography.fontWeightMedium}>
                                {content.title}
                            </Typography>

                            <Typography variant='subtitle1' gutterBottom
                            color={theme.palette.neutral.darker}>
                                {content.text}
                            </Typography>
                        </CardContent>
                    </BlogCard>
                ))}
            </BlogCollections>

        </Box>    
  )
}
