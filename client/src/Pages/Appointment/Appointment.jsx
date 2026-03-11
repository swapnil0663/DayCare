import React from 'react';

function Appointment({ onNavigate }) {
  return (
    <div className="p-5 text-center">
      <h1 className="text-4xl font-bold mb-4">Appointment</h1>
      <p className="text-lg mb-5">Book your appointment here</p>
      <button 
        onClick={() => onNavigate('landing')}
        className="mt-5 px-5 py-2.5 text-base cursor-pointer bg-gray-600 hover:bg-gray-700 text-white border-none rounded-lg transition-colors"
      >
        Back to Landing
      </button>
    </div>
  );
}

export default Appointment;