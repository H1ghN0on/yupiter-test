import React from "react";
import Header from "@components/Header/Header";
import { AdaptiveContext } from "@contexts/AdaptiveContext";

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

  return <Header />;
}

export default App;
