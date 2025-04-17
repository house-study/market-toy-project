import React from 'react';

interface ProductOptionsProps {
  options?: ProductOption[];
}

const ProductOptions = ({ options }: ProductOptionsProps) => {
  if (!options || options.length === 0) {
    return (
      <div className="text-sm text-gray-400">선택 가능한 옵션이 없습니다.</div>
    );
  }

  return (
    <div className="mt-4 flex flex-col gap-2">
      {options.map(option => (
        <div key={option.name} className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">
            {option.name}
          </label>
          <select
            className="rounded border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              {option.name} 선택
            </option>
            {option.values.map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;
