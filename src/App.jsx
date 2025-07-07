import React, { useState } from 'react';
import { TabList } from './components/Tabs';
import RandomColor from './components/RandomColor/RandomColor';
import MyColorWheel from './components/MyColorWheel/MyColorWheel.jsx';
import './App.css'

const tabs = [
    {id: 'random', label: 'Random Color'},
    {id: 'wheel', label: 'Color Wheel'},
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
            {activeIndex === 0 && <RandomColor />}
            {activeIndex === 1 && <MyColorWheel />}
          </div>
        </div>
      </>
    );
}

export default App;
