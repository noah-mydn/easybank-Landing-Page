import { createTheme, responsiveFontSizes } from "@mui/material/styles"

export let theme = createTheme({
    palette :
        {
            primary : {
                main : "hsl(233, 26%, 24%)"
            },

            secondary : {
                main : "hsl(136, 65%, 51%)"
            },

            tertiary : {
                main : "hsl(192, 70%, 51%)"
            },

            neutral : {
                light : "hsl(0, 0%, 100%)",
                main:"hsl(0, 0%, 98%)",
                dark:"hsl(220, 16%, 96%)",
                darker:"hsl(233, 8%, 62%)"
            }
        },

    typography : {
        fontFamily: ['Public Sans', 
                    'sans-serif'].join(','),
        fontWeightRegular:300,
        fontWeightMedium:400,
        fontWeightBold:700,
        fontSize:18,
        '@media (max-width:700px)': {
            fontSize: 16,
          },

        h6 : {
            fontSize:18,
            padding:'0.5em 0',
        },

        caption: {
            fontSize:14,
        },
        
        subtitle1 : {
            fontSize:16,
        }
    },

    breakpoints: {
        values: {
          xs: 0,
          sm: 700,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
});


theme= responsiveFontSizes(theme);