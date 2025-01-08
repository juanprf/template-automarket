import React, { useState } from 'react';

interface YearRangeSliderProps {
  onYearChange: (minYear: number, maxYear: number) => void;
}

export function YearRangeSlider({ onYearChange }: YearRangeSliderProps) {
  const currentYear = new Date().getFullYear();
  const minPossibleYear = currentYear - 50;
  const [minYear, setMinYear] = useState(currentYear - 10);
  const [maxYear, setMaxYear] = useState(currentYear);

  const handleMinYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Number(e.target.value), maxYear);
    setMinYear(newMin);
    onYearChange(newMin, maxYear);
  };

  const handleMaxYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(e.target.value), minYear);
    setMaxYear(newMax);
    onYearChange(minYear, newMax);
  };

  const getBackgroundSize = (value: number, min: number, max: number) => {
    return ((value - min) * 100) / (max - min) + '% 100%';
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-600">
        <span>{minYear}</span>
        <span>{maxYear}</span>
      </div>
      
      <div className="relative h-12">
        <input
          type="range"
          min={minPossibleYear}
          max={currentYear}
          value={minYear}
          onChange={handleMinYearChange}
          className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          style={{
            backgroundSize: getBackgroundSize(minYear, minPossibleYear, currentYear),
          }}
        />
        <input
          type="range"
          min={minPossibleYear}
          max={currentYear}
          value={maxYear}
          onChange={handleMaxYearChange}
          className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          style={{
            backgroundSize: getBackgroundSize(maxYear, minPossibleYear, currentYear),
          }}
        />
      </div>

    </div>
  );
}