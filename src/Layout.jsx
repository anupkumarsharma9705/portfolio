import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./components/ui/button";

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(true); // ❌ disabled toggle
  const darkMode = true; // ✅ always dark mode
  const [scrolled, setScrolled] = useState(false);

  // Track scroll to update navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: "🏁" },
    { id: "projects", label: "Projects", icon: "⚙️" },
    { id: "skills", label: "Skills Garage", icon: "🔧" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "pit-lane", label: "Certifications", icon: "📸" },
    { id: "team-radio", label: "Team Radio", icon: "📞" },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? "bg-neutral-900 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        {/* NAVBAR */}
        <nav
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled
              ? darkMode
                ? "bg-black/50 backdrop-blur-md shadow-md"
                : "bg-white/50 backdrop-blur-md shadow-md"
              : "bg-transparent"
          }`}
          style={{
            transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
          }}
        >
          <div className="w-full px-6 lg:px-12">
            <div className="flex justify-between items-center h-14">
              {/* Logo area */}
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => scrollToSection("home")}
              ></div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-red-600/20 relative group ${
                      darkMode
                        ? "text-white"
                        : scrolled
                        ? "text-black"
                        : "text-black"
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                    {/* <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full"></div> */}
                  </button>
                ))}
              </div>

              {/* Theme Toggle + Mobile Menu */}
              <div className="flex items-center gap-3">
                {/* ❌ Disabled theme toggle button */}
                {/* 
                <Button
                  onClick={() => setDarkMode(!darkMode)}
                  className="hidden sm:flex items-center gap-2 border-2 text-sm px-3 py-1 rounded-lg transition-all duration-200 hover:bg-red-600/20"
                  style={{
                    borderColor: "#DC0000",
                    backgroundColor: "transparent",
                    color: darkMode ? "#F5F5F5" : "#1A1A1A",
                  }}
                >
                  {darkMode ? (
                    <>
                      <Sun className="w-4 h-4" />
                      <span>Daylight</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4" />
                      <span>Night Race</span>
                    </>
                  )}
                </Button>
                */}

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden p-2 rounded-lg hover:bg-red-600/20 transition-colors"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X
                      className={`w-6 h-6 ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    />
                  ) : (
                    <Menu
                      className={`w-6 h-6 ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div
              className={`md:hidden border-t border-red-600/30 ${
                darkMode
                  ? "bg-black/90 backdrop-blur-lg text-white"
                  : "bg-white/90 backdrop-blur-lg text-black"
              }`}
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-600/20 flex items-center gap-3"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
                {/* ❌ Disabled mobile theme toggle */}
                {/*
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-600/20 flex items-center gap-3 border-t border-red-600/30 mt-4 pt-6"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                  <span className="font-medium">
                    {darkMode ? "Daylight Mode" : "Night Race Mode"}
                  </span>
                </button>
                */}
              </div>
            </div>
          )}
        </nav>

        {/* MAIN CONTENT */}
        <main className="pt-16">{children}</main>

        {/* FOOTER */}
        <footer className="py-16 border-t border-red-600/30 mt-20 text-center">
          <div className="w-full px-6 lg:px-12">
            <h3
              className="text-2xl md:text-3xl font-black mb-3"
              style={{
                background: "linear-gradient(90deg, #DC0000, #00D2BE)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              "Where Technology Meets the Thrill of Speed"
            </h3>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Passionate about building innovative solutions while living life
              in the fast lane 🏎️
            </p>
            <p className="text-sm opacity-70 mt-8">
              © 2025. Built with speed and precision.
            </p>
            <p className="text-xs mt-2 opacity-50">
              Powered by React & F1 Passion 🏁
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
