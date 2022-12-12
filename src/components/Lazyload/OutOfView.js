import React, { useRef, useEffect } from "react";

const OutOfView = ({
  className,
  children,
  onOutCallback,
  rootMargin = "0px",
  id,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    let observerRef = null;

    let handlePlay = (entries) => {
      const [entry] = entries;
      onOutCallback(entry, observer, observerRef);
    };

    let observer = new IntersectionObserver(handlePlay, { rootMargin });
    if (ref.current) {
      observerRef = ref.current;
      observer.observe(ref.current);
    }

    return () => {
      if (observerRef) {
        observer.unobserve(observerRef);
      }
    };
  }, [rootMargin, onOutCallback]);

  return (
    <div ref={ref} className={className} id={id}>
      {children}
    </div>
  );
};

export default OutOfView;
