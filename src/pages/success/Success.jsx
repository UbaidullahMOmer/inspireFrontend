import React from "react";

function Success() {
  return (
    <div className="flex justify-center items-center h-screen bg-green-500">
      <div className="bg-white rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-4">
          Payment Successful
        </h1>
        <p className="text-lg text-gray-700">
          Your payment has been successfully completed.
        </p>
      </div>
    </div>
  );
}

export default Success;
