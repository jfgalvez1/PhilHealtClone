import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Navbar from './components/Navbar';
import ImageCarousel from './components/ImageCarousel';
import Hero from './components/Hero';
import { Grid } from '@mui/material';


const appStyle = {
  backgroundImage: 'url(https://www.philhealth.gov.ph/images/bg_green.jpg)',
}

function App() {

  // const articleSection = [];
  // for(let i = 0; i<articles.length; i++){
  //   const article = articles[i];
  //   articleSection.push(
  //       <Hero title={article.title} body={article.body} />
  //   )
  // }

  return (
    <div className="App"
      style={appStyle}
    >
      <div>
        <Header />      
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <ImageCarousel />
      </div>
      <div>
        <Grid container>
        
        </Grid>
        <div>
          Links
        </div>
      </div>
      <div>
        Footer
      </div>
    </div>
  );
}

export default App;