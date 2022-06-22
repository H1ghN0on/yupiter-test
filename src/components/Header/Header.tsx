import React from "react";
import { AdaptiveContext } from "@contexts/AdaptiveContext";

const HeaderDesktopLazy = React.lazy(() => import("./HeaderDesktop"));
const HeaderMobileLazy = React.lazy(() => import("./HeaderMobile"));

const Header: React.FC<any> = (props) => {
  const adaptiveContext = React.useContext(AdaptiveContext);

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      {adaptiveContext.isMobile() ? (
        <HeaderMobileLazy {...props} />
      ) : (
        <HeaderDesktopLazy {...props} />
      )}
    </React.Suspense>
  );
};

export default Header;
