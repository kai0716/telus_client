import './App.scss';
import TopNav from './components/TopNav';
import ChannelsNav from './components/ChannelsNav';
import LeftNav from './components/LeftNav';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import { useState } from 'react';

function App() {

  const [channel, setChannel] = useState("none");
  const clickHandler = (channel) => {
    setChannel(channel);
  }

  return (
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
  );
}
export default App;
