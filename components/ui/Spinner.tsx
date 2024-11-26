import React from "react";

const Spinner = ({ size = 8, color = "gray-900" }: { size?: number; color?: string }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full h-${size} w-${size} border-t-2 border-b-2 border-${color}`}
        role="status"
      />
    </div>
  );
};

export default Spinner;
