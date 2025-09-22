import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import autonomysLogo from '../../assets/logo.png' // Your logo image
import { HiChevronDown } from 'react-icons/hi';


const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = ['Protocol', 'Products', 'Ecosystem', 'Community', 'Blog', 'About'];

  return (
    <nav className="fixed sticky z-1000 w-full py-3 flex justify-between px-4 space-x-28 xl:px-35 2xl:px-35 md:space-x-138 lg:space-x-30 xl:space-x-38 items-center mt-5">
      {/* Logo */}
      <div className='w-[160px] h-[52px] px-[22px] pt-4 pt-[18px] bg-[#292a4100] backdrop-blur-lg rounded-[14px]'>
        <img src={autonomysLogo} alt="Autonomys Logo" className="w-[116px]" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-8 px-5 text-white font-medium bg-[#292a4126] backdrop-blur-sm rounded-[14px] h-[52px]">
        <ul className="hidden lg:flex space-x-10 text-white font-medium">
          {menuItems.map((item) => (
            <li key={item} className="cursor-pointer hover:opacity-80 flex items-center gap-1">
              {item}
              <HiChevronDown className="w-5 h-5 text-white" />
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden bg-white p-2 w-[72px] flex justify-center items-center h-[52px] rounded-xl shadow"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="text-black" />
      </button>
    </nav>
  );
};

export default Navbar;
