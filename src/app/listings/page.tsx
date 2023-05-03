import React from 'react';

const page = () => {
  return (
    <section>
      <div className="h-screen w-screen bg-[#090c14] px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="mb-3 text-2xl font-semibold">Welcome to Adobe Finder</h1>
        <div className="flex items-center gap-2">
          <span className="text-2xl">👈🏼</span>
          <span>Select Service</span>
        </div>
      </div>
    </section>
  );
};

export default page;
