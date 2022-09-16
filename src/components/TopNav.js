import './TopNav.scss';
import logo from '../assets/figma/logo.png';

function App() {
  return (
    <div className="a_topnav">
      <div className="a_topnav__flexrow">
        <img className="a_topnav__logo" src={logo} alt="logo" />

        <input
          className="a_topnav__Input"
          type="input"
          placeholder="What do you want to watch?"
        />
      </div>
    </div>
  );
}
export default App;
