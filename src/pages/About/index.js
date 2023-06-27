import React from "react";
import '../About/about.css'
import Column from "./../../components/Column";
import Row from "./../../components/Row";

import { Container} from "react-bootstrap";
import beebook from '../../assets/images/image4.png'
import child1 from '../../assets/images/child1.png'
import child2 from '../../assets/images/child2.png'
import child3 from '../../assets/images/child3.png'


const About = () => {
return (
  <div className='aboutus'>
      <div className='background'>
        
    <Container className='info'> 
    <div className="row align-items-center" id="panel">
        <div className="col-lg-5 order-lg-2">
          <div className="p-5">
            <img className='book' src={beebook} alt="book cover"/>
          </div>
        </div>
        <div className="col-lg-7 order-lg-1">
          <div className="p-5">
            <h3 className="storyTitle">Our Story</h3>

            <p>
              Once upon a time, in a land filled with vibrant colours and boundless imagination, 
              there was a remarkable company known as BeeBooks. This enchanting company was born out of a deep love for 
              storytelling and a desire to ignite the spark of imagination in every child's heart.
            </p>

            <p> 
              As the days and years went by, BeeBooks grew and flourished. 
              It became a beloved destination for children and parents alike, a digital 
              sanctuary where the magic of books came to life. The website's shelves expanded with each passing day, offering a
              collection of tales that captured the hearts of readers.
            </p>

            <p> 
              Dear reader, whether you're a brave adventurer, a curious dreamer, 
              or a lover of magical tales, come join the enchanting world of BeeBooks. 
            </p>
              
          </div>
        </div>
        
      </div>


      <h3 className="valueT px-5 ">Our Values</h3>
      <Row className="card-containers">
        <Column size="lg-4">   

          {/* CARD1 */}
          <div className="card" >
            <div className="img-box">
              <img className='book' src={child1} alt="child"/>
              </div>
              <div className="content">
                  <h2>Imagination</h2>
                  <p>
                  We believe in the limitless power of imagination. 
                  We encourage every child to dream big and explore the boundless possibilities that 
                  lie within the pages of a book.
                  </p>
              </div>
          </div>
        </Column>
        <Column size="lg-4"> 
        {/* CARD2 */}
        <div className="card" >
          <div className="img-box">
          <img className='child' src={child2} alt="child"/>
          </div>
          <div className="content">
              <h2>Education</h2>
              <p>
              We strive to provide 
              stories that not only entertain but also teach valuable lessons, 
              such as kindness, empathy, and resilience in our young readers.
              </p>
          </div>
        </div>
        </Column>
        <Column size="lg-4"> 
        {/* CARD3 */}
        <div className="card" >
          <div className="img-box">
          <img className='child' src={child3} alt="child"/>
          </div>
          <div className="content">
              <h2>Joy</h2>
              <p>
                We aim to create an environment that sparks laughter, excitement, and delight, ensuring that every 
                story we present is a source of happiness and inspiration.
              </p>
          </div>
        </div>
        </Column>
    </Row>


    </Container>
    </div>
         
</div>
     

    
)
}
 
export default About;