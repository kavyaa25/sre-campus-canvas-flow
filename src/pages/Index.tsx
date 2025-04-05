import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import ImageSlider from "@/components/ImageSlider";
import ContactForm from "@/components/ContactForm";
import ActionModal from "@/components/ActionModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Book, Microscope, Calculator, Globe, Music, 
  Users, Award, BookOpen, GraduationCap, Building 
} from 'lucide-react';

const Index = () => {
  // Background images for hero section
  const backgroundImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  ];
  
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isExploreModalOpen, setIsExploreModalOpen] = useState(false);
  const [isCampusModalOpen, setIsCampusModalOpen] = useState(false);

  // Background image transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 8000); // Change background every 8 seconds
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  
  // Sample campus images
  const campusImages = [
    { src: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80", alt: "College Building" },
    { src: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80", alt: "Campus Library" },
    { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80", alt: "Sports Facilities" },
  ];

  // Course data
  const courses = [
    {
      title: "Science",
      description: "Physics, Chemistry, Mathematics, Biology for future engineers, doctors and researchers.",
      icon: <Microscope size={24} />,
      students: 450,
      duration: "2 Years",
      color: "border-college-blue"
    },
    {
      title: "Commerce",
      description: "Accountancy, Business Studies, Economics for aspiring business professionals.",
      icon: <Calculator size={24} />,
      students: 380,
      duration: "2 Years",
      color: "border-college-teal"
    },
    {
      title: "Humanities",
      description: "History, Geography, Political Science, Sociology for future social scientists.",
      icon: <Globe size={24} />,
      students: 320,
      duration: "2 Years",
      color: "border-college-orange"
    },
    {
      title: "Fine Arts",
      description: "Music, Dance, Visual Arts for students with creative pursuits and passion.",
      icon: <Music size={24} />,
      students: 150,
      duration: "2 Years",
      color: "border-purple-500"
    }
  ];

  // Statistics data
  const stats = [
    { value: "95%", label: "Placement Rate", icon: <Award size={24} /> },
    { value: "50+", label: "Experienced Faculty", icon: <GraduationCap size={24} /> },
    { value: "25,000+", label: "Alumni Network", icon: <Users size={24} /> },
    { value: "35+", label: "Years of Excellence", icon: <Building size={24} /> }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section with Background Image Transition */}
      <section id="home" className="relative min-h-[85vh] flex items-center pt-16">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentBgIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${image})` }}
          />
        ))}
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Shaping Future Leaders at <span className="text-college-blue">SRE PU College</span>
              </h1>
              <p className="text-lg text-gray-700">
                Unlock your potential with our cutting-edge curriculum, experienced faculty, and world-class facilities. We prepare students for success in academics and life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-college-blue hover:bg-college-blue/90"
                  onClick={() => setIsExploreModalOpen(true)}
                >
                  Explore Programs
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => setIsCampusModalOpen(true)}
                >
                  Campus Tour
                </Button>
              </div>
              
              <div className="pt-6 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gray-${i * 100} flex items-center justify-center text-xs font-medium text-white`}>
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Join <span className="font-semibold">5,000+</span> students who trust our education
                </p>
              </div>
            </div>
            
            <div>
              <div className="relative">
                <div className="absolute -right-2 -bottom-2 w-full h-full border-2 border-college-blue rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                  alt="Students at SRE PU College" 
                  className="w-full h-auto rounded-lg object-cover shadow-md max-h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h6 className="text-college-blue font-medium mb-2">ABOUT US</h6>
            <h2 className="text-3xl font-bold mb-3">
              Excellence in Education Since 1985
            </h2>
            <div className="w-20 h-1 bg-college-blue mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              SRE PU College has been a pioneer in pre-university education, providing a foundation for students to excel in their academic and professional pursuits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-college-blue mb-4">
                  <BookOpen size={30} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Academic Excellence</h3>
                <p className="text-gray-600">
                  Our curriculum is designed to challenge and inspire students, with a focus on conceptual understanding.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-college-teal mb-4">
                  <Users size={30} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Faculty</h3>
                <p className="text-gray-600">
                  Learn from experienced educators who are passionate about teaching and committed to student success.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-college-orange mb-4">
                  <Award size={30} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Modern Facilities</h3>
                <p className="text-gray-600">
                  Our campus features state-of-the-art laboratories, libraries, sports facilities, and smart classrooms.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Statistics - Simplified */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-college-blue mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h6 className="text-college-blue font-medium mb-2">OUR PROGRAMS</h6>
            <h2 className="text-3xl font-bold mb-3">
              Academic Programs We Offer
            </h2>
            <div className="w-20 h-1 bg-college-blue mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Choose from our diverse range of pre-university programs designed to prepare you for higher education and future careers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div key={index}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Campus Section */}
      <section id="campus" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h6 className="text-college-blue font-medium mb-2">OUR CAMPUS</h6>
            <h2 className="text-3xl font-bold mb-3">
              Explore Our Beautiful Campus
            </h2>
            <div className="w-20 h-1 bg-college-blue mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Take a virtual tour of our world-class facilities designed to provide the best learning environment for our students.
            </p>
          </div>
          
          <div>
            <ImageSlider images={campusImages} />
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Modern Infrastructure</h3>
              <p className="text-gray-600">
                State-of-the-art classrooms, laboratories, and study spaces designed to enhance the learning experience.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">Sports Facilities</h3>
              <p className="text-gray-600">
                Comprehensive sports facilities including indoor and outdoor courts, fields, and fitness center.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">Library & Resources</h3>
              <p className="text-gray-600">
                Well-stocked library with physical and digital resources to support academic research and learning.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-14 bg-college-blue text-white" style={{background: 'linear-gradient(rgba(30, 64, 175, 0.9), rgba(30, 64, 175, 0.9)), url(https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80) center/cover'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Begin Your Academic Journey?
            </h2>
            <p className="text-lg mb-6">
              Join SRE PU College and take the first step towards a successful future. Applications for the upcoming academic year are now open.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setIsApplyModalOpen(true)}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h6 className="text-college-blue font-medium mb-2">GET IN TOUCH</h6>
            <h2 className="text-3xl font-bold mb-3">
              Contact Us
            </h2>
            <div className="w-20 h-1 bg-college-blue mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Have questions about our programs or admission process? Reach out to us and our team will be happy to assist you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <ContactForm />
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Visit Our Campus</h3>
                <p className="text-gray-600 mb-4">
                  We welcome prospective students and their families to visit our campus and experience the SRE PU College environment firsthand.
                </p>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9974179213!2d77.30125332343836!3d12.95384772557775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1651231233452!5m2!1sen!2sin" 
                    width="100%" 
                    height="300" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SRE PU College Location"
                    className="rounded-lg"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Admission Office</h3>
                <p className="text-gray-600">
                  Our admission office is open Monday through Friday, 9:00 AM to 5:00 PM. Schedule a visit or call us for more information about our programs and application process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modals */}
      <ActionModal 
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title="Apply for Admission"
        type="apply"
      />
      
      <ActionModal 
        isOpen={isExploreModalOpen}
        onClose={() => setIsExploreModalOpen(false)}
        title="Our Programs"
        type="explore"
      />
      
      <ActionModal 
        isOpen={isCampusModalOpen}
        onClose={() => setIsCampusModalOpen(false)}
        title="Campus Tour"
        type="campus"
      />
      
      <Footer />
    </div>
  );
};

export default Index;
