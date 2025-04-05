
import React, { useState } from 'react';
import { Book, Users, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  students: number;
  duration: string;
  color: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  description, 
  icon, 
  students, 
  duration,
  color
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`course-card overflow-hidden border-t-4 ${color} h-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-3">
        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-3 text-college-blue">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{students} Students</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{duration}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className={`w-full transition-colors ${isHovered ? 'bg-college-blue text-white' : ''}`}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
