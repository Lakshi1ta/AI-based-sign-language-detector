import React from "react";
import Webcam from "react-webcam";
export default function Detect() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Sign Detection</h1>
      <div className="flex justify-center items-center h-screen bg-gray-900">
      <Webcam 
        audio={false} 
        height={400} 
        width={600} 
        screenshotFormat="image/jpeg" 
        className="rounded-xl shadow-lg"
      />
    </div>
    </div>
  );
}
