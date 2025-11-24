import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }, // Contact section add kiya
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
        isScrolled 
          ? "bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg border-b border-gray-800" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Centered for better balance */}
          <div className="text-lg font-semibold cursor-pointer flex-shrink-0">
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-white">Raghavendra</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-white">Tavati</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8 text-gray-300">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`relative px-3 py-2 transition-all duration-300 hover:text-[#8245ec] font-medium ${
                      activeSection === item.id 
                        ? "text-[#8245ec]" 
                        : "text-gray-300"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8245ec] rounded-full"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4 flex-shrink-0">
            <a
              href="https://github.com/Raghav93160"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] transition-all duration-300 p-2 rounded-lg hover:bg-gray-800"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/raghavendra-tavati-847b20307/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] transition-all duration-300 p-2 rounded-lg hover:bg-gray-800"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#8245ec] transition-all duration-300 p-2 rounded-lg hover:bg-gray-800"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-lg border-t border-gray-800 shadow-xl">
            <div className="px-6 py-4">
              <ul className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => handleMenuItemClick(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                        activeSection === item.id
                          ? "text-[#8245ec] bg-purple-500/10 border-l-2 border-[#8245ec]"
                          : "text-gray-300 hover:text-white hover:bg-gray-800"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              
              {/* Mobile Social Icons */}
              <div className="flex justify-center space-x-6 pt-6 pb-2 border-t border-gray-800 mt-4">
                <a
                  href="https://github.com/Raghav93160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#8245ec] transition-all duration-300 p-3 rounded-lg hover:bg-gray-800"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/raghavendra-tavati-847b20307/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#8245ec] transition-all duration-300 p-3 rounded-lg hover:bg-gray-800"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;