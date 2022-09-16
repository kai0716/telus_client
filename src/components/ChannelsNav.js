import './ChannelsNav.scss';
import NeflixLogo from '../assets/figma/netflix.png';
import AmazonLogo from '../assets/figma/Prime.png';
import AppleLogo from '../assets/figma/apple.png';
import HayuLogo from '../assets/figma/hahu.png';
import HBOLogo from '../assets/figma/hbomax.png';

function ChannelsNav() {
  return (
    <div className="a_channelsNav">
      <div className="a_channelsNav__imageBG">
        <img
          src={NeflixLogo}
          className="a_channelsNav__netflix"
          alt="netflix"
        />
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
