import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box } from '@mui/material';

function ImageCarousel()  {
    
        return (
            <Box sx={{
                paddingX: {
                  md:24
                }
            }} mt={5}>
            <Carousel>
                <div>
                    <img src="https://www.philhealth.gov.ph/images/thankyou_bnnr01.jpg" />
                </div>
                <div>
                    <img src="https://www.philhealth.gov.ph/images/membership_bnnr02.jpg" />
                </div>
                <div>
                    <img src="https://www.philhealth.gov.ph/images/bagongpilipinas_bnnr_v1.jpg" />  
                </div>
                <div>
                    <img src="https://www.philhealth.gov.ph/images/bagongpilipinas_bnnr_v1.jpg" />  
                </div>
                <div>
                    <img src="https://www.philhealth.gov.ph/images/bagongpilipinas_bnnr_v1.jpg" />  
                </div>
                <div>
                    <img src="https://www.philhealth.gov.ph/images/bagongpilipinas_bnnr_v1.jpg" />  
                </div>
                <div>
                    <img src="https://www.philhealth.gov.ph/images/bagongpilipinas_bnnr_v1.jpg" />  
                </div>
            </Carousel>
            </Box>
        );
    
};

// ReactDOM.render(<ImageCarousel />, document.querySelector('.demo-carousel'));

export default ImageCarousel;