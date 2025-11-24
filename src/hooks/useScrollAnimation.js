'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold, // ✅ Correction : utiliser 'amount' au lieu de 'threshold'
    // once: true
  });

  return { ref, isInView };
};