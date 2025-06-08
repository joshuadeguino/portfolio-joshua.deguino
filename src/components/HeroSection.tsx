import { Button } from "@/components/ui/button";
import { ArrowDown, Palette, Video } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-blue-400 rounded-full animate-ping"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Graduation Picture */}
        <div className="flex justify-center mb-6">
          <img
            src="/grad picture.jpg"
            alt="Graduation"
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-xl ring-4 ring-purple-200 hover:scale-105 transition-transform duration-300 bg-white"
            style={{ marginTop: '-2rem' }}
          />
        </div>

        <div className="mb-8 animate-fade-in">
          <div className="flex justify-center gap-4 mb-6">
            <div className="p-3 bg-purple-100 rounded-full">
              <Palette className="w-8 h-8 text-purple-600" />
            </div>
            <div className="p-3 bg-pink-100 rounded-full">
              <Video className="w-8 h-8 text-pink-600" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Graphic Designer
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bringing ideas to life through stunning visual designs and compelling video content. 
            Specialized in brand identity and digital storytelling.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            onClick={scrollToProjects}
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 py-6 text-lg border-2"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Visual Branding with Canva</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <span>Video Editing with CapCut</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
