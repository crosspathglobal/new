"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';
import { ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  items?: { title: string; href: string }[];
  href?: string;
}

const navItems: NavItem[] = [
  {
    label: 'Platform',
    items: [
      { title: 'Developer Matching', href: '/platform/matching' },
      { title: 'Team Management', href: '/platform/management' },
      { title: 'Skill Assessment', href: '/platform/assessment' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { title: 'Blog', href: '/resources/blog' },
      { title: 'Case Studies', href: '/resources/case-studies' },
      { title: 'Documentation', href: '/resources/docs' },
    ],
  },
  {
    label: 'Company',
    items: [
      { title: 'About Us', href: '/company/about' },
      { title: 'Careers', href: '/company/careers' },
      { title: 'Contact', href: '/company/contact' },
    ],
  },
];

export function Navigation() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="fixed w-full z-50 glass-nav">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              TalentForge
            </a>
            <div className="hidden md:flex ml-10 space-x-2">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button className="nav-link flex items-center">
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {hoveredItem === item.label && item.items && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-56 glass-card rounded-lg shadow-lg py-2"
                    >
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Log In</Button>
            <Button variant="outline">Talk to Sales</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}