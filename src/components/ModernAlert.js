'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  XCircle, 
  Info, 
  AlertTriangle,
  X,
  Sparkles,
} from 'lucide-react';

const ModernAlert = () => {
  const [alert, setAlert] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const showAlert = useCallback((message, type = 'info') => {
    setAlert({ message, type });
    setIsVisible(true);
  }, []);

  const hideAlert = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => setAlert(null), 500);
  }, []);

  useEffect(() => {
    if (isVisible && alert) {
      const timer = setTimeout(hideAlert, alert.duration || 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, alert, hideAlert]);

  // Icônes selon le type
  const icons = {
    success: <CheckCircle className="w-6 h-6 text-teal-400" />,
    error: <XCircle className="w-4 h-4 sm:w-6 sm:h-6 text-rose-400" />,
    warning: <AlertTriangle className="w-6 h-6 text-amber-400" />,
    info: <Info className="w-6 h-6 text-blue-400" />,
  };

  // Couleurs selon le type
  const colors = {
    success: 'from-teal-500/10 to-teal-600/5 border-teal-500/20',
    error: 'from-rose-500/10 to-rose-600/5 border-rose-500/20',
    warning: 'from-amber-500/10 to-amber-600/5 border-amber-500/20',
    info: 'from-blue-500/10 to-blue-600/5 border-blue-500/20',
  };

  // Pour utiliser depuis l'extérieur
  useEffect(() => {
    window.showModernAlert = showAlert;
  }, [showAlert]);

  return (
    <AnimatePresence>
      {isVisible && alert && (
        <motion.div
          className="fixed top-12 sm:top-16 left-6 z-50 max-w-sm w-64"
          initial={{ 
            opacity: 0, 
            x: -300,
            scale: 0.8,
            rotateY: 90 
          }}
          animate={{ 
            opacity: 1, 
            x: 0,
            scale: 1,
            rotateY: 0,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          }}
          exit={{ 
            opacity: 0, 
            x: -300,
            scale: 0.8,
            rotateY: -90,
            transition: {
              duration: 0.3
            }
          }}
        >
          <motion.div
            className={`relative text-[10px] sm:text-sm bg-gradient-to-br ${colors[alert.type]} backdrop-blur-xl border rounded-2xl p-2 w-42 sm:w-full sm:p-4 shadow-2xl overflow-hidden`}
            whileHover={{ 
              scale: 1.02,
              y: -2,
              transition: { duration: 0.2 }
            }}
          >
            {/* Effet de particules animées */}
            <motion.div
              className="absolute inset-0 opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute top-2 right-2">
                <Sparkles className="w-4 h-4 text-white animate-pulse" />
              </div>
              <div className="absolute bottom-2 left-2">
                <Sparkles className="w-3 h-3 text-white animate-pulse" />
              </div>
            </motion.div>

            {/* Contenu principal */}
            <div className="relative z-10 flex items-start space-x-3">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: 1, 
                  rotate: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    delay: 0.1
                  }
                }}
              >
                {icons[alert.type]}
              </motion.div>

              <div className="flex-1 min-w-0">
                <motion.p
                  className="text-white font-medium text-sm leading-5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.2 }
                  }}
                >
                  {alert.message}
                </motion.p>
              </div>

              {/* Bouton fermer */}
              <motion.button
                onClick={hideAlert}
                className="flex-shrink-0 p-1 sm:text-sm text-[10px] rounded-full hover:bg-white/10 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: 0.3 }
                }}
              >
                <X className="w-4 h-4 text-white/60" />
              </motion.button>
            </div>

            {/* Barre de progression */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white/40 to-white/20"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: alert.duration ? alert.duration / 1000 : 4, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Hook personnalisé pour utiliser l'alerte
export const useModernAlert = () => {
  const showAlert = useCallback((message, type = 'info', duration = 4000) => {
    if (typeof window !== 'undefined' && window.showModernAlert) {
      window.showModernAlert(message, type, duration);
    } else {
      console.warn('ModernAlert component not mounted');
    }
  }, []);

  return { showAlert };
};

export default ModernAlert;