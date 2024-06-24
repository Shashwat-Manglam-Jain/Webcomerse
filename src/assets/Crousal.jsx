import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



class Crousal extends Component {
  render() {
    
    return (
      <div className='fixed'> <br /><br /><br /><br />
        <Carousel
          autoPlay={true}
          ariaLabel={false}
          centerMode={false} // Set centerMode to false
          interval={3000}
          showThumbs={false} // Hide the small images at the bottom
          showArrows={true} // Show navigation arrows
          showStatus={false} // Hide status information
          infiniteLoop={true} // Loop the carousel
          emulateTouch={true} // Enable touch emulation on desktop
          stopOnHover={true} // Pause autoplay on hover
          width="100% " // Set the carousel width
        >
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/GW/Lastdays2/Phase_3_Tallhero_3000x1200._CB574261257_.jpg" alt="Image 1" />
          </div>
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/PC_Hero_3000x1200_diwali_gifting._CB574261663_.jpg" alt="Image 2" />
          </div>
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Grocery/ARTs/Jupiter/Phase3/GW/PC_Hero_P3B_unrec_3000x1200._CB573772477_.jpg" alt="Image 3" />
          </div>
        </Carousel>
   
       
      </div>
    );
  }
}

export default Crousal;
