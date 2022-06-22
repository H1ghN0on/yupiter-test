import React from "react";

type Props = {
  children: React.ReactNode;
};

type Context = {
  mobileBreakpoint: number;
  width: number;
  isMobile: () => Boolean;
  setContext: React.Dispatch<React.SetStateAction<Context>>;
};

const initialContext: Context = {
  mobileBreakpoint: 1040,
  width: window.innerWidth,
  isMobile: () => {
    throw new Error("isMobile function must be overridden");
  },
  setContext: (): void => {
    throw new Error("setContext function must be overridden");
  },
};

const AdaptiveContext = React.createContext<Context>(initialContext);

const AdaptiveContextProvider = ({ children }: Props): JSX.Element => {
  const [contextState, setContext] = React.useState<Context>(initialContext);

  return (
    <AdaptiveContext.Provider
      value={{
        ...contextState,
        setContext,
        isMobile: () => {
          return (contextState.width as number) < contextState.mobileBreakpoint;
        },
      }}
    >
      {children}
    </AdaptiveContext.Provider>
  );
};

export { AdaptiveContext, AdaptiveContextProvider };
