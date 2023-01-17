import $ from "jquery-slim";

export const smoothScroll = (classname, scrollTopOffset) => {
  if (scrollTopOffset === undefined) {
    scrollTopOffset = 0;
  }
  if (classname) {
    classname = classname.replace("#", "");
    var item = $(`.${classname}`);
    if (item.length) {
      window.scrollTo({
        top: item.offset().top - ($(`.header`).innerHeight() + scrollTopOffset),
        behavior: "smooth",
      });
    }
  }
};
