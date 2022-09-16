import './App.scss';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
      <section className="a_site">
        <div className="a_site__flexcolumn">
          <div className="a_site__columnLeftBackground"></div>
          <div className="a_site__columnLeft"></div>
          <div className="a_site__columnRightBackground"></div>
          <div className="a_site__columnRight">
            <TopNav />
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
