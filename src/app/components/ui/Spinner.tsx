import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
