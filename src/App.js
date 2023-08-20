import Tabs from "./components/Tabs";
import TabsContent from "./components/TabsContent";

import { useState } from "react";

const App = () => {
  const [isActiveTabs, setIsActiveTabs] = useState(1);

  // toggleActiveTabs set current index
  const toggleActiveTabs = (Tabindex) => {
    setIsActiveTabs(Tabindex);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Tabs</h1>

        {/* Tabs Heading */}
        <Tabs isActiveTabs={isActiveTabs} onToggleTabs={toggleActiveTabs} />

        {/* Tabs Content */}
        <TabsContent isActiveTabContent={isActiveTabs} />
      </div>
    </>
  );
};

export default App;
