import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { projects } from "../data/portfolioData";
import { ProjectCategory } from "../types/portfolio";

// Keywords to highlight in project descriptions
const KEYWORDS = [
  "GenAI",
  "AWS",
  "AppSync",
  "PostgreSQL",
  "Kafka",
  "Serverless",
  "SQS",
  "SNS",
  "EventBridge",
  "Lambda",
  "React",
  "Fastify",
  "tRPC",
  // backend & db
  "Node.js",
  "Node",
  "MySQL",
  "MongoDB",
  "TypeScript",
  "Typescript",
];

function renderHighlighted(text: string) {
  if (!text) return null;
  // Escape keywords for safe regex building and split while preserving matches
  const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(${KEYWORDS.map(escape).join("|")})`, "gi");
  const parts = text.split(re);

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        const isKeyword = KEYWORDS.some((k) => k.toLowerCase() === part.toLowerCase());
        return isKeyword ? (
          <strong key={i} className="font-semibold">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}

const ProjectLongDescription: React.FC<{ text: string; projectId: string }> = ({ text, projectId }) => {
  const [expanded, setExpanded] = React.useState(false);
  const max = 220;
  const needsTruncate = text.length > max;
  const shown = !needsTruncate || expanded ? text : text.slice(0, max).trim() + "...";

  return (
    <div className="mt-2">
      <p className="text-gray-500 text-sm">{renderHighlighted(shown)}</p>
      {needsTruncate && (
        <button
          onClick={() => setExpanded((s) => !s)}
          className="mt-2 text-sm text-primary-600 hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | "ALL">("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "ALL" || project.category === filter;
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Representative programs spanning fintech, aviation, logistics, and consumer platforms. Each initiative highlights how I apply Node.js, TypeScript, and serverless design to deliver dependable products.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 space-y-4"
        >
          {/* Search */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter placeholder for future categories */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFilter("ALL")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "ALL"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Projects
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card hover className="h-full flex flex-col">
                <div className="space-y-4 flex-1">
                  {/* Project Image */}
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {project.title}
                        </h3>
                        {project.techStack.some((t) => t.toLowerCase() === "genai") && (
                          <span className="text-xs font-semibold text-primary-600">
                            GenAI
                          </span>
                        )}
                      </div>
                      {project.featured && (
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    {project.company && (
                      project.companyUrl ? (
                        <a
                          href={project.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary-600 font-semibold hover:underline"
                        >
                          {project.company}
                        </a>
                      ) : (
                        <p className="text-sm text-primary-600 font-semibold">
                          {project.company}
                        </p>
                      )
                    )}

                    <p className="text-gray-600 text-sm">
                      {project.description}
                    </p>

                    {project.longDescription && (
                      <ProjectLongDescription text={project.longDescription} projectId={project.id} />
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => {
                        const isGenAI = tech.toLowerCase() === "genai";
                        return (
                          <span
                            key={tech}
                            className={isGenAI ? "text-xs font-semibold text-primary-600" : "px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"}
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3 pt-4 border-t border-gray-100">
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.demoUrl, "_blank")}
                        className="flex-1"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        className="flex-1"
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
