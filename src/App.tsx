import React from "react";
import Header from "@components/Header/Header";
import { AdaptiveContext } from "@contexts/AdaptiveContext";
import Content from "@components/Content/Content";

function App() {
  const adaptiveContext = React.useContext(AdaptiveContext);

  const handleResize = () => {
    adaptiveContext.setContext({
      ...adaptiveContext,
      width: window.innerWidth,
    });
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="flex flex-col">
      <Header />
      <Content />
    </div>
  );
}

export default App;
