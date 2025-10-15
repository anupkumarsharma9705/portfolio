
import React, { useState } from "react";
import { Image as ImageIcon, ExternalLink } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const developmentCert = [
  {
    type: "Coursera",
    title: "Fundamentals of Java Programming",
    description: "Covered core Java fundamentals including syntax, object-oriented programming, and basic application development.",
    image: "https://shorturl.at/uCfeH",
    category: "Development",
    date: "2024",
    url: "https://drive.google.com/file/d/1VaHm5bX1xrj6044ogquPpictekhf_FG-/view?usp=sharing"
  },
  {
    type: "Coursera",
    title: "Introduction to Front-End Development",
    description: "Learned the basics of HTML, CSS, and JavaScript for building responsive web applications.",
    image: "https://shorturl.at/mLi8T",
    category: "Development",
    date: "2024",
    url: "https://drive.google.com/file/d/1FUMfknhpnLak-4HgapKsYs9KuLDVP25V/view?usp=sharing"
  }
];

const CyberCert = [
  {
    title: "Introduction to Cybersecurity",
    excerpt: "Learned basics of cybersecurity, including threats, vulnerabilities, and safe online practices.",
    category: "Cisco Networking Academy",
    date: "2024",
    tags: ["Engineering", "Security"],
    url: "https://drive.google.com/file/d/1d7drQKIwh_prIMIRL03IkmD3OLOyoMyt/view?usp=sharing"
  },
  {
    title: "Vulnerability Management",
    excerpt: "Learned about identifying, assessing, and mitigating vulnerabilities in software systems.",
    category: "IBM SkillsBuild",
    date: "2025",
    tags: ["Security", "Vulnerability", "Best Practices"],
    url: "https://drive.google.com/file/d/1d7drQKIwh_prIMIRL03IkmD3OLOyoMyt/view?usp=sharing"
  },
  {
    title: "Governance, Risk, Compliance, and Data Privacy",
    excerpt: "Covered key principles of governance, risk management, compliance, and data privacy in organizational and regulatory contexts.",
    category: "IBM SkillsBuild",
    date: "2025",
    tags: ["Governance", "Risk", "Data Privacy"],
    url: "https://drive.google.com/file/d/1d7drQKIwh_prIMIRL03IkmD3OLOyoMyt/view?usp=sharing"
  }
];

export default function PitLane() {
  const [activeTab, setActiveTab] = useState("gallery");

  return (
    <section id="pit-lane" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-600/10 border border-cyan-600/30 mb-4">
            <ImageIcon className="w-4 h-4 text-cyan-500" />
            <span className="text-sm font-semibold text-cyan-500">MEDIA & INSIGHTS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-red-600 bg-clip-text text-transparent">
              📸 Checkered Flag Certifications
            </span>
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Milestones marking your tech achievements
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="w-full">
          <div className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-black/40 p-1">
            <button
              onClick={() => setActiveTab("gallery")}
              className={`${activeTab === "gallery" ? "bg-red-600 text-white" : ""} p-2`}
            >
              Development
            </button>
            <button
              onClick={() => setActiveTab("blog")}
              className={`${activeTab === "blog" ? "bg-red-600 text-white" : ""} p-2`}
            >
              CyberSecurity
            </button>
          </div>

          {/* Development Certificates */}
          {activeTab === "gallery" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developmentCert.map((item, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-black/40 backdrop-blur-sm border-2 border-gray-700 hover:border-cyan-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-600 text-white">{item.type}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 text-xs bg-black/60 px-2 py-1 rounded">
                      {item.date}
                    </div>

                    {/* 🔗 Clickable link icon */}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                    </a>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-bold mb-1 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-70">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* CyberSecurity Certificates */
            <div className="space-y-6 max-w-4xl mx-auto">
              {CyberCert.map((post, index) => (
                <Card
                  key={index}
                  className="group bg-black/40 backdrop-blur-sm border-2 border-gray-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className="bg-red-600/20 text-red-400 border border-red-600/30">
                            {post.category}
                          </Badge>
                          <span className="text-xs opacity-50">{post.date}</span>
                        </div>

                        <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm opacity-70 mb-4">{post.excerpt}</p>

                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, i) => (
                            <Badge key={i} className="text-xs border-gray-600">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* 🔗 Clickable Certificate Link */}
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-red-500 font-semibold group-hover:gap-3 transition-all"
                      >
                        <span className="text-sm">Certificate Link</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
