import React from "react";
import '../About/about.css'

import { Container} from "react-bootstrap";
import book from '../../assets/images/image4.png'


const About = () => {
return (
  <div className='aboutus'>
      <div className='background'>
        
    <Container className='info'> 
    <div className="row align-items-center" id="pannel">
        <div className="col-lg-5 order-lg-2">
          <div className="p-5">
            <img className='book' src={book} alt="book image"/>
          </div>
        </div>
        <div className="col-lg-7 order-lg-1">
          <div className="p-5">
            <h3 className="storyTitle">Our Story</h3>

            <p>
Once upon a time, in a land filled with vibrant colors and boundless imagination, 
there was a remarkable company known as BeeBooks. This enchanting company was born out of a deep love for 
storytelling and a desire to ignite the spark of imagination in every child's heart.</p>

<p> As the days and years went by, BeeBooks grew and flourished. 
  It became a beloved destination for children and parents alike, a digital 
  sanctuary where the magic of books came to life. The website's shelves expanded with each passing day, offering an 
  ever-expanding collection of tales that captured the hearts of readers around the globe.</p>

  <p> 
  Dear reader, whether you're a brave adventurer, a curious dreamer, 
  or a lover of magical tales, come join the enchanting world of BeeBooks. 
  Open the virtual pages, immerse yourself in the stories, and let your imagination soar to new heights. 
  The wonders of the written word await you, ready to whisk you away on unforgettable journeys. 
  Welcome to Storyland Adventures, 
  where every page is a gateway to endless possibilities.
  </p>
              
          </div>
        </div>
        
      </div>
      </Container>
      </div>

      
      </div>


)
}
 
export default About;