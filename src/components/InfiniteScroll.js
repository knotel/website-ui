import { useEffect } from "react";
import $ from "cash-dom";

let timer = 0;
let winHei = 0;
let offsetPercent = 0;
const InfiniteScroll = (props) => {
  const {
    el = window,
    end = false,
    fetching = false,
    onLoadMore = () => {},
  } = props;

  const loadOnScroll = () => {
    if (end === false && fetching === false && crossedScrollThreshold()) {
      onLoadMore();
    }
  };

  const resizeWindow = () => {
    winHei = $(el).outerHeight();
    offsetPercent = Math.round(winHei * 0.3);
  };

  const crossedScrollThreshold = () => {
    let st = $(el)[0].pageYOffset + winHei + offsetPercent;
    let sh =
      el === window
        ? document.documentElement.scrollHeight
        : $(el)[0].scrollHeight;
    return st >= sh;
  };

  useEffect(() => {
    timer = setTimeout(() => {
      resizeWindow();
      $(window).on("resize", resizeWindow);
      $(el).on("scroll", loadOnScroll);
    }, 100);

    return () => {
      $(window).off("resize", resizeWindow);
      $(el).off("scroll", loadOnScroll);
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    resizeWindow();
    // $(prevProps.el).off('scroll', loadOnScroll);
    $(el).on("scroll", loadOnScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [el]);

  return null;
};
export default InfiniteScroll;
