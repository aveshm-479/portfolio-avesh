import React from "react";
import { motion } from "framer-motion";
import { Award, Book, Target, Calendar, MapPin } from "lucide-react";
import Card from "../components/ui/Card";
import { skills, experiences } from "../data/portfolioData";
import { SkillCategory } from "../types/portfolio";

const About: React.FC = () => {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, typeof skills>);

  const metrics = [
    { label: "Years of Backend Experience", value: "8+" },
    { label: "Primary Stack", value: "Node.js · TypeScript · AWS" },
    { label: "Industries Served", value: "FinTech, Aviation, SaaS" },
  ];

  const educationHistory = [
    {
      degree: "Master of Computer Applications",
      school: "L.J. Institute of Computer Application",
      period: "2016 – 2018",
      detail: "CGPA 8.13",
    },
    {
      degree: "Bachelor of Computer Applications",
      school: "Xavier's Institute of Computer Application",
      period: "2013 – 2016",
      detail: "72%",
    },
  ];

  const formatDateRange = (startDate: Date, endDate?: Date, isCurrent?: boolean) => {
    const formatter = new Intl.DateTimeFormat("en", { month: "short", year: "numeric" });
    const start = formatter.format(startDate);
    const end = isCurrent ? "Present" : endDate ? formatter.format(endDate) : "Present";
    return `${start} – ${end}`;
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About & Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I build reliable, scalable Node.js backends that power mission-critical experiences. Here is a closer look at the skills, experience, and education that shape my craft.
          </p>
        </motion.div>

        {/* Overview & Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                  <Target size={20} className="mr-2 text-primary-600" />
                  Technical Focus
                </h3>
                <p className="text-gray-600 text-lg">
                  I specialize in crafting event-driven APIs, serverless workloads, and integration-heavy platforms using Node.js and TypeScript. Clean architecture, thoughtful logging, and observable deployments are at the core of every engagement I lead.
                </p>
              </div>
              <div className="space-y-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">{metric.label}</p>
                    <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 flex items-center justify-center">
            <Award size={24} className="mr-3 text-primary-600" />
            Skill Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skillsByCategory).map(([category, list]) => (
              <Card key={category}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
                <div className="space-y-3">
                  {list.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex items-center justify-between text-gray-700">
                        <div className="flex items-center space-x-2">
                          {skill.icon && <span>{skill.icon}</span>}
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{skill.proficiency}/10</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1">
                        <div
                          className="h-full bg-primary-500"
                          style={{ width: `${skill.proficiency * 10}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 flex items-center justify-center">
            <Book size={24} className="mr-3 text-primary-600" />
            Career Timeline
          </h2>

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                    <div className="space-y-3 md:max-w-3xl">
                      <div>
                        <p className="text-sm uppercase tracking-wide text-primary-600">
                          {formatDateRange(experience.startDate, experience.endDate, experience.isCurrentPosition)}
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {experience.position}
                        </h3>
                        <p className="text-gray-600 font-medium">{experience.company}</p>
                        {experience.location && (
                          <p className="text-sm text-gray-500 flex items-center mt-1">
                            <MapPin size={14} className="mr-1" /> {experience.location}
                          </p>
                        )}
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
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
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
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 flex items-center justify-center">
            <Calendar size={24} className="mr-3 text-primary-600" />
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationHistory.map((education) => (
              <Card key={education.degree}>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">{education.degree}</h3>
                  <p className="text-primary-600 font-medium">{education.school}</p>
                  <p className="text-sm text-gray-500">{education.period}</p>
                  <p className="text-gray-600">{education.detail}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
