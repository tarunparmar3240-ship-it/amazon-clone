import React, { useState } from "react";
import { useSelector } from "react-redux";

const LocationModal = ({ isOpen, onClose, setSelectedLocation }) => {
  const [pincode, setPincode] = useState("");

  const { address } = useSelector((state) => state.addr || {});

  const handleApplyPincode = async () => {
    if (!pincode.trim()) return;
    try {
      // Free Indian Postal API se location lookup
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`,
      );
      const data = await response.json();

      if (data && data[0].Status === "Success") {
        const locationName = data[0].PostOffice[0].District;
        setSelectedLocation(`${locationName} ${pincode}`);
      } else {
        setSelectedLocation(`Pincode ${pincode}`);
      }
    } catch (error) {
      console.error("Pincode API Error:", error);
      setSelectedLocation(`Pincode ${pincode}`);
    }
    onClose();
  };

  const handleSelectAddress = (item) => {
    const cityName = item?.city || item?.state || "Location";
    const pin = item?.pincode ? ` ${item.pincode}` : "";
    setSelectedLocation(`${cityName}${pin}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 z-50 items-center justify-center p-4 transition-opacity"
    >
      {/* Inner Modal Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#232f3e] text-white w-full max-w-md rounded-md shadow-2xl p-5 relative border border-gray-700"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-lg font-bold mb-3">Choose your Location</h2>

        <div className="max-h-44 overflow-y-auto mb-3 border-b border-gray-600 pb-3">
          {address && address.length > 0 ? (
            address.map((item) => (
              <div
                onClick={() => handleSelectAddress(item)}
                className="p-2 border border-gray-600 rounded mb-2 hover:bg-[#37475a] cursor-pointer transition"
              >
                <p className="font-bold text-xs">{item.name}</p>
                <p className="text-gray-300 text-xs">
                  {item.city} - {item.pincode}
                </p>
              </div>
            ))
          ) : (
            <p className="text-xs text-gray-400 py-1">
              No saved address found in your account
            </p>
          )}
        </div>

        <p className="text-xs text-gray-300 mb-3">
          Select a delivery location to see product availability and delivery
          options
        </p>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="grow px-3 py-1.5 text-black bg-white rounded text-sm outline-none border border-gray-300 focus:border-yellow-500"
          />
          <button
            onClick={handleApplyPincode}
            className="bg-[#f0c14b] text-black px-4 py-1.5 rounded text-xs font-semibold hover:bg-[#e2b33c] cursor-pointer transition"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
