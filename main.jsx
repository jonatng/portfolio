import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex flex-col items-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full text-center"
      >
        <img 
          src="/jonatng/portfolio/images/headshot.png" 
          alt="Profile" 
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl font-bold text-white mb-4">John Doe</h1>
        <p className="text-lg text-gray-200 mb-6">Software Engineer | Full-Stack Developer</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl"
      >
        <Card className="p-4 shadow-md bg-white">
          <CardContent>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">About Me</h2>
            <p className="text-gray-600">Passionate software engineer with expertise in building scalable web applications.</p>
          </CardContent>
        </Card>
        <Card className="p-4 shadow-md bg-white">
          <CardContent>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Projects</h2>
            <p className="text-gray-600">Explore my latest work on GitHub.</p>
            <a href="https://github.com/jonatng" target="_blank" rel="noopener noreferrer">
            <Button className="mt-2 bg-blue-500 text-white hover:bg-blue-700">
              <Github className="w-5 h-5 mr-2" /> View on GitHub
            </Button>
            </a>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 flex space-x-4"
      >
        <a href="https://www.linkedin.com/in/jonatng" target="_blank" rel="noopener noreferrer">
        <Button className="bg-blue-700 text-white hover:bg-blue-900">
          <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
        </Button>
        </a>
        <a href="mailto:jonatngu@icloud.com">
        <Button className="bg-red-500 text-white hover:bg-red-700">
          <Mail className="w-5 h-5 mr-2" /> Contact
        </Button>
        </a>
      </motion.div>
    </div>
  );
}
