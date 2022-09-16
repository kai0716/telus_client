import image from '../../assets/images/image1.png';
import image0 from '../../assets/images/image0.png';
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
        <Carousel onClick={() => setIsOpen(true)}>
          <Carousel.Item interval={5000}>
            <img className="k-s4__cover-img" src={image} alt="First slide" />
            <Carousel.Caption>
              <h3 className="k-s4__onCLickModal">First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="k-s4__cover-img" src={image0} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="k-s4__cover-img" src={image} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>
        {/* <img className='k-s4__cover-img' src={image} /> */}
      </div>
      <p className="k-s4__title">Recommanded for you</p>
      <div className="k-s4__img-wrapper">
        {channel === 'none'
          ? tvList.map(
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
            )
          : channel === 'netflix'
          ? tvList
              .filter((e) => e.channel === 'netflix')
              .map(
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
              )
          : tvList
              .filter((e) => e.channel === 'prime')
              .map(
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
