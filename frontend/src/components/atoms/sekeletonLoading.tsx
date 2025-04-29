import React from 'react';

interface SkeletonProps {
  width?: string; 
  height?: string;
  circle?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ width = '100%', height = '1rem', circle = false }) => {
  return (
    <div
      className={`bg-gray-300 animate-pulse ${circle ? 'rounded-full' : 'rounded-md'} ${width} ${height}`}
    />
  );
};

export default Skeleton;
