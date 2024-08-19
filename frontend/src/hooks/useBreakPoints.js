import { useEffect, useState } from "react";

// a custom hook that returns the current breakpoint better than media queries One source of truth and dyanamic

const useBreakpoints = (config) => {
  const [breakpoint, setBreakpoint] = useState();

  const { xs = 320, sm = 640, md = 768, lg = 1024, xl = 1280 } = config || {};

  useEffect(() => {
    const updateBreakpoint = () => {
      if (window.innerWidth < xs) setBreakpoint(() => "xs");

      if (window.innerWidth >= sm && window.innerWidth < 768)
        setBreakpoint(() => "sm");

      if (window.innerWidth >= md && window.innerWidth < 992)
        setBreakpoint(() => "md");

      if (window.innerWidth >= lg && window.innerWidth < 1200)
        setBreakpoint(() => "lg");

      if (window.innerWidth >= xl) setBreakpoint(() => "xl");
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);

    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, [xs, sm, md, lg, xl]);

  return { breakpoint };
};

export default useBreakpoints;
