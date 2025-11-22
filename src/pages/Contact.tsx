import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { ContactForm } from "../types/portfolio";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "aveshm479@gmail.com",
      href: "mailto:aveshm479@gmail.com",
      isExternal: false,
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 84880 50759",
      href: "tel:+918488050759",
      isExternal: false,
    },
    {
      icon: <MessageCircle size={24} />,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/918488050759",
      isExternal: true,
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      href: null,
      isExternal: false,
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/aveshm-479",
      color: "hover:bg-gray-900",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/avesh-memon-bb2301186",
      color: "hover:bg-blue-700",
    },
    {
      icon: <MessageCircle size={20} />,
      label: "WhatsApp",
      href: "https://wa.me/918488050759",
      color: "hover:bg-green-600",
    },
  ];

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
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I’m collaborating with teams that value clean code, thoughtful API design, and measurable outcomes. Share a brief outline of your product or hiring needs and I’ll respond with next steps.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <div className="text-primary-600">{info.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {info.label}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.isExternal ? "_blank" : undefined}
                          rel={info.isExternal ? "noopener noreferrer" : undefined}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Follow Me
              </h2>

              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg text-gray-700 transition-all duration-200 ${link.color} hover:text-white`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
