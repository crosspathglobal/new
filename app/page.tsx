"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { InfiniteLogoScroll } from "@/components/ui/infinite-scroll";
import { 
  Users, 
  Briefcase, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Code2,
  Building2,
  Timer,
  UserCheck,
  ExternalLink,
  Twitter,
  Linkedin
} from "lucide-react";

const companies = [
  { 
    name: "Caixa Geral",
    logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=128&h=128&fit=crop"
  },
  { 
    name: "Kuanto Kusta",
    logo: "https://images.unsplash.com/photo-1614680376408-16e303012d5b?w=128&h=128&fit=crop"
  },
  { 
    name: "Fidelidade",
    logo: "https://images.unsplash.com/photo-1614680376593-e7f6ea85a5cb?w=128&h=128&fit=crop"
  },
  { 
    name: "Superagent",
    logo: "https://images.unsplash.com/photo-1614680376458-0a6f9c461a38?w=128&h=128&fit=crop"
  },
  { 
    name: "Paybyrd",
    logo: "https://images.unsplash.com/photo-1614680376739-2f7c0a38f98b?w=128&h=128&fit=crop"
  },
  { 
    name: "Jose de Mello",
    logo: "https://images.unsplash.com/photo-1614680376583-6d8f8d0c7b18?w=128&h=128&fit=crop"
  }
];

const process = [
  {
    title: "Requirements Analysis",
    description: "We carefully analyze your needs to understand the perfect fit for your team",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    title: "Talent Matching",
    description: "Our AI-powered system matches you with pre-vetted developers",
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    title: "Quick Turnaround",
    description: "Get matched with the right talent within 48 hours",
    icon: <Timer className="w-6 h-6" />,
  },
  {
    title: "Ongoing Support",
    description: "We provide continuous support throughout the engagement",
    icon: <Users className="w-6 h-6" />,
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    content: "TalentForge helped us build our engineering team from scratch. Their developers are top-notch!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Engineering Manager",
    content: "The quality of developers we've gotten through TalentForge has been consistently excellent.",
    rating: 5,
  },
  {
    name: "Lisa Rodriguez",
    role: "Product Lead",
    content: "Fast, efficient, and reliable. TalentForge is our go-to partner for technical talent.",
    rating: 5,
  },
];

const blogs = [
  {
    title: "Building Effective Remote Development Teams",
    excerpt: "Learn the best practices for managing and scaling remote development teams...",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=400&fit=crop",
    category: "Team Management",
  },
  {
    title: "The Future of Tech Recruitment",
    excerpt: "Exploring how AI and automation are transforming technical recruitment...",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    category: "Industry Trends",
  },
  {
    title: "Scaling Your Engineering Team",
    excerpt: "Strategic approaches to growing your development team without compromising quality...",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop",
    category: "Growth",
  },
];

const footerLinks = {
  platform: [
    { name: "Co-workers", href: "/platform/co-workers" },
    { name: "AI Automations", href: "/platform/ai-automations" },
    { name: "Security", href: "/platform/security" },
  ],
  resources: [
    { name: "Blog", href: "/blog", external: true },
    { name: "API", href: "/api", external: true },
    { name: "Documentation", href: "/docs", external: true },
    { name: "Tutorials", href: "/tutorials", external: true },
    { name: "Terms and Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Trust Center", href: "/trust", external: true },
  ],
  company: [
    { name: "About Noxus", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Careers", href: "/careers", external: true },
    { name: "Status", href: "/status", external: true },
  ],
};

function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Build Your Dream Tech Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with pre-vetted, exceptional developers who can transform your vision into reality.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <h2 className="text-lg font-medium text-gray-600 uppercase tracking-wider mb-2">
                ENTERPRISES THAT TRUST NOXUS
              </h2>
            </div>
            <div className="overflow-hidden">
              <InfiniteLogoScroll companies={companies} speed={30} />
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-center mb-12">Our Hiring Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <Card key={step.title} className="p-6 glass-card">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-4 p-3 bg-blue-100 rounded-full text-blue-600">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                </Card>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.name} className="p-6 glass-card">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col h-full"
                  >
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">{testimonial.content}</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </motion.div>
                </Card>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <Card key={blog.title} className="overflow-hidden glass-card">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span className="text-sm text-blue-600 font-semibold">
                        {blog.category}
                      </span>
                      <h3 className="text-xl font-semibold mt-2 mb-3">{blog.title}</h3>
                      <p className="text-gray-600">{blog.excerpt}</p>
                      <Button variant="link" className="mt-4 p-0">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                </Card>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-lg font-semibold uppercase text-gray-500 mb-6">PLATFORM</h3>
              <ul className="space-y-4">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-600 hover:text-gray-900">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold uppercase text-gray-500 mb-6">RESOURCES</h3>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-600 hover:text-gray-900 flex items-center">
                      {link.name}
                      {link.external && <ExternalLink className="ml-1 h-3 w-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold uppercase text-gray-500 mb-6">COMPANY</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-600 hover:text-gray-900 flex items-center">
                      {link.name}
                      {link.external && <ExternalLink className="ml-1 h-3 w-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
            <p className="text-gray-500">Copyright ©2024, Noxus. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://twitter.com" className="text-gray-400 hover:text-gray-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}