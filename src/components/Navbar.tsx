
import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn, LogOut, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ActionModal from '@/components/ActionModal';
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { toast } = useToast();

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

  const handleLogin = (asGuest = false) => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
    toast({
      title: asGuest ? "Signed in as Guest" : "Signed in Successfully",
      description: `Welcome ${asGuest ? "Guest" : "User"}! You now have access to all features.`,
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Signed out Successfully",
      description: "You have been signed out of your account.",
    });
  };

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
          <div className="hidden md:flex items-center space-x-6">
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
            {isLoggedIn ? (
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
                onClick={handleLogout}
              >
                <LogOut size={16} />
                Sign Out
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 text-college-blue"
                onClick={() => setIsLoginModalOpen(true)}
              >
                <LogIn size={16} />
                Sign In
              </Button>
            )}
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
              <div className="pt-2">
                {isLoggedIn ? (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleLogout();
                    }}
                  >
                    <LogOut size={16} className="mr-2" />
                    Sign Out
                  </Button>
                ) : (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsLoginModalOpen(true);
                    }}
                  >
                    <LogIn size={16} className="mr-2" />
                    Sign In
                  </Button>
                )}
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

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

// Login Modal Component
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (asGuest: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-college-blue" 
                placeholder="Email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-college-blue" 
                placeholder="Password"
              />
            </div>
            <Button 
              className="w-full bg-college-blue hover:bg-college-blue/90"
              onClick={() => onLogin(false)}
            >
              <LogIn size={16} className="mr-2" />
              Sign In
            </Button>
            <div className="text-center">
              <span className="text-gray-500">or</span>
            </div>
            <Button 
              variant="outline" 
              className="w-full border-college-blue text-college-blue hover:bg-college-blue/10"
              onClick={() => onLogin(true)}
            >
              <User size={16} className="mr-2" />
              Continue as Guest
            </Button>
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-4 flex justify-end">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
