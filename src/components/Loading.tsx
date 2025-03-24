import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background pattern-worldmap">
      <div className="flex flex-col items-center">
        <img src="/favicon.ico" alt="Loading" className="h-20 w-20 mb-4" />
        <p className="text-lg font-medium text-primary">Đang tải dữ liệu</p>
      </div>
    </div>
  );
};

export default Loading;
