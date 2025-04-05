
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ActionModal from '@/components/ActionModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Campus', href: '#campus' },
    { name: 'Contact', href: '#contact' }
  ];

  // Handle scroll event to change navbar appearance with simplified transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-white shadow-sm py-3"
            : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <span className="text-xl font-semibold text-college-blue font-poppins">SRE PU College</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="font-medium text-gray-600 hover:text-college-blue transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="default" 
              size="sm"
              className="bg-college-blue hover:bg-college-blue/90"
              onClick={() => setIsApplyModalOpen(true)}
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - simplified animation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="py-2 font-medium text-gray-600 hover:text-college-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <Button 
                  variant="default" 
                  className="w-full bg-college-blue hover:bg-college-blue/90"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsApplyModalOpen(true);
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Apply Now Modal */}
      <ActionModal 
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title="Apply for Admission"
        type="apply"
      />
    </>
  );
};

export default Navbar;
