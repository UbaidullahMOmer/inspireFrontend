import React from 'react';

function Cancel() {
  return (
    <div className="flex justify-center items-center h-screen bg-red-500">
      <div className="bg-white rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-red-700 mb-4">Payment Cancelled</h1>
        <p className="text-lg text-gray-700">Your payment has been cancelled.</p>
      </div>
    </div>
  );
}

export default Cancel;
