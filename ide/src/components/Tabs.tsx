import React, { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [active, setActive] = useState(0);

  return (
    <div style={{height: "70vh"}}>
      <div style={{height: "8vh"}}>
        {tabs.map((tab, i) => (
          <button className="section-button" key={i} onClick={() => setActive(i)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{height: "60vh"}}>{tabs[active].content}</div>
    </div>
  );
};

export default Tabs;
