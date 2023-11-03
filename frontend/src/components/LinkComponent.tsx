import { Box, Grid, Typography } from "@mui/material"

interface HeroProps {
  title?: string;
  linkUrl?: string;

}

const LinkComponent = (props: HeroProps) => {
  return (
    <Grid sm={12} md={6}>
      
        
        <Box>
          { props.title && 
            <Typography variant="h4"> <a href={props.linkUrl}>{props.title}</a></Typography>
          }
        </Box>
      
    </Grid>
  )
}

export default LinkComponent;