import React from 'react';

function Landing({ onNavigate }) {
  return (
    <div className="p-5 text-center">
      <h1 className="text-4xl font-bold mb-8">Landing</h1>
      <nav className="mt-5">
        <button 
          onClick={() => onNavigate('home')}
          className="m-2 px-5 py-2.5 text-base cursor-pointer bg-blue-500 hover:bg-blue-600 text-white border-none rounded-lg transition-colors"
        >
          Home
        </button>
        <button 
          onClick={() => onNavigate('appointment')}
          className="m-2 px-5 py-2.5 text-base cursor-pointer bg-green-500 hover:bg-green-600 text-white border-none rounded-lg transition-colors"
        >
          Appointment
        </button>
      </nav>
    </div>
  );
}

export default Landing;