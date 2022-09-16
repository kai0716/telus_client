import React from 'react';
import ReactDom from 'react-dom';
import screen from '../assets/figma/screen1.png';
import './Modal.scss';

const MODAL_STYLES = {
  position: 'fixed',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  zIndex: 100,
  width: '800px',
  height: '1000px',
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
          </div>
          {/* <button onClick={onClose}>Close Modal</button> */}
          {/* {children} */}
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}
