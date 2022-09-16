import './App.scss';
import TopNav from './components/TopNav';
import ChannelsNav from './components/ChannelsNav';
import LeftNav from './components/LeftNav';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import SecondPage from './pages/SecondPage/SecondPage';

function App() {
  const [channel, setChannel] = useState('none');
  const clickHandler = (channel) => {
    setChannel(channel);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/andre" exact element={<MainPage />} />
        <Route path="/likes" exact element={<SecondPage />} />
        <Route
          path="/"
          exact
          element={
            <div className="App">
              <section className="a_site">
                <div className="a_site__flexcolumn">
                  <div className="a_site__columnLeftBackground"></div>
                  <div className="a_site__columnLeft">
                    <LeftNav />
                  </div>
                  <div className="a_site__columnRightBackground"></div>
                  <div className="a_site__columnRight">
                    <TopNav />
                    <ChannelsNav handler={clickHandler} />

                    <div className="a_site__flexboxContent">
                      <Section4 channel={channel} />
                      <Section5 />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
