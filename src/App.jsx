import React, { useState } from 'react';
import { TabList } from './components/Tabs';
import RandomColor from './components/RandomColor/RandomColor';
import MyColorWheel from './components/MyColorWheel/MyColorWheel.jsx';
import './App.css'

const tabs = [
    {id: 'random', label: 'Random Color', content: <RandomColor />},
    {id: 'wheel', label: 'Color Wheel', content: <MyColorWheel />},
];

function App() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
      <>
        <div>
          <TabList
              tabs={tabs}
              activeIndex={activeIndex}
              onTabSelect={setActiveIndex}
          />
          <div className="tab-panel">
              {tabs.map((tab, index) => (
                  <div key={tab.id} style={{ display: activeIndex === index ? 'block' : 'none' }}>
                      {tab.content}
                  </div>
              ))}
          </div>
        </div>
      </>
    );
}

export default App;
