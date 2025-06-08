import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Video, Youtube } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "graphics",
      description: "A bold and calming brand visual for Corner Coffee's signature matcha. Featuring earthy tones, rich textures, and a comforting tagline — 'Savor the Green. Sip the Calm.' — this design captures the essence of a serene café experience.",
      image: "/match-brand visuals-2.png",
      tools: ["Canva"],
      type: "Branding"
    },
    {
      id: 2,
      title: "Nike Jordan Campaign",
      category: "graphics",
      description: "Step up your sneaker game with the Air Jordan 1 Low SE 'Brown Elephant' — a stylish blend of premium textures in earthy tones and a unique elephant-print swoosh. Priced at ₱8,599, this limited-edition pair combines iconic Nike heritage with fresh streetwear flair.",
      image: "/brand visuals-nike airjordan.png",
      tools: ["Canva"],
      type: "Social Media"
    },
    {
      id: 6,
      title: "Power is Pure - Video Edit Sample",
      category: "video",
      description: "A high-energy edit showcasing the raw power and emotion of the moment. Fast cuts, bold text overlays, and dynamic pacing make this a standout piece for social media.\n\nWork Experience: Created as a freelance video editor on Upwork for a client's YouTube Shorts channel, focusing on motivational and impactful short-form content.",
      image: "/placeholder.svg",
      videoUrl: "https://drive.google.com/file/d/1A9ALLIaLJbcXLuo1zHNsNKk5tYVZlY0p/view?usp=drive_link",
      tools: ["CapCut"],
      type: "Video Edit Sample"
    },
    {
      id: 7,
      title: "Don't Half-Ass It - Video Edit Sample",
      category: "video",
      description: "Motivational edit with punchy transitions and impactful messaging. Designed to inspire viewers to give their all, every single time.\n\nWork Experience: Produced and edited as part of a freelance contract on Upwork, delivering engaging motivational content for YouTube Shorts.",
      image: "/placeholder.svg",
      videoUrl: "https://drive.google.com/file/d/1mDNIaS8BVujqvMkyvQyuVJRALs9qw20W/view?usp=sharing",
      tools: ["CapCut"],
      type: "Video Edit Sample"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <HeroSection />
      
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground mb-8">
            A showcase of creative work spanning visual branding and video production
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="px-6"
            >
              All Projects
            </Button>
            <Button
              variant={filter === "graphics" ? "default" : "outline"}
              onClick={() => setFilter("graphics")}
              className="px-6"
            >
              Graphics Design
            </Button>
            <Button
              variant={filter === "video" ? "default" : "outline"}
              onClick={() => setFilter("video")}
              className="px-6"
            >
              <Video className="w-4 h-4 mr-2" />
              Video Projects
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
