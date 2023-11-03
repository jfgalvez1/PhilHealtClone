import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import '../App.css';
import Header from '../components/Header'
import Navbar from '../components/Navbar';
import ImageCarousel from '../components/ImageCarousel';
import Hero from '../components/Hero';
import LinkComponent from '../components/LinkComponent';
import { Grid } from '@mui/material';
import { Article, getArticles } from '../services/articles';
import { Link, getLinks } from '../services/links';


const appStyle = {
  backgroundImage: 'url(https://www.philhealth.gov.ph/images/bg_green.jpg)',
}

function Home() {
  const [articles, setArticles] = useState<Array<Article>>([]);
  const [links, setLinks] = useState<Array<Link>>([]);
  console.log(articles.length)
  
  useEffect(()=> {
    getArticles().then((articles)=> {
      setArticles(articles)
    });
  }, []);

  useEffect(()=> {
    getLinks().then((links)=> {
      setLinks(links)
    });
  }, []);

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
          {
            articles.map((article)=> {
              return <Hero title={article.title} body={article.body} imageUrl={article.imageUrl} />
            })
          }
        </Grid>
        <div>
       
        {
            links.map((link)=> {
              return <LinkComponent title={link.title} linkUrl={link.linkUrl} />
            })
          }
           
        </div>
      </div>
      <div>
        Footer
      </div>
    </div>
  );
}

export default Home;