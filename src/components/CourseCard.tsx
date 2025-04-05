
import React from 'react';
import { Users, Clock } from 'lucide-react';
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
  return (
    <Card className={`course-card overflow-hidden border-l-4 ${color} h-full`}>
      <CardHeader className="pb-3">
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3 text-college-blue">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Users size={14} className="mr-1" />
            <span>{students} Students</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{duration}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full transition-colors hover:bg-college-blue hover:text-white"
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
