/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from 'react';

const useOnScreen = (
  ref: any,
  rootMargin = '0px',
  threshold = 1.0,
  trackOnce: boolean = true
) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const options = { rootMargin: `${rootMargin} 0px 0px 0px`, threshold };

  const callbackFunction = useCallback((entry, observer) => {
    setIntersecting(entry.isIntersecting);
    if (entry.isIntersecting && trackOnce) {
      observer.unobserve(ref.current);
    }
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      callbackFunction(entry, observer);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref?.current) observer.unobserve(ref);
    };
  }, []);
  return isIntersecting;
};

export default useOnScreen;
