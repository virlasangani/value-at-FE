import { Menu } from './Menu';
import { ProfileSection } from './ProfileSection';
import { Box } from 'lucide-react';
import Logo from '../../assets/Logo.svg'

export default function Sidebar(){
  return (
    <aside className='flex h-screen bg-gray-100'>
    <div className="w-72 h-screen flex flex-col bg-[#131415] text-white">
      <div className="p-6 flex items-center">
        <img src={Logo}></img>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <Menu />
      </div>
      
      <div className="mt-auto">
        <ProfileSection />
      </div>
    </div>
    </aside>
  );
};