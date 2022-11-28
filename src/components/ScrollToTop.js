import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { get } from 'lodash';

import { smoothScroll } from "../helpers";

const ScrollToTop = () => {
    const { pathname, state } = useLocation();
    const scrollNeeded = get(state, 'scrollNeeded', true);

    useEffect(() => {
        if (scrollNeeded) {
            smoothScroll(`viewport`)
        }
    }, [pathname, scrollNeeded]);

    return null;
}
export default ScrollToTop;