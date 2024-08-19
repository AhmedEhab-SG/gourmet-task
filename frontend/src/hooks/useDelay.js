import { useEffect, useState } from "react";

// a custom hook that delays the rendering of a component

const useDelay = (setTime, initialState) => {
  const [showComponent, setShowComponent] = useState(initialState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(() => initialState);
    }, setTime);

    return () => clearTimeout(timeout);
  }, [setTime, initialState]);

  const setDelayedComponent = (setState, { value, delay = 300 }) => {
    if (value === undefined) {
      if (showComponent) {
        setShowComponent(() => false);
        setTimeout(() => setState(() => false), delay);
        return;
      }
      setState(() => true);
      return;
    }
    setShowComponent(() => value);
    setTimeout(() => setState(() => value), delay);
  };

  return [showComponent, setDelayedComponent];
};

export default useDelay;
