import { Box, Grid, Typography } from "@mui/material"

interface HeroProps {
  title?: string;
  subTitle?: string;
  header?: string;
  body?: string;
  imageUrl?: string;
}

const Hero = (props: HeroProps) => {
  return (
    <Grid sm={12} md={6}>
      <Box boxShadow={20} borderRadius={2} sx={{
        backgroundColor: 'rgba(250, 250, 250, 1)',
        marginX: {
          md: 2,
        },
        paddingY: 5,
        marginY: 1,
        paddingX: {
          md: 2
        }
      }}>
        {
          props.header && (
            <Box>
              {props.header}
            </Box>
          )
        }
        <Box>
        { props.imageUrl && 
              <img src={props.imageUrl} alt="Image" style={{ maxWidth: '100%' }} />
          }
        </Box>
        <Box>
          { props.title && 
            <Typography variant="h4">{props.title}</Typography>
          }
          { props.subTitle &&
            <Typography variant="h6">{props.subTitle}</Typography>
          }
          { props.body &&
            <Typography variant="body1">{props.body}</Typography>
          }
        </Box>
      </Box>
    </Grid>
  )
}

export default Hero;