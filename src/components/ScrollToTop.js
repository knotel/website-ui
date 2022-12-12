import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { get } from "lodash";
import { useRouter } from "next/router";

import { smoothScroll } from "../helpers";

const ScrollToTop = () => {
  const { pathname, state } = useLocation();
  const router = useRouter(),
    { query, locale } = router;
  const scrollNeeded = get(state, "scrollNeeded", true);

  useEffect(() => {
    if (scrollNeeded) {
      smoothScroll(`viewport`);
    }
  }, [query, locale]);

  return null;
};
export default ScrollToTop;
