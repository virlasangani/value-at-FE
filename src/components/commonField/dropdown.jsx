import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FilterDropdown = ({ options, value, onChange, placeholder }) => {
const menuRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
  
    }, []);
  return (
    <div className="relative">
      <button
        className="w-full cursor-pointer px-4 py-2.5 text-left bg-[#1a1a1a] rounded-lg flex items-center justify-between text-gray-300 hover:bg-[#252525] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption?.label || placeholder}</span>
        <ChevronDown size={20} className={` ml-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div ref={menuRef} className="absolute z-10 w-full mt-2 bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden">
          {options.map((option) => (
            <button
              key={option.value}
              className="w-full cursor-pointer px-4 py-2.5 text-left text-gray-300 hover:bg-[#252525] transition-colors"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
