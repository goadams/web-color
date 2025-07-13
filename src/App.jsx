import React, { useState } from 'react';
import { TabList } from './components/Tabs';
import RandomColor from './components/RandomColor/RandomColor';
import ColorPalettes from './components/ColorPalettes/ColorPalettes.jsx';
import './App.css'
import Accessibility from "./components/Accessibility/index.js";

const tabs = [
    {id: 'random', label: 'Random Color', content: <RandomColor />},
    {id: 'wheel', label: 'Color Palettes', content: <ColorPalettes />},
    {id: 'access', label: 'Accessibility', content: <Accessibility />},
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
