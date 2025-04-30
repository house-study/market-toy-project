import React from 'react';

const ProductOptions = () => {
  return (
    <div className="mt-4 flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-gray-700">개수</label>
        <input
          type="number"
          min="1"
          max="10000"
          className="rounded border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default ProductOptions;
