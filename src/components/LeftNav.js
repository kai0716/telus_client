import './LeftNav.scss';
import HomeLogo from '../assets/figma/Home.png';
import HistoryLogo from '../assets/figma/Time.png';
import LikedLogo from '../assets/figma/Heart.png';
import SettingsLogo from '../assets/figma/Settings.png';

function LeftNav() {
  return (
    <div className="a_leftNav">
      <div className="--back">
        <div className="a_leftNav__imageBG">
          <img src={HomeLogo} className="a_leftNav__home" alt="home" />
        </div>
        <p>Home</p>
      </div>

      <div className="a_leftNav__imageBG">
        <img src={HistoryLogo} className="a_leftNav__history" alt="netflix" />
      </div>
      <p>History</p>

      <div className="a_leftNav__imageBG">
        <img src={LikedLogo} className="a_leftNav__liked" alt="Apple" />
      </div>
      <p>Liked</p>

      <div className="a_leftNav__imageBG">
        <img src={SettingsLogo} className="a_leftNav__settings" alt="Hayu" />
      </div>
      <p>Settings</p>
    </div>
  );
}
export default LeftNav;
