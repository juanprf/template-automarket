import React, { useState } from 'react';

interface YearRangeSliderProps {
  onYearChange: (minYear: number, maxYear: number) => void;
  className?: string;
}

export function YearRangeSlider({ onYearChange, className = '' }: YearRangeSliderProps) {
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

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex justify-between text-sm text-gray-600">
        <span>{minYear}</span>
        <span>{maxYear}</span>
      </div>
      
      <div className="relative h-2">
        <div className="absolute w-full h-full bg-gray-200 rounded-lg" />
        <div
          className="absolute h-full bg-blue-500 rounded-lg"
          style={{
            left: `${((minYear - minPossibleYear) / (currentYear - minPossibleYear)) * 100}%`,
            right: `${100 - ((maxYear - minPossibleYear) / (currentYear - minPossibleYear)) * 100}%`
          }}
        />
        <input
          type="range"
          min={minPossibleYear}
          max={currentYear}
          value={minYear}
          onChange={handleMinYearChange}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
        <input
          type="range"
          min={minPossibleYear}
          max={currentYear}
          value={maxYear}
          onChange={handleMaxYearChange}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
        <div
          className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full -mt-1.5 -ml-2"
          style={{ left: `${((minYear - minPossibleYear) / (currentYear - minPossibleYear)) * 100}%` }}
        />
        <div
          className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full -mt-1.5 -ml-2"
          style={{ left: `${((maxYear - minPossibleYear) / (currentYear - minPossibleYear)) * 100}%` }}
        />
      </div>
    </div>
  );
}