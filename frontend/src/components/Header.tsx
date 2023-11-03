// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import SearchIcon from '@mui/icons-material/Search';

// const appBarStyle = {
//   backgroundColor: "white"
// };

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));


// function Header(){

//   return(
//     <AppBar position="static"
//       style={appBarStyle}
//     >
//     <Toolbar variant="dense">
//     <div>
//     <img
//       src={`https://www.philhealth.gov.ph/images/ph_logo0.png`}
//       alt={"logo"}
//       loading="lazy"
//     />
//      <img
//       src={`https://www.philhealth.gov.ph/images/bagong_pilipinas_logo3.png`}
//       alt={"logo"}
//       loading="lazy"
//     />
//     </div>

//     <div>
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
         
//           <Search>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//         </Toolbar>
//       </AppBar>
//     </Box>

//     </div>

    
//       <Typography variant="h6" color="inherit" component="div">
     
//       </Typography>
//     </Toolbar>
  
//   </AppBar>
//   );

// } 


// export default Header;





import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const appBarStyle = {
  backgroundColor: "white",
  paddingBottom: '1rem'
};



export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={appBarStyle}>
        <Toolbar>
         
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            
            <div style={{display: 'flex', justifyContent: 'left'}}>
            <img
            src={`https://www.philhealth.gov.ph/images/ph_logo0.png`}
            alt={"logo"}
             loading="lazy"
            />
             <img
            src={`https://www.philhealth.gov.ph/images/bagong_pilipinas_logo3.png`}
            alt={"logo"}
             loading="lazy"
            />
            </div>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}


