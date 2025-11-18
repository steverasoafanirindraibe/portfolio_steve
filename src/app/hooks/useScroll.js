"use client"
import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = winHeightPx > 0 ? scrollPx / winHeightPx : 0;
      
      // Limite la progression à 21% et normalise entre 0 et 1
      const limitedProgress = Math.min(scrolled, 0.21) / 0.21;
      
      setScrollProgress(limitedProgress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return scrollProgress;
};