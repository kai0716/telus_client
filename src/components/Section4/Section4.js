import image from '../../assets/images/image1.png';
import image0 from '../../assets/images/image0.png';
import netflixCover1 from '../../assets/images/netflix/cover1.png';
import netflixCover2 from '../../assets/images/netflix/cover2.png';
import netflixCover3 from '../../assets/images/netflix/cover3.png';

import primeCover1 from '../../assets/images/prime/cover1.png';
import primeCover2 from '../../assets/images/prime/cover2.png';
import primeCover3 from '../../assets/images/prime/cover3.png';

import './Section4.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Modal from '../Modal';

import topTv from '../../data/top10tv';
import { useState } from 'react';
export default function Section4(props) {
    const tvList = topTv();
    const [topRightModal, setTopRightModal] = useState(false);
    const { channel } = props;

    const [isOpen, setIsOpen] = useState(false);

    const BUTTON_WRAPPER_STYLES = {
        position: 'relative',
        zIndex: 1,
    };

    const toggleShow = () => setTopRightModal(!topRightModal);
    return (
        <div className="k__section4">
            <div className="k-s4__cover">
                <Carousel >
                    <Carousel.Item interval={5000} className="k-s4__onCLickModal"
                        onClick={() => setIsOpen(true)}>
                        {channel === "none" ?
                            <img className="k-s4__cover-img" src={image0} alt="Second slide" /> :
                            channel === "prime" ?
                                <img className="k-s4__cover-img" src={primeCover1} alt="Second slide" />
                                :
                                <img className="k-s4__cover-img" src={netflixCover1} alt="Second slide" />
                        }

                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        {channel === "none" ?
                            <img className="k-s4__cover-img" src={netflixCover3} alt="Second slide" /> :
                            channel === "prime" ?
                                <img className="k-s4__cover-img" src={primeCover2} alt="Second slide" />
                                :
                                <img className="k-s4__cover-img" src={netflixCover2} alt="Second slide" />
                        }

                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        {channel === "none" ?
                            <img className="k-s4__cover-img" src={primeCover1} alt="Second slide" /> :
                            channel === "prime" ?
                                <img className="k-s4__cover-img" src={primeCover3} alt="Second slide" />
                                :
                                <img className="k-s4__cover-img" src={netflixCover3} alt="Second slide" />
                        }

                    </Carousel.Item>
                </Carousel>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    Fancy Modal
                </Modal>
                {/* <img className='k-s4__cover-img' src={image} /> */}
            </div>
            <p className="k-s4__title">Recommanded for you</p>
            <div className="k-s4__img-wrapper">
                {channel === "none" ? tvList.map(
                    (e, i) =>
                        i <= 5 && (
                            <>
                                <img
                                    key={e.id}
                                    className="k-s4__list-img k-s4__onCLickModal"
                                    src={e.image}
                                    alt=""

                                    onClick={() => setIsOpen(true)}
                                />
                            </>
                        )
                ) : channel === "netflix" ? tvList.filter(e => e.channel === "netflix").map(
                    (e, i) =>
                        i <= 5 && (
                            <>
                                <img
                                    key={e.id}
                                    className="k-s4__list-img"
                                    src={e.image}
                                    alt=""
                                />
                            </>
                        )
                ) : tvList.filter(e => e.channel === "prime").map(
                    (e, i) =>
                        i <= 5 && (
                            <>
                                <img
                                    key={e.id}
                                    className="k-s4__list-img"
                                    src={e.image}
                                    alt=""
                                />
                            </>
                        )
                )}
            </div>
        </div>
    );
}
