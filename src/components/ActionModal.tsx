
import React from 'react';
import { X } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'apply' | 'explore' | 'campus';
}

const ActionModal: React.FC<ActionModalProps> = ({ 
  isOpen, 
  onClose, 
  title,
  type
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100">
            <X size={18} />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        
        {type === 'apply' && (
          <div className="space-y-4">
            <DialogDescription>
              Fill out the form below to apply for admission to SRE PU College for the upcoming academic year.
            </DialogDescription>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="firstName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="lastName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" />
              </div>
              
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course Interested In</label>
                <select id="course" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border">
                  <option value="">Select a course</option>
                  <option value="science">Science</option>
                  <option value="commerce">Commerce</option>
                  <option value="humanities">Humanities</option>
                  <option value="finearts">Fine Arts</option>
                </select>
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" className="bg-college-blue hover:bg-college-blue/90">Submit Application</Button>
              </div>
            </form>
          </div>
        )}
        
        {type === 'explore' && (
          <div className="space-y-4">
            <DialogDescription>
              Discover our comprehensive range of programs designed to prepare students for future success.
            </DialogDescription>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-college-blue">Science</h3>
                <p className="text-sm text-gray-600">Physics, Chemistry, Biology, Mathematics</p>
                <p className="text-xs mt-2 text-gray-500">Ideal for future engineers, doctors, researchers</p>
              </div>
              
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-college-teal">Commerce</h3>
                <p className="text-sm text-gray-600">Accountancy, Business Studies, Economics</p>
                <p className="text-xs mt-2 text-gray-500">Perfect for aspiring business professionals</p>
              </div>
              
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-college-orange">Humanities</h3>
                <p className="text-sm text-gray-600">History, Geography, Political Science, Sociology</p>
                <p className="text-xs mt-2 text-gray-500">For future social scientists and thinkers</p>
              </div>
              
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-purple-500">Fine Arts</h3>
                <p className="text-sm text-gray-600">Music, Dance, Visual Arts</p>
                <p className="text-xs mt-2 text-gray-500">For students with creative pursuits</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-600">
              Each program is taught by experienced faculty using modern teaching methodologies and state-of-the-art facilities.
            </p>
            
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button variant="outline">Close</Button>
              </DialogClose>
            </div>
          </div>
        )}
        
        {type === 'campus' && (
          <div className="space-y-4">
            <DialogDescription>
              Experience our world-class campus facilities through our virtual tour.
            </DialogDescription>
            
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="College Building" 
                className="w-full h-full object-cover rounded-md" 
              />
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold">Campus Highlights</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Modern classrooms with smart teaching tools</li>
                <li>Well-equipped science and computer laboratories</li>
                <li>Extensive library with digital resources</li>
                <li>Sports facilities including indoor and outdoor courts</li>
                <li>Auditorium and performance spaces</li>
                <li>Student recreation areas and cafeteria</li>
              </ul>
            </div>
            
            <div className="pt-2">
              <h3 className="font-semibold">Schedule a Physical Tour</h3>
              <p className="text-sm text-gray-600">
                We welcome prospective students and families to visit our campus in person.
                Tours are available Monday through Friday, 9:00 AM to 4:00 PM.
              </p>
              <Button className="mt-2 bg-college-blue hover:bg-college-blue/90">Book Tour Date</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ActionModal;
