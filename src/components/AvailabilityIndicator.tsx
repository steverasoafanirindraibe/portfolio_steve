import React, { useState, useEffect } from 'react';
import { FaStar, FaUserTie } from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslation';
import { BsLightningChargeFill } from 'react-icons/bs';

const AvailabilityIndicator = () => {
  const { t } = useTranslation();
  const [pulse, setPulse] = useState(false);
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1000);
    }, 3000);

    const glowInterval = setInterval(() => {
      setGlow(!glow);
    }, 2000);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(glowInterval);
    };
  }, [glow]);

  return (
    <div className="relative group">
      {/* Conteneur principal */}
      <div className="relative h-16 w-18 flex items-center justify-center overflow-hidden">
        
        {/* Circuit électronique en arrière-plan */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-teal-400 animate-pulse"></div>
          <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-theme2-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-teal-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-theme2-400 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Cœur de l'animation - Avatar avec halo */}
        <div className="relative z-10">
          {/* Halo tournant */}
          <div className="absolute -inset-3">
            <div className={`absolute w-6 h-6 border-t-2 border-teal-500 rounded-full animate-spin ${pulse ? 'border-opacity-100' : 'border-opacity-40'}`}></div>
            <div className="absolute w-6 h-6 border-b-2 border-orange-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
          </div>

          {/* Avatar/Initiale S */}
          <div className={`relative w-8 h-8 rounded-full bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center transition-all duration-500 ${glow ? 'shadow-lg shadow-teal-500/50' : 'shadow-md shadow-teal-500/30'}`}>


            {/* Initiale S stylisée */}
            <div className="relative">
              <span className="text-sm font-bold text-white">S</span>
              
              {/* Effet de surbrillance */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-full"></div>
              
              {/* Particules tournantes */}
              <div className="absolute -top-2 -left-2">
                <FaStar className="text-[6px] text-teal-300 animate-spin" style={{ animationDuration: '3s' }} />
              </div>
              <div className="absolute -bottom-2 -right-2">
                <BsLightningChargeFill className="text-[6px] text-orange-300 animate-pulse" />
              </div>
            </div>


          </div>
        </div>

        {/* Traînées particulaires */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-teal-400' : 'bg-orange-400'} animate-spin`}
              style={{
                top: '50%',
                left: '50%',
                animationDuration: `${3 + i}s`,
                transformOrigin: `${i * 10}px ${i * 10}px`
              }}
            />
          ))}
        </div>
      </div>

      {/* Tooltip - Visible au hover */}
      <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="relative">
          {/* Flèche du tooltip */}
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-0 border-r-4 border-r-teal-500 border-t-transparent border-b-transparent"></div>
          
          {/* Contenu du tooltip */}
          <div className="bg-gray-900 border border-teal-500/30 rounded-lg px-3 py-2 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <FaUserTie className="text-teal-400 text-xs" />
              <div className="text-xs font-medium whitespace-nowrap">
                <span className="text-white">{t("hero.available")}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Effet de rayonnement au hover */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-orange-500/10 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
      </div>
    </div>
  );
};



export default AvailabilityIndicator;