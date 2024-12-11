import React from "react";
import { TfiClose } from "react-icons/tfi";
const RemoveOverlay = ({ cancelRemove, confirmRemove }) => {
  return (
    <div>
      <div
        className="hidden w-full h-full fixed top-0 left-0 md:flex justify-center items-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 60 }}
      >
        <p className="absolute right-[37%] top-[38%] text-white text-xl cursor-pointer">
          <TfiClose onClick={cancelRemove} />
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-lg font-semibold">Remove Item</h1>
          <p className="pt-3">
            Are you sure you want to remove this Student Information?
          </p>
          <div className="flex gap-3 pt-3">
            <button
              onClick={confirmRemove}
              className="text-white bg-blue-800 p-3 rounded"
            >
              REMOVE
            </button>
            <button onClick={cancelRemove} className="border p-3 rounded">
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveOverlay;
