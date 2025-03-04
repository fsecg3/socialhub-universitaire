
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  href,
  className,
  delay = 0,
}) => {
  return (
    <Card
      className={cn(
        'overflow-hidden transition-all duration-300 h-full group hover:shadow-hover border border-border/50',
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `fadeIn 0.5s ease-out ${delay}ms forwards`,
      }}
    >
      <CardHeader className="p-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 transition-transform group-hover:scale-110 duration-300">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full group-hover:bg-primary/5 transition-colors">
          <Link to={href}>
            <span>En savoir plus</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 transition-transform group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
