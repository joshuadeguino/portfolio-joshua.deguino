import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Video, Monitor, Smartphone, Star, Folder, FileText } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      category: "Visual Branding",
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      tools: [
        { name: "Canva Pro", level: "Intermediate", color: "bg-yellow-500", stars: 2.5 }
      ],
      description: "Creating compelling brand identities, logos, and visual assets with professional design tools.",
      gradient: "from-purple-500 to-purple-600",
      folders: [
        { name: "Brand Identities", icon: <Folder className="w-4 h-4" /> },
        { name: "Social Media Graphics", icon: <Folder className="w-4 h-4" /> },
        { name: "Logo Designs", icon: <Folder className="w-4 h-4" /> },
        { name: "Marketing Materials", icon: <Folder className="w-4 h-4" /> }
      ]
    },
    {
      category: "Video Production",
      icon: <Video className="w-8 h-8 text-pink-600" />,
      tools: [
        { name: "CapCut", level: "Intermediate", color: "bg-yellow-500", stars: 2.5 }
      ],
      description: "Producing engaging video content from concept to final edit with seamless transitions and effects.",
      gradient: "from-pink-500 to-pink-600",
      folders: [
        { name: "Promotional Videos", icon: <Video className="w-4 h-4" /> },
        { name: "Tutorial Content", icon: <Video className="w-4 h-4" /> },
        { name: "Social Media Clips", icon: <Video className="w-4 h-4" /> },
        { name: "Motion Graphics", icon: <Video className="w-4 h-4" /> }
      ]
    }
  ];

  const renderSkillLevel = (level: string, color: string, stars: number) => {
    return (
      <div className="flex items-center gap-1">
        <div className={`w-2 h-2 rounded-full ${color}`}></div>
        <span className="text-xs text-muted-foreground">{level}</span>
        <div className="flex ml-1">
          {[...Array(5)].map((_, i) => {
            const isFilled = i < Math.floor(stars);
            const isHalf = i === Math.floor(stars) && stars % 1 !== 0;
            
            return (
              <Star 
                key={i} 
                className={`w-3 h-3 ${
                  isFilled 
                    ? 'text-yellow-400 fill-current' 
                    : isHalf 
                      ? 'text-yellow-400 fill-current opacity-50' 
                      : 'text-gray-300'
                }`} 
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Specialized in visual branding with Canva Pro and video editing with CapCut. Organized workflow with proper file structure and labeling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {skills.map((skill, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${skill.gradient} mb-6`}>
                {skill.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {skill.category}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {skill.description}
              </p>
              
              {/* Tools Section */}
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">Tools Used:</h4>
                {skill.tools.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                    <span className="font-medium">{tool.name}</span>
                    {renderSkillLevel(tool.level, tool.color, tool.stars)}
                  </div>
                ))}
              </div>

              {/* File Structure Section */}
              {/* (Remove the File Organization section here) */}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Learning & Growth Section */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-foreground">Currently Learning</h3>
        <p className="text-lg font-bold text-blue-700 mb-8 flex items-center justify-center gap-2">
          <span role="img" aria-label="rocket">🚀</span> Leveling Up: Mastering Figma UI/UX Design! <span className="hidden md:inline">|</span> <span className="text-blue-500">Always hungry for new creative tools and challenges.</span>
        </p>
        <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md">
          <Monitor className="w-6 h-6 text-blue-600 animate-bounce" />
          <span className="font-bold text-blue-800 text-lg">Figma UI/UX Design</span>
          <Badge variant="outline" className="text-xs border-blue-300 text-blue-600 bg-white">Open for Training</Badge>
        </div>
      </div>

      {/* Primary Tools Section */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-8 text-foreground">Primary Tools</h3>
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold text-purple-800 mb-2">Canva Pro</h4>
            <p className="text-sm text-purple-600 text-center">Intermediate level</p>
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => {
                const isFilled = i < 2;
                const isHalf = i === 2;
                
                return (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${
                      isFilled 
                        ? 'text-yellow-400 fill-current' 
                        : isHalf 
                          ? 'text-yellow-400 fill-current opacity-50' 
                          : 'text-gray-300'
                    }`} 
                  />
                );
              })}
            </div>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-4">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold text-pink-800 mb-2">CapCut</h4>
            <p className="text-sm text-pink-600 text-center">Intermediate level</p>
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => {
                const isFilled = i < 2;
                const isHalf = i === 2;
                
                return (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${
                      isFilled 
                        ? 'text-yellow-400 fill-current' 
                        : isHalf 
                          ? 'text-yellow-400 fill-current opacity-50' 
                          : 'text-gray-300'
                    }`} 
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
