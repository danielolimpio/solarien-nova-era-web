
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  return (
    <h1 className="text-4xl md:text-7xl font-bold text-white mb-0 leading-tight flex items-center justify-center min-h-[1.3em] hover:animate-soft-pulse transition-all duration-300">
      <span className="bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent block leading-[1.2]">
        {displayText}
      </span>
    </h1>
  );
};

export default TypewriterText;
