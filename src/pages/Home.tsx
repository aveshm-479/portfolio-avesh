import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Github,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { projects, experiences } from "../data/portfolioData";
import profileImage from "../assets/self.jpeg";

const Home: React.FC = () => {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  const showcasedExperiences = experiences;

  const educationHistory = [
    {
      degree: "Master of Computer Applications",
      school: "L.J. Institute of Computer Application",
      period: "2016 – 2018",
      score: "CGPA 8.13",
    },
    {
      degree: "Bachelor of Computer Applications",
      school: "Xavier's Institute of Computer Application",
      period: "2013 – 2016",
      score: "72%",
    },
  ];

  const formatDateRange = (startDate: Date, endDate?: Date, isCurrent?: boolean) => {
    const formatter = new Intl.DateTimeFormat("en", {
      month: "short",
      year: "numeric",
    });
    const start = formatter.format(startDate);
    const end = isCurrent ? "Present" : endDate ? formatter.format(endDate) : "Present";
    return `${start} – ${end}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-center space-x-2 text-primary-600"
                >
                  <MapPin size={16} />
                  <span className="text-sm font-medium">
                    Ahmedabad, India · Open to remote opportunities
                  </span>
                </motion.div>

                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                    Avesh Memon
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Node.js developer with <strong>8+ years</strong> of hands-on experience designing event-driven, serverless, and API-first backends. I help fintech, aviation, and SaaS teams ship resilient services with TypeScript, Fastify, NestJS, and AWS while keeping codebases clean, testable, and production ready.
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/aveshm-479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 hover:text-primary-600"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/avesh-memon-bb2301186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 hover:text-primary-600"
                >
                  <Linkedin size={20} />
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Mail size={16} className="text-primary-600" />
                  <a href="mailto:aveshm479@gmail.com" className="hover:text-primary-600">
                    aveshm479@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-primary-600" />
                  <a href="tel:+918488050759" className="hover:text-primary-600">
                    +91 84880 50759
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle size={16} className="text-primary-600" />
                  <a
                    href="https://wa.me/918488050759"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-600"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 p-1">
                  <div className="w-full h-full rounded-full bg-white p-4 flex items-center justify-center">
                    <img
                      src={profileImage}
                      alt="Avesh Memon"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-medium">Available</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3"
                >
                  <div className="text-xs font-medium text-gray-600">
                    8+ Years Experience
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delivering production-grade Node.js platforms across fintech, aviation, and SaaS domains since 2018
            </p>
          </motion.div>

          <div className="space-y-8">
            {showcasedExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {experience.position}
                        </h3>
                        <p className="text-primary-600 font-medium">{experience.company}</p>
                      </div>
                      <div className="text-sm text-gray-500 text-left md:text-right">
                        <div>{formatDateRange(experience.startDate, experience.endDate, experience.isCurrentPosition)}</div>
                        {experience.location && <div>{experience.location}</div>}
                      </div>
                    </div>
                    <p className="text-gray-600">{experience.description}</p>
                    {experience.highlights && (
                      <ul className="space-y-2 text-gray-600">
                        {experience.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start">
                            <span className="mr-2 text-primary-600 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A sample of the platforms and products I have delivered recently. Each project pairs modern Node.js stacks with resilient cloud infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                        <span className="text-xs font-medium text-primary-600">{project.category}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">+{project.techStack.length - 4}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  {(project.demoUrl || project.githubUrl) && (
                    <div className="flex space-x-3 pt-4 border-t border-gray-100">
                      {project.demoUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(project.demoUrl, "_blank")}
                          className="flex-1"
                        >
                          View Live
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                          className="flex-1"
                        >
                          Source
                        </Button>
                      )}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg" variant="secondary">
                Browse Full Portfolio
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Education
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Formal training that grounds my backend craftsmanship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationHistory.map((education, index) => (
              <motion.div
                key={education.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">{education.degree}</h3>
                    <p className="text-primary-600 font-medium">{education.school}</p>
                    <p className="text-sm text-gray-500">{education.period}</p>
                    <p className="text-gray-600">{education.score}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to build your next API platform?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              I love partnering with ambitious teams to turn complex requirements into reliable services and measurable impact.
            </p>
            <br/>
            <br/>
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="bg-transparent text-white border border-white hover:bg-transparent hover:text-white"
              >
                Get In Touch
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
