"use client";
import React, {
  useState,
  useRef,
  useEffect,
  ReactNode,
  MouseEvent,
  TouchEvent,
} from "react";

type SliderProps = {
  children: ReactNode;
};

const Slider = ({ children }: SliderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (sliderRef.current) {
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (sliderRef.current) {
      setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    if (sliderRef.current) {
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scrolling speed
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    if (sliderRef.current) {
      const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scrolling speed
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("touchmove", handleTouchMove, { passive: false });
      return () => {
        slider.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, [isDragging, startX, scrollLeft]);

  return (
    <div
      ref={sliderRef}
      className="flex flex-row scrollbar-hide w-max  pt-10 pb-3 overflow-x-auto space-x-3"
      style={{
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleMouseUp}
    >
      {children}
    </div>
  );
};

export default Slider;
