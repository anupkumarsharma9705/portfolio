import React from "react";
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "St. Peter's Engineering College",
    location: "Hyderabad, Telangana",
    period: "2021 - 2025",
    grade: "CGPA: 7.73/10",
    icon: GraduationCap,
    color: "from-purple-600 to-purple-800",
    highlights: [
      "Specialized in Software Development & CyberSecurity",
      "Final Year Project: EmotionEcho Using OpenCV and DeepFace Libraries"
    ],
    achievements: ["Been a good student with discipline, punctuality and dedication"]
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    field: "Science Stream (PCM)",
    institution: "Sri Chaitanya Junior College",
    location: "Hyderabad, Telangana",
    period: "2019 - 2021",
    grade: "Percentage: 93.4%",
    icon: BookOpen,
    color: "from-cyan-600 to-cyan-800",
    highlights: [
      "Focused on Physics, Chemistry and Mathematics",
    ],
    achievements: []
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "Navodaya High School",
    location: "Hyderabad, Telangana",
    period: "2018 - 2019",
    grade: "Percentage: 88%",
    icon: Award,
    color: "from-red-600 to-red-800",
    highlights: [
      "Active in sports and extracurricular activities",
      "Developed passion for Formula 1 racing"
    ],
    achievements: ["Good In Mathematics"]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 carbon-fiber opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"></div>

      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 h-full">
          {[...Array(400)].map((_, i) => (
            <div key={i} className={`${(Math.floor(i / 20) + i) % 2 === 0 ? 'bg-white' : 'bg-black'}`} />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/30 mb-4">
            <GraduationCap className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-semibold text-purple-500">ACADEMIC JOURNEY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent">
              🎓 EDUCATION
            </span>
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Building a strong foundation for racing through the tech world
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-black/40 backdrop-blur-sm border-2 border-gray-700 hover:border-purple-500 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="md:mt-4">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${edu.color} text-white text-sm font-bold`}>
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-cyan-400 mb-1">{edu.field}</p>
                        <div className="flex flex-wrap items-center gap-2 text-sm opacity-70">
                          <span className="font-medium">{edu.institution}</span>
                          <span>•</span>
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <Badge className="bg-green-600/20 text-green-400 border border-green-600/30 text-sm px-3 py-1">
                          <Trophy className="w-3 h-3 mr-1" />
                          {edu.grade}
                        </Badge>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold opacity-70 mb-2">Key Highlights:</h4>
                        <div className="space-y-2">
                          {edu.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-purple-500 mt-1.5 flex-shrink-0"></div>
                              <span className="opacity-80">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <Badge key={i} className="bg-purple-600/20 text-purple-400 border border-purple-600/30 text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </CardContent>

                <div className="absolute inset-0 carbon-fiber opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-purple-600/20 to-transparent border-2 border-purple-600/30 text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-black text-purple-500 mb-2">Fresh</div>
              <div className="text-sm opacity-70">Graduate ready to race into the industry</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-red-600/20 to-transparent border-2 border-red-600/30 text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-black text-red-500 mb-2">Driven</div>
              <div className="text-sm opacity-70">By passion for tech and automobiles</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-cyan-600/20 to-transparent border-2 border-cyan-600/30 text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-black text-cyan-400 mb-2">Ready</div>
              <div className="text-sm opacity-70">To accelerate your team's success</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
