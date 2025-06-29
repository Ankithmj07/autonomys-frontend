import React from 'react';
import { FaTwitter, FaGithub, FaDiscord, FaLinkedin, FaYoutube, FaMedium, FaTelegramPlane } from 'react-icons/fa';
import { PiChatsCircleBold } from 'react-icons/pi';
import logoImg from '../../assets/logo.png'

const socials = [
  { icon: <FaTwitter size={19} />, link: '#' },
  { icon: <FaGithub size={19} />, link: '#' },
  { icon: <FaDiscord size={19} />, link: '#' },
  { icon: <FaLinkedin size={19} />, link: '#' },
  { icon: <FaYoutube size={19} />, link: '#' },
  { icon: <FaMedium size={19} />, link: '#' },
  { icon: <FaTelegramPlane size={19} />, link: '#' },
  { icon: <PiChatsCircleBold size={19} />, link: '#' },
];

const links = [
  {
    title: 'GENERAL',
    items: ['Developer', 'Academy', 'Ecosystem'],
  },
  {
    title: 'TOOLS',
    items: ['Explorer', 'Blockscout', 'Status', 'Telemetry', 'Faucet'],
  },
  {
    title: 'PRODUCTS',
    items: ['Auto Suite', 'Auto ID', 'Astral', 'Space Acres'],
  },
  {
    title: 'ABOUT',
    items: ['Team', 'Brand Kit', 'Contact', 'Careers'],
  },
];

const FooterSection: React.FC = () => {
  return (
    <div className="w-full px-6 lg:px-40 py-15 lg:py-10 bg-[#292a4180] backdrop-blur-2xl rounded-4xl border-2 border-[#292a4126]">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-center lg:block items-center gap-3">
            <img src={logoImg} alt="logo" className="w-[70%] lg:w-[30%]" />
          </div>
          <p className="text-[#d1d8eb] text-center lg:text-left opacity-80">The Foundation Layer for AI3.0</p>

          {/* Social Icons */}
          <div className="hidden lg:flex gap-3 mt-4">
            {socials.map((social, index) => (
              <a
                href={social.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-2 hover:opacity-80 transition"
              >
                <div className="text-black">{social.icon}</div>
              </a>
            ))}
          </div>
          <div className="block lg:hidden grid grid-cols-4 gap-3 px-15 mt-4">
            {socials.map((social, index) => (
              <a
                href={social.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-2 hover:opacity-80 transition"
              >
                <div className="text-black">{social.icon}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-10 lg:mt-0">
          {links.map((section, index) => (
            <div key={index}>
              <h3 className="text-[12px] text-white tracking-widest mb-3">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-1">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-white hover:underline cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#ffffff33] my-10"></div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <p className="text-[#d1d8eb] opacity-80">Autonomys © 2025</p>
        <div className="flex gap-6 text-white">
          <span className="cursor-pointer hover:underline">Terms of Use</span>
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
