import React from 'react';
import ReactDom from 'react-dom';
import screen from '../assets/figma/screen2.png';
import crown1 from '../assets/figma/crown1.png';
import crown2 from '../assets/figma/crown2.png';
import crown3 from '../assets/figma/crown3.png';
import crown4 from '../assets/figma/crown4.jpg';
import crown5 from '../assets/figma/crown5.jpeg';
import crown6 from '../assets/figma/crown6.webp';
import Carousel2 from 'react-bootstrap/Carousel';
import './Modal.scss';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  zIndex: 100,
  width: '800px',
  height: '1200px',
  borderRadius: '40px',
  backgroundColor: '#111111',
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,.7)',
  zIndex: 100,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES}>
        <div className="a_modal">
          <div className="a_modal__header">
            <img
              className="a_modal__screen"
              onClick={onClose}
              src={screen}
              alt=""
            />
          </div>
          <div className="a_modal__bottomSection">
            <div className="a_modal__episodes">
              <p className="a_modal__episodesText">Episodes</p>
            </div>
            <hr className="a_modal__divider1"></hr>
            <div className="a_modal__seasonsMenu">
              <span className="a_modal__season1">Season 1</span>
              <span className="a_modal__season2">Season 2</span>
              <span className="a_modal__season3">Season 3</span>
              <span className="a_modal__season4">Season 4</span>
            </div>

            {/* <div className="a_modal__carrousel"> */}
            <Carousel2 className="a_modal__carrousel">
              <Carousel2.Item>
                <div className="a_modal__item1">
                  <div>
                    <img
                      className="a_modal__crown --selected"
                      src={crown1}
                      alt=""
                    />
                    <p className="a_modal__crownText">1. Wolferton Splash</p>
                  </div>
                  <div>
                    <img className="a_modal__crown" src={crown2} alt="" />
                    <p className="a_modal__crownText">2. Hyde Park Corner</p>
                  </div>
                  <div>
                    <img className="a_modal__crown" src={crown3} alt="" />
                    <p className="a_modal__crownText">3. Hyde Park Corner</p>
                  </div>
                </div>
              </Carousel2.Item>

              <Carousel2.Item>
                <div className="a_modal__item2">
                  <div>
                    <img className="a_modal__crown " src={crown4} alt="" />
                    <p className="a_modal__crownText">4. Windsor</p>
                  </div>
                  <div>
                    <img className="a_modal__crown" src={crown5} alt="" />
                    <p className="a_modal__crownText">5. God Save The Queen</p>
                  </div>
                  <div>
                    <img className="a_modal__crown" src={crown6} alt="" />
                    <p className="a_modal__crownText">6. Royal intrigue</p>
                  </div>
                </div>
              </Carousel2.Item>

              {/* <div className="a_modal__episode">
                <img className="a_modal__crown" src={crown3} alt="" />
                <p className="a_modal__crownText">3. Windsor</p>
              </div> */}
            </Carousel2>
            {/* </div> */}
          </div>
          {/* <button onClick={onClose}>Close Modal</button> */}
          {/* {children} */}
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}
