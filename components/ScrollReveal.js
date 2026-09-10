"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal(props) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const delay = props.delay || 0;

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const style = {
    transitionDelay: delay + "ms",
  };

  const baseClass =
    "transition-all duration-600 ease-out motion-reduce:transition-none";
  const hiddenClass = "opacity-0 translate-y-6";
  const shownClass = "opacity-100 translate-y-0";

  const className = baseClass + " " + (visible ? shownClass : hiddenClass);

  return (
    <div ref={ref} className={className} style={style}>
      {props.children}
    </div>
  );
}
