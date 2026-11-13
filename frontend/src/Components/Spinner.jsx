import React from "react";

export default function Spinner() {
  return (
    <div className="fixed inset-0 bg-[#00001A] z-[9999] flex items-center justify-center bg-opacity-30">
      <div className="h-10 md:h-14 w-10 md:w-14 border-3 border-dashed border-[#00001A] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
