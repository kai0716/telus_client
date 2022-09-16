import image from '../../assets/images/image9.jpg';
import image0 from '../../assets/images/image0.jpg';
import './Section4.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import topTv from '../../data/top10tv';
import { useState } from 'react';
export default function Section4(props) {
    const tvList = topTv();
    const [topRightModal, setTopRightModal] = useState(false);

    const toggleShow = () => setTopRightModal(!topRightModal);
    return (
        <div className="k__section4">
            <div className='k-s4__cover'>
                return (
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <img
                            className="k-s4__cover-img"
                            src={image0}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="k-s4__cover-img"
                            src={image}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="k-s4__cover-img"
                            src={image}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                {/* <img className='k-s4__cover-img' src={image} /> */}
            </div>
            <p className='k-s4__title'>Recommanded for you</p>
            <div className='k-s4__img-wrapper'>
                {tvList.map((e, i) =>
                    i <= 5 &&
                    <>
                        <img key={e.id} className='k-s4__list-img' src={e.image} />
                    </>

                )}
            </div>
        </div>
    );
}