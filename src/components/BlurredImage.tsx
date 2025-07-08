import React from 'react';
import { motion } from 'framer-motion';

interface BlurredImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlurredImage: React.FC<BlurredImageProps> = ({ src, alt, className = '' }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-full ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default BlurredImage;