
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
  return (
    <div className={`relative flex-1 ${className}`}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none z-10" />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-12 pl-12 pr-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-md text-white placeholder-gray-400 focus:border-solarien-primary focus:ring-2 focus:ring-solarien-primary/20 focus:bg-slate-700/80 focus:outline-none transition-all duration-300 font-medium"
        />
        {value && (
          <button
            onClick={onClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors z-10 p-1"
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
