import './ChannelsNav.scss';
import NeflixLogo from '../assets/figma/netflix.png';
import AmazonLogo from '../assets/figma/Prime.png';
import AppleLogo from '../assets/figma/apple.png';
import HayuLogo from '../assets/figma/hahu.png';
import HBOLogo from '../assets/figma/hbomax.png';

import Modal from './Modal';

import React, { useState } from 'react';

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1,
};

const BUTTON_MODAL_STYLES = {
  position: 'relative',
  zIndex: 10,
  backgroundColor: '#ffffff',
  padding: '10px',
};

function ChannelsNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="a_channelsNav">
      <div className="a_channelsNav__imageBG">
        <div className="a_buttonModal" style={BUTTON_WRAPPER_STYLES}>
          <img
            onClick={() => setIsOpen(true)}
            src={NeflixLogo}
            className="a_channelsNav__netflix"
            alt="netflix"
          />

          {/* 

*/}
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Fancy Modal
          </Modal>
          {/* 

*/}
        </div>
        {/* <div className="a_modal" style={BUTTON_MODAL_STYLES}>
          Modal Content
        </div> */}
      </div>
      <div className="a_channelsNav__imageBG">
        <img src={AmazonLogo} className="a_channelsNav__amazon" alt="netflix" />
      </div>
      <div className="a_channelsNav__imageBG">
        <img src={AppleLogo} className="a_channelsNav__apple" alt="Apple" />
      </div>
      <div className="a_channelsNav__imageBG">
        <img src={HayuLogo} className="a_channelsNav__hayu" alt="Hayu" />
      </div>
      <div className="a_channelsNav__imageBG">
        <img src={HBOLogo} className="a_channelsNav__hbo" alt="HBO Max" />
      </div>
      <div className="a_channelsNav__netflixBG"></div>
    </div>
  );
}
export default ChannelsNav;
