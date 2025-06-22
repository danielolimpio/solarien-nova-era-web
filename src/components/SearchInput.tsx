
import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  placeholder?: string;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onClear,
  placeholder = "Buscar...",
  className = ""
}) => {
  console.log('SearchInput render - value:', value); // Debug log
  
  return (
    <div className={`relative flex-1 ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 z-10" />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            console.log('Input change:', e.target.value); // Debug log
            onChange(e.target.value);
          }}
          style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            border: '2px solid #d1d5db',
            borderRadius: '8px',
            padding: '12px 48px 12px 40px',
            width: '100%',
            fontSize: '16px',
            fontWeight: '500'
          }}
          className="focus:border-solarien-primary focus:ring-2 focus:ring-solarien-primary/20 focus:outline-none transition-all duration-300"
        />
        {value && (
          <button
            onClick={() => {
              console.log('Clear button clicked'); // Debug log
              onClear();
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors z-10 p-1"
            type="button"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
