import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

export const ProjectCard = ({ title, description, image, category }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lifted transition-all duration-300 border-border bg-gradient-card">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            {category}
          </span>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Saiba Mais
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};
