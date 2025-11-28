'use client';

import { useState, useEffect } from 'react';
import ModernAlert from '@/components/ModernAlert';
import WelcomePage from '@/components/Welcome';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
        // if (hasSeenWelcome) {
        //   setShowWelcome(false);
        // }
  }, []);

  const handleEnterPortfolio = () => {
    localStorage.setItem('hasSeenWelcome', 'true');
    setShowWelcome(false);
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    );
  }

  if (showWelcome) {
    return <WelcomePage onEnter={handleEnterPortfolio} />;
  }

  return (
    <>
      {children}
      <ModernAlert />
    </>
  );
}