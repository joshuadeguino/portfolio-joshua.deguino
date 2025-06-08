import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Video } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tools: string[];
  type: string;
  videoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const isVideo = project.category === "video";
  return (
    <Card className={`group overflow-hidden hover:shadow-2xl transition-all duration-300 bg-slate-800 text-white border-0 shadow-lg ${isVideo ? 'flex justify-center items-center min-h-[300px] py-8' : ''}`}>
      <CardContent className={`p-0 ${isVideo ? 'w-full flex flex-col items-center' : ''}`}>
        {isVideo ? (
          <>
            <div className="flex flex-col items-center w-full max-w-xl">
              <div className="mb-4 w-full flex items-center justify-between">
                <Badge variant="secondary" className="text-xs bg-amber-100 text-slate-800">
                  {project.type}
                </Badge>
                <div className="p-2 bg-red-500 rounded-full ml-2">
                  <Video className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-wide w-full text-left">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm w-full text-left">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6 w-full">
                {project.tools.map((tool) => (
                  <Badge 
                    key={tool} 
                    variant="outline" 
                    className={`text-xs border-amber-400 text-amber-400 bg-transparent`}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
              <Button
                onClick={() => window.open(project.videoUrl, '_blank')}
                className="w-full bg-red-500 hover:bg-red-600 text-white text-base font-semibold py-3"
              >
                <Video className="w-4 h-4 mr-2" />
                View Video
              </Button>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[300px]">
            {/* Left side - Project details */}
            <div className="p-8 flex flex-col justify-center bg-slate-800">
              <div className="mb-4">
                <Badge variant="secondary" className="text-xs mb-4 bg-amber-100 text-slate-800">
                  {project.type}
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-wide">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool) => (
                  <Badge 
                    key={tool} 
                    variant="outline" 
                    className={`text-xs border-amber-400 text-amber-400 bg-transparent`}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            {/* Right side - Visual content */}
            <div className="relative w-full h-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
