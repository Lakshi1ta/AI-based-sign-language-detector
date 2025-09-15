import React from "react";

export default function Detect() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Sign Detection</h1>
      <p className="text-gray-600 mb-6">
        Upload a video or use your webcam to detect sign language in real-time.
      </p>
      <div className="border-2 border-dashed border-gray-400 p-10 rounded-lg">
        <p className="text-gray-500">[ Webcam / Upload feature will appear here ]</p>
      </div>
    </div>
  );
}
