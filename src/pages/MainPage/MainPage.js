import './MainPage.scss';
import Screen from '../../assets/figma/Saved.svg';

export default function MainPage(props) {
  return (
    <div className="flex">
      <div className="imagex">
        <img src={Screen} alt="" />
      </div>
    </div>
  );
}
