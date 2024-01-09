'use client';

import React from 'react';

const Secondary = ({color}: {color: string}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="2" y="2" width="28" height="28" rx="14" fill="#5F7170" stroke="white" strokeWidth="2" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke={color} />
    </svg>
  );
};

export default Secondary;
