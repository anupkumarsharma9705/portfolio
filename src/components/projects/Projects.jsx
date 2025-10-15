import React, { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const projectsData = [
  {
    title: "EmotionEcho",
    description: "Facial Emotion Recognition Using OpenCV and DeepFace Python libraries",
    image: "https://learn.g2.com/hubfs/G2CM_FI454_Learn_Article_Images_%5BFacial_recognition%5D_V1a-1.png",
    tech: ["Python", "OpenCV", "DeepFace", "AI"],
    category: "ai",
    icon: "🤖",
    // link: "https://emotion-echo-demo.netlify.app", // <-- Demo link (currently commented out)
    github: "https://github.com/anupkumarsharma9705/EmotionEcho.git"
  }
];

const categories = [
  { id: "all", label: "All Projects", icon: "🏁" },
  // Add more categories if needed
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent"></div>

      <div className="w-full px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/30 mb-4">
            <Filter className="w-4 h-4 text-red-500" />
            <span className="text-sm font-semibold text-red-500">PROJECT SHOWCASE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-red-600 to-cyan-400 bg-clip-text text-transparent">
              ⚙️ PROJECTS
            </span>
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Engineering solutions at racing speed
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/50 scale-105'
                  : 'bg-black/20 backdrop-blur-sm hover:bg-red-600/20 border border-red-600/30'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-black/40 backdrop-blur-sm border-2 border-red-600/30 hover:border-red-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-2xl shadow-lg">
                  {project.icon}
                </div>

                <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}>
                  {/* Uncomment this block when ready to add demo link */}
                  {/* {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-white text-black hover:bg-red-600 hover:text-white">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </Button>
                    </a>
                  )} */}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button className="border-white text-white hover:bg-white hover:text-black">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm opacity-70 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      className="bg-red-600/20 text-red-400 border border-red-600/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-cyan-400 transition-all duration-500 ${hoveredProject === index ? 'w-full' : 'w-0'}`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
