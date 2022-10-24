import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap'
import slide_1 from './assets/sl-1.jpg';
import slide_2 from './assets/sl-2.jpg';
import slide_3 from './assets/sl-3.jpg';
import logo from '../../../assets/Sg.ico'

function SliderLogin() {
    const itemsSlider = (props) => (
        <Carousel.Item>

            <Image
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
                thumbnail
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    )


    return (
        <Carousel slide={false}>
            <Carousel.Item>

                <img
                    className="d-block slideLgin_img"
                    src={logo}
                    alt="First slide"
                    // thumbnail
                />
               
            </Carousel.Item>

            {/* <Carousel.Item>
                <Image
                    className="d-block w-100 slideLgin_img"

                    src={slide_2}
                    alt="Second slide"
                    thumbnail
                    style={{ minHeight: '600px !important' }}

                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image
                    className="d-block w-100 slideLgin_img"
                    src={slide_3}
                    alt="Third slide"
                    thumbnail
                    style={{ minHeight: '600px !important' }}

                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item> */}

        </Carousel>
    );
}

export default SliderLogin;