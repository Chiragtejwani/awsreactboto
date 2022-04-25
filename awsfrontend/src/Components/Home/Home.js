import {Carousel } from 'react-bootstrap'
import pic from "/home/in440/Desktop/Training_Material/miniAwsReact/awsfrontend/src/assets/download.png"
import pic2 from "/home/in440/Desktop/Training_Material/miniAwsReact/awsfrontend/src/assets/download1.jpeg"
import pic3 from "/home/in440/Desktop/Training_Material/miniAwsReact/awsfrontend/src/assets/download2.png"

const Home = () => {
    return ( 
        <div >
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-500"
      src = {pic3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-500"
      src = {pic}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-500"
      src= {pic2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
     );
}
 
export default Home;