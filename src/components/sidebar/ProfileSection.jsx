import  { useState, useRef, useEffect } from 'react';
import { User, LogOut, ChevronDown, ChevronUp } from 'lucide-react';
import Profile from '../../assets/Profile.jpg'

export const ProfileSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <div ref={menuRef} className="relative pb-4 pl-4 pr-4 border-gray-800">
      <div 
        className="flex items-center p-2 cursor-pointer rounded-md bg-[#232324] hover:bg-[#434347]"
        onClick={toggleMenu}
      >
        <div className="w-10 h-10 rounded-[28%] bg-gray-700 overflow-hidden">
          <img 
            src={Profile} 
            alt="User" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="ml-3 flex-1">
          <div className="font-medium text-gray-200 text-start">User name</div>
          <div className="text-xs text-gray-400 flex items-center">
            <span className="mr-1 w-2 h-2 bg-green-500 rounded-full inline-block"></span>
            Hiring manager
          </div>
        </div>
        
        <div className="text-gray-400">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute bottom-full left-0 right-0 m-4 bg-[#232324] rounded-md shadow-lg overflow-hidden transition-all duration-200 ease-in-out mb-1">
          <div className="p-3 hover:bg-[#434347] cursor-pointer flex items-center">
            <User size={20} className="text-gray-400 mr-2" />
            <span>Profile</span>
          </div>
          <div className="p-3 hover:bg-[#434347] cursor-pointer flex items-center">
            <LogOut size={20} className="text-gray-400 mr-2" />
            <span>Sign out</span>
          </div>
        </div>
      )}
    </div>
  );
};