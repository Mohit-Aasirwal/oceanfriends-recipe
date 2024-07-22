"use client";
import React, { useState, useRef, useEffect } from "react";

const Slider = ({ children }: { children: React.ReactNode }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current!.offsetLeft);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current!.offsetLeft);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("touchmove", handleTouchMove as EventListener, {
        passive: false,
      });
      return () => {
        slider.removeEventListener(
          "touchmove",
          handleTouchMove as EventListener
        );
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
