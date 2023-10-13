import * as React from "react";
/**
 * ***************************************************************************
 * ***************************************************************************
 *
 * @returns
 * @function <useWindowSize></useWindowSize>
 *
 * ? Local & Shared Imports
 */

type WindowSize = {
  width: number;
  height: number;
};

export const useWindowSize = () => {
  const [windowSize, updateSize] = React.useState<WindowSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const handleResize = React.useCallback(() => {
    updateSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.addEventListener("resize", handleResize);
  }, [handleResize]);

  return { windowSize };
};
