import './TopNav.scss';
import logo from '../assets/figma/logo.png';

function TopNav() {
  return (
    <div className="a_topnav">
      <div className="a_topnav__flexrow">
        <div className="a_topnav__leftgroup">
          <img className="a_topnav__logo" src={logo} alt="logo" />
          <input
            className="a_topnav__Input"
            type="input"
            placeholder="What do you want to watch?"
          />
        </div>

        <div className="a_topnav__rightgroup">
          <div className="a_topnav__right-col1">
            <p className="a_topnav__name">Kevin Matthew</p>
            <p className="a_topnav__premium">Premium</p>
          </div>
          <div className="a_topnav__right-col1">Avatar</div>
        </div>
      </div>
    </div>
  );
}
export default TopNav;
