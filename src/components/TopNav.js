import './TopNav.scss';
import logo from '../assets/figma/logo.png';
import avatar from '../assets/figma/avatar.png';
import crown from '../assets/figma/Vector.png';
import search from '../assets/figma/search.png';

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
          ></input>
          <img src={search} className="a_topnav__searchIcon" alt="search" />
        </div>

        <div className="a_topnav__rightgroup">
          <div className="a_topnav__right-col1">
            <p className="a_topnav__name">Kevin Matthew</p>
            <div className="a_topnav__flex">
              <img
                src={crown}
                className="a_topnav__crown
              "
                alt="crowm"
              />
              <p className="a_topnav__premium">Premium</p>
            </div>
          </div>
          <div className="a_topnav__right-col2">
            <img src={avatar} className="a_topnav__avatar" alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopNav;
