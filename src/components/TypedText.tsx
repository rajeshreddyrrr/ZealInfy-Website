import React, { useState, useEffect } from 'react';

interface TypedTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const TypedText: React.FC<TypedTextProps> = ({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = '' 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [delay]);

  useEffect(() => {
    if (!started || currentIndex >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, started]);

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && <span className="cursor">|</span>}
    </span>
  );
};

export default TypedText;